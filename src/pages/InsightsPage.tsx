import { PageHero, Reveal, InsightGrid } from "../site-shared";

function InsightsPage() {
  return (
    <>
      <PageHero
        label="INSIGHTS"
        title="One editorial hub for the institution's thinking and work."
        summary="Articles, research briefs, field notes, documentaries, announcements, and other published material share one coherent publishing surface."
      />
      <Reveal id="insights" className="insights-section">
        <div className="container">
          <InsightGrid />
        </div>
      </Reveal>
    </>
  );
}

export default InsightsPage;
