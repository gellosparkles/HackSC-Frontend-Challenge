// Local mock of the HackSC projects API, served by the Vite dev server at /api.
// It implements the contract from the challenge spec:
//   GET  /api/projects   POST /api/like   POST /api/dislike   POST /api/reset
//
// State lives in memory, so every candidate gets their own leaderboard and
// restarting the dev server resets it.
//
// Optional environment variables:
//   MOCK_LATENCY_MS  delay added to every response (default 400)
//   MOCK_FAIL_RATE   fraction of requests that fail with a 500, 0 to 1 (default 0)
import { SEED_PROJECTS } from './projects.js';

// Each vote moves a score by 2 and neighbouring seed scores are 1 apart, so a
// single like or dislike always moves a project one place (unless it is already
// at the top or bottom).
const VOTE_WEIGHT = 2;

function readConfig() {
  const latencyMs = Number(process.env.MOCK_LATENCY_MS ?? 400);
  const failRate = Number(process.env.MOCK_FAIL_RATE ?? 0);
  return {
    latencyMs: Number.isFinite(latencyMs) && latencyMs >= 0 ? latencyMs : 400,
    failRate: Number.isFinite(failRate) ? Math.min(Math.max(failRate, 0), 1) : 0,
  };
}

function createStore() {
  let scores;

  function reset() {
    scores = new Map(SEED_PROJECTS.map((p) => [p.id, p.baseScore]));
  }

  function rankedProjects() {
    return SEED_PROJECTS.map((project, seedIndex) => ({
      project,
      seedIndex,
      score: scores.get(project.id),
    }))
      .sort((a, b) => b.score - a.score || a.seedIndex - b.seedIndex)
      .map(({ project }, index) => ({
        id: project.id,
        name: project.name,
        descriptionShort: project.descriptionShort,
        descriptionLong: project.descriptionLong,
        thumbnail: project.thumbnail,
        rank: index + 1,
      }));
  }

  function vote(projectId, direction) {
    if (!scores.has(projectId)) return false;
    scores.set(projectId, scores.get(projectId) + direction * VOTE_WEIGHT);
    return true;
  }

  reset();
  return { reset, rankedProjects, vote };
}

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => resolve(raw));
    req.on('error', reject);
  });
}

async function readJsonBody(req) {
  const contentType = req.headers['content-type'] ?? '';
  if (!contentType.includes('application/json')) {
    return { error: 'Expected Content-Type: application/json' };
  }
  const raw = await readBody(req);
  try {
    return { body: JSON.parse(raw) };
  } catch {
    return { error: 'Request body is not valid JSON' };
  }
}

function createHandler(store) {
  return async function handleApiRequest(req, res) {
    // Mounted at /api, so req.url is e.g. "/projects".
    const pathname = new URL(req.url, 'http://localhost').pathname.replace(/\/+$/, '');
    const { latencyMs, failRate } = readConfig();

    await new Promise((resolve) => setTimeout(resolve, latencyMs));

    if (Math.random() < failRate) {
      return sendJson(res, 500, { error: 'Simulated server error (MOCK_FAIL_RATE)' });
    }

    if (pathname === '/projects') {
      if (req.method !== 'GET') return sendJson(res, 405, { error: 'Method not allowed' });
      return sendJson(res, 200, { data: store.rankedProjects() });
    }

    if (pathname === '/like' || pathname === '/dislike') {
      if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed' });
      const { body, error } = await readJsonBody(req);
      if (error) return sendJson(res, 400, { error });
      if (typeof body?.projectId !== 'string') {
        return sendJson(res, 400, { error: 'Request body must include a string "projectId"' });
      }
      const direction = pathname === '/like' ? 1 : -1;
      if (!store.vote(body.projectId, direction)) {
        return sendJson(res, 404, { error: `No project with id "${body.projectId}"` });
      }
      return sendJson(res, 200, { success: true });
    }

    if (pathname === '/reset') {
      if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed' });
      store.reset();
      return sendJson(res, 200, { success: true });
    }

    return sendJson(res, 404, { error: `Unknown endpoint: ${req.method} /api${pathname}` });
  };
}

export default function mockApi() {
  const handler = createHandler(createStore());
  return {
    name: 'hacksc-mock-api',
    configureServer(server) {
      server.middlewares.use('/api', handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api', handler);
    },
  };
}
