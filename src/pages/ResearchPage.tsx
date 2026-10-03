import { PageHero, InsightGrid, RESEARCH_AREAS, SectionLabel } from "../site-shared";

function ResearchPage() {
  return (
    <>
      <PageHero label="RESEARCH" title="Published work and questions under study." summary="Essays and papers sit alongside areas of inquiry across identity, privacy, security, intelligent systems, finance, and internet infrastructure." />
      <section className="section insights-section">
        <div className="container">
          <SectionLabel>PUBLISHED</SectionLabel>
          <div className="split-heading">
            <h2>Published work.</h2>
            <p>Essays and papers, with dates and links to the original publication.</p>
          </div>
          <InsightGrid layout="index" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionLabel>AREAS OF INQUIRY</SectionLabel>
          <div className="split-heading">
            <h2>Questions that continue beyond a publication.</h2>
            <p>These areas describe the scope of inquiry. They are not claims of completed findings.</p>
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
