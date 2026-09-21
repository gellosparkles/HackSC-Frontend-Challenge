# HackSC Engineering — Frontend Challenge

Our goal at HackSC is to constantly improve our past design and development. One task we have this semester is to improve our landing page so visitors can view previous projects that were created at our hackathon. As a member of the Engineering team at HackSC, you've been tasked with prototyping the web interface for the page!

The page should show a list of projects in one section. Each item shows the project's **name** and a **short blurb** about it. The user should also be able to see more information about a project by **clicking on it**, where a **longer description and an image** are shown. Visitors can also **like** or **dislike** projects, which changes their ranking.

The backend (a REST API) has already been built and runs locally alongside the app, so there's nothing to deploy and no account to create. You will work through the challenge in a pair-programming interview. Explain your thinking, ask questions, and treat your interviewer as a collaborator.

---

## Getting started

This project uses Node.js **22.12.0**, recorded in `.nvmrc`. Node.js **20.19.x** or **22.12+** is supported.

Before the interview, create your own repository from the provided GitHub template, clone it, and install the dependencies:

```bash
npm ci
npm run dev
```

Open the URL it prints (usually http://localhost:5173). The starter page should show the HackSC banner and an empty **Previous Winners Spotlight** section. During the interview, you will complete the TODOs in `src/App.jsx`.

---

## Your task

**Edit `src/App.jsx`.** It already exports a compiling React component and includes the page structure. Styling is provided.

### Required

1. **Show the list.** When the page loads, fetch `GET /api/projects` and show each project using `<ProjectCard />`. The API already returns projects in rank order.
2. **Show project details.** Clicking a project shows its long description and image, with a way to close it again.
3. **Voting.** The like and dislike buttons call `POST /api/like` and `POST /api/dislike`. After a vote, the list shows the updated ranking.

### Optional, only if time allows

- Show a loading message while projects load and an error message if the request fails.
- Add another small improvement and explain the choice to your interviewer.

### Sample UI design

The layout below is a guide, not a pixel spec.

```
┌──────────────────────────────────────────────────────────┐
│  HackSC                                      ┌─┐         │
│  ~~~~~~~~~~~~~~~~~                        ┌──┤1├──┐      │
│  ~~~~~~~~~~~~~~                           │2 │ │ 3│      │   ← <Hero /> (provided)
├──────────────────────────────────────────────────────────┤
│ ─────────── PREVIOUS WINNERS SPOTLIGHT ─────────────     │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│ │ #1 Proj 1  ♥ │  │ #2 Proj 2  ♡ │  │ #3 Proj 3  ♡ │     │   ← <ProjectCard /> (provided)
│ │ ~~~~~~~~~~   │  │ ~~~~~~~~~~   │  │ ~~~~~~~~~~   │     │
│ └──────────────┘  └──────────────┘  └──────────────┘     │
└──────────────────────────────────────────────────────────┘
```

---

## What's already built for you

You can read and use these files, but you shouldn't need to change them.

| File | What it is |
|---|---|
| `src/components/Hero.jsx` | The banner at the top of the page. No props: `<Hero />` |
| `src/components/ProjectCard.jsx` | One project card with rank, name, blurb, and like/dislike buttons. See its props below. |
| `src/styles.css` | All styling. **Section 4** lists ready-made classes for the parts you build: `page`, `section-title`, `project-grid`, `detail`, and more. |
| `mock-api/` | The local backend. You don't need to read it. |

### `<ProjectCard />` props

| Prop | Type | Description |
|---|---|---|
| `project` | object | One project from `GET /api/projects` |
| `onSelect` | `() => void` | Called when the card is clicked |
| `onLike` | `() => void` | Called when the like button is clicked |
| `onDislike` | `() => void` | Called when the dislike button is clicked |
| `disabled` | boolean, optional | Disables both vote buttons |

Clicking a vote button does **not** also call `onSelect`.

---

## API reference

**Base URL:** `/api` (served by the development server, such as `fetch('/api/projects')`)

Every response is JSON. Errors return a non-2xx status with a body like `{ "error": "..." }`.

### `GET /api/projects`

Returns the projects in ascending rank order. Each project has this shape:

```json
{
  "id": "3f9a1c7e",
  "name": "Tidewatch",
  "descriptionShort": "Early warnings for coastal flooding, block by block.",
  "descriptionLong": "Tidewatch combines NOAA tide forecasts with ...",
  "thumbnail": "/thumbnails/3f9a1c7e.svg",
  "rank": 1
}
```

Response `200`:

```json
{ "data": [/* project objects */] }
```

### `POST /api/like` and `POST /api/dislike`

Adds a like or dislike to a project, which can change its rank.

Request body (`Content-Type: application/json`):

```json
{ "projectId": "3f9a1c7e" }
```

Response `200`:

```json
{ "success": true }
```

### `POST /api/reset`

Resets rankings to their starting order. You should not need it; restarting `npm run dev` also resets everything.

Every response is delayed by 400 ms to behave more like a real network.

---

## Acceptance checklist

Before pushing your work, verify that:

- All eight projects appear with rank #1 first.
- Clicking a card shows its long description and image.
- The project detail view can be closed.
- Like and dislike send the appropriate request.
- The visible ranking changes after a successful vote.
- The browser console has no errors or React key warnings.

## Rules

- Plain React and CSS are enough. If you add a library, explain why during the interview.
- You may use documentation, search, and the tools allowed by your interviewer.

## GitHub upload

At the end of the interview:

```bash
git add -A
git commit -m "Complete frontend challenge"
git push
```

Send the interviewer the link to your GitHub repository.

Good luck, and have fun!