import { PageHero, ResearchTrackGrid, Reveal, SectionLabel, PillarCards, InsightsPreview, type PageProps } from "../site-shared";

function ResearchPage({ currentPath, onNavigate }: PageProps) {
  return (
    <>
      <PageHero
        label="RESEARCH"
        title="Questions worth solving before systems are scaled."
        summary="Research at Emilo Labs spans identity, privacy, security, intelligent systems, financial systems, and internet infrastructure. The page separates active inquiry from product and engineering work."
      />
      <ResearchTrackGrid />
      <Reveal id="research-domains" className="pillars-section">
        <div className="container">
          <SectionLabel>RESEARCH DOMAINS</SectionLabel>
          <div className="split-heading">
            <h2>Six connected areas of investigation.</h2>
            <p>Each domain addresses a distinct systems problem while remaining connected to the wider infrastructure layer.</p>
          </div>
          <PillarCards items={[
            { title: "Identity", summary: "Reusable proof and portable credentials.", signal: "Trust" },
            { title: "Privacy", summary: "Continuity and communication without unnecessary exposure.", signal: "Privacy" },
            { title: "Security", summary: "Threat-aware systems designed around failure and recovery.", signal: "Defense" },
            { title: "Intelligent Systems", summary: "Bounded AI assistance, structured reasoning, and automation.", signal: "Intelligence" },
            { title: "Financial Systems", summary: "Safer value exchange, lending, settlement, and financial coordination.", signal: "Value" },
            { title: "Internet Systems", summary: "Infrastructure for communication, coordination, and safer digital participation.", signal: "Network" },
          ]} />
        </div>
      </Reveal>
      <InsightsPreview currentPath={currentPath} onNavigate={onNavigate} featuredOnly={false} />
    </>
  );
}

export default ResearchPage;
