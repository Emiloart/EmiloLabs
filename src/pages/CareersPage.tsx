import { PageHero, CareersGrid, Reveal, SectionLabel, contactHref } from "../site-shared";

function CareersPage() {
  return (
    <>
      <PageHero
        label="CAREERS"
        title="Build systems that deserve to exist."
        summary="Emilo Labs uses this page as a long-term talent network for engineering, research, security, design, and other work required to build the institution."
      >
        <div className="page-hero-actions">
          <a href={contactHref("Talent inquiry")} className="primary-button">Introduce yourself</a>
        </div>
      </PageHero>
      <CareersGrid />
      <Reveal id="careers-note" className="cta-section">
        <div className="container">
          <div className="cta-band light-panel">
            <div>
              <SectionLabel>OPEN APPLICATIONS</SectionLabel>
              <h2>Show the work, the judgment, and the systems you want to help build.</h2>
              <p>Send a concise introduction covering your technical or research strengths, relevant work, and the area where you want to contribute.</p>
            </div>
            <a href={contactHref("Talent inquiry")} className="secondary-button">Contact careers</a>
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default CareersPage;
