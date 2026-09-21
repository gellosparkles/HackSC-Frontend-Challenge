import Hero from './components/Hero.jsx';
import ProjectCard from './components/ProjectCard.jsx';

export default function App() {
  return (
    <div className="page">
      <Hero />

      <section className="section">
        <h2 className="section-title">Previous Winners Spotlight</h2>
        <ul className="project-grid">
          {/* TODO: Fetch the projects, render a ProjectCard for each one, and connect voting. */}
        </ul>
      </section>

      {/* TODO: Show the selected project's details and provide a way to close them. */}
    </div>
  );
}
