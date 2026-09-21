/**
 * One project in the spotlight grid: rank, name, short blurb, and vote buttons.
 *
 * Props:
 *   project    { id, name, descriptionShort, rank, ... } — one item from GET /projects
 *   onSelect   () => void — called when the user clicks the card to see more details
 *   onLike     () => void — called when the user clicks the like (heart) button
 *   onDislike  () => void — called when the user clicks the dislike button
 *   disabled   boolean (optional) — disables both vote buttons, e.g. while a vote is sending
 *
 * The vote buttons are separate from the clickable card body, so clicking a
 * vote button never triggers onSelect.
 */
export default function ProjectCard({ project, onSelect, onLike, onDislike, disabled = false }) {
  return (
    <article className="card">
      <button type="button" className="card__main" onClick={onSelect}>
        <span className="card__rank">#{project.rank}</span>
        <span className="card__title">{project.name}</span>
        <span className="card__blurb">{project.descriptionShort}</span>
        <span className="card__more">View details →</span>
      </button>

      <div className="card__actions">
        <button
          type="button"
          className="vote vote--like"
          onClick={onLike}
          disabled={disabled}
          aria-label={`Like ${project.name}`}
        >
          <HeartIcon />
          Like
        </button>
        <button
          type="button"
          className="vote vote--dislike"
          onClick={onDislike}
          disabled={disabled}
          aria-label={`Dislike ${project.name}`}
        >
          <BrokenHeartIcon />
          Dislike
        </button>
      </div>
    </article>
  );
}

const HEART_PATH =
  'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';

function HeartIcon() {
  return (
    <svg className="vote__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={HEART_PATH} />
    </svg>
  );
}

function BrokenHeartIcon() {
  return (
    <svg className="vote__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={HEART_PATH} />
      <path d="M12.5 5.5l-2 4 3 2.5-2 4" className="vote__crack" />
    </svg>
  );
}
