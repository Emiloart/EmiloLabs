import { CONTACT_EMAIL, NAV_LINKS, FOOTER_GROUPS, PAGE_META, INSTITUTION_FLOW, RESEARCH_AREAS, RESEARCH_LOOP, PRODUCT_TIERS, PRODUCT_TONES, TECHNOLOGY_AREAS, ECOSYSTEM_MARKS, ECOSYSTEM_LOOP, INITIATIVES, ORGANIZATION_PILLARS, PRINCIPLES, RESEARCH_TRACKS, TECHNOLOGY_CAPABILITIES, INSIGHTS, CAREER_PATHS, PRESS_FACTS, CONTACT_CHANNELS, useInView, useReducedMotion, normalizePath, useRoute, usePageMeta, AppLink, contactHref, LiveNetworkScene, AmbientLayer, EmiloLogo, SectionLabel, Reveal, Navbar, Hero, InstitutionPreview, Origin, InstitutionMap, Research, Products, Technology, CredibilityBand, PageHero, PillarCards, HomeOverview, HomePillars, InsightsPreview, TalentMediaBand, PrincipleGrid, ResearchTrackGrid, TechnologyCapabilityGrid, ProductOperatingModel, InsightGrid, CareersGrid, PressResources, ContactChannelGrid, Contact, Initiatives, Footer } from "../site-shared";

function CareersPage() {
  return (
    <>
      <PageHero
        label="CAREERS"
        title="A talent network for people who want to build serious systems."
        summary="Emilo Labs is not presenting a fake job board. This page is for future roles, internships, open applications, research collaboration, and people who can help shape the institution."
      >
        <div className="page-hero-actions">
          <a href={contactHref("Talent inquiry")} className="primary-button">Send open application</a>
        </div>
      </PageHero>
      <CareersGrid />
      <Reveal id="careers-note" className="cta-section">
        <div className="container">
          <div className="cta-band light-panel">
            <div>
              <SectionLabel>HOW TO APPROACH</SectionLabel>
              <h2>Show the work, the judgment, and the area you want to strengthen.</h2>
              <p>
                Strong introductions should include what you can build or research, which Emilo Labs
                areas you understand, and the kind of responsibility you are ready to take on.
              </p>
            </div>
            <a href={contactHref("Talent inquiry")} className="secondary-button">Contact careers</a>
          </div>
        </div>
      </Reveal>
    </>
  );
}
