/**
 * Top banner of the landing page. Takes no props.
 */
export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__text">
        <p className="hero__eyebrow">Southern California’s flagship hackathon</p>
        <h1 className="hero__title">HackSC</h1>
        <p className="hero__tagline">
          36 hours, hundreds of hackers, and projects worth remembering. Here’s what past
          teams built — vote for your favorites.
        </p>
      </div>
      <PodiumIllustration />
    </header>
  );
}

function PodiumIllustration() {
  return (
    <svg className="hero__art" viewBox="0 0 240 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <rect x="20" y="110" width="66" height="56" rx="4" />
        <rect x="87" y="70" width="66" height="96" rx="4" />
        <rect x="154" y="130" width="66" height="36" rx="4" />
        <circle cx="53" cy="92" r="12" />
        <circle cx="120" cy="50" r="12" />
        <circle cx="187" cy="112" r="12" />
      </g>
      <g fontFamily="inherit" fontWeight="700" fontSize="22" fill="currentColor" textAnchor="middle">
        <text x="53" y="146">2</text>
        <text x="120" y="126">1</text>
        <text x="187" y="156">3</text>
      </g>
      <path
        d="M120 14l4.4 8.9 9.8 1.4-7.1 6.9 1.7 9.8-8.8-4.6-8.8 4.6 1.7-9.8-7.1-6.9 9.8-1.4z"
        className="hero__star"
      />
    </svg>
  );
}
