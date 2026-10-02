import { PageHero, InsightGrid, RESEARCH_AREAS, SectionLabel, type PageProps } from "../site-shared";

function ResearchPage() {
  return (
    <>
      <PageHero label="RESEARCH" title="Published work and active investigations." summary="Emilo Labs publishes research and maintains ongoing investigations across identity, privacy, security, intelligent systems, finance, and internet infrastructure." />
      <section className="section insights-section">
        <div className="container">
          <SectionLabel>PUBLISHED</SectionLabel>
          <div className="split-heading">
            <h2>Research already in the world.</h2>
            <p>Published work from the institution, linked directly to the original source.</p>
          </div>
          <InsightGrid />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionLabel>RESEARCH AREAS</SectionLabel>
          <div className="split-heading">
            <h2>Current fields of investigation.</h2>
            <p>Organizing areas, not separate departments or product categories.</p>
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
