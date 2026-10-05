import { PageHero, InsightGrid, RESEARCH_AREAS, SectionLabel } from "../site-shared";

function ResearchPage() {
  return (
    <>
      <PageHero label="EMILO LABS" title="Research" />
      <section className="section insights-section">
        <div className="container">
          <div className="split-heading">
            <h2>Publications</h2>
          </div>
          <InsightGrid layout="index" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionLabel>ONGOING</SectionLabel>
          <div className="split-heading">
            <h2>Research questions</h2>
          </div>
          <div className="pillar-grid">
            {RESEARCH_AREAS.map(([title, description]) => (
              <article key={title} className="pillar-card light-panel"><strong>{title}</strong><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default ResearchPage;
