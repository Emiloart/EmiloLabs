import { PageHero, SectionLabel } from "../site-shared";

const LABS = [
  ["Celetixo", "Engineering-state coordination and optimistic concurrency for AI coding agents.", "Experimental"],
  ["UTB", "An AI-native research system for continuous investigation and structured intelligence.", "In development"],
  ["SCOS Pro", "An operating layer for persistent AI-assisted coordination across a person's digital life.", "In development"],
];

function LabsPage() {
  return (
    <>
      <PageHero label="LABS" title="Work that has not become a product yet." summary="Experiments, prototypes, and systems under active investigation. Labs work can become products, infrastructure, or remain research." />
      <section className="section">
        <div className="container">
          <SectionLabel>EXPERIMENTS</SectionLabel>
          <div className="track-grid">
            {LABS.map(([name, description, status]) => (
              <article key={name} className="track-card light-panel">
                <span>{status}</span><strong>{name}</strong><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default LabsPage;
