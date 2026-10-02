import { PageHero, ResearchTrackGrid, InsightsPreview, RESEARCH_AREAS, SectionLabel, AppLink, type PageProps } from "../site-shared";

function ResearchPage({ currentPath, onNavigate }: PageProps) {
  return (
    <>
      <PageHero
        label="RESEARCH"
        title="Published work and active investigations."
        summary="Emilo Labs publishes research and maintains ongoing investigations across identity, privacy, security, intelligent systems, finance, and internet infrastructure."
      />
      <ResearchTrackGrid />
      <section className="section">
        <div className="container">
          <SectionLabel>RESEARCH AREAS</SectionLabel>
          <div className="split-heading">
            <h2>Current fields of investigation.</h2>
            <p>These are organizing areas, not separate departments or product categories.</p>
          </div>
          <div className="pillar-grid">
            {RESEARCH_AREAS.map(([title, description]) => (
              <article key={title} className="pillar-card light-panel"><strong>{title}</strong><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>
      <InsightsPreview currentPath={currentPath} onNavigate={onNavigate} featuredOnly={false} />
      <div className="container home-actions"><AppLink href="/labs" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">See the Labs</AppLink></div>
    </>
  );
}
export default ResearchPage;
