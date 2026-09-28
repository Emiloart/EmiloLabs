import { CONTACT_EMAIL, NAV_LINKS, FOOTER_GROUPS, PAGE_META, INSTITUTION_FLOW, RESEARCH_AREAS, RESEARCH_LOOP, PRODUCT_TIERS, PRODUCT_TONES, TECHNOLOGY_AREAS, ECOSYSTEM_MARKS, ECOSYSTEM_LOOP, INITIATIVES, ORGANIZATION_PILLARS, PRINCIPLES, RESEARCH_TRACKS, TECHNOLOGY_CAPABILITIES, INSIGHTS, CAREER_PATHS, PRESS_FACTS, CONTACT_CHANNELS, useInView, useReducedMotion, normalizePath, useRoute, usePageMeta, AppLink, contactHref, LiveNetworkScene, AmbientLayer, EmiloLogo, SectionLabel, Reveal, Navbar, Hero, InstitutionPreview, Origin, InstitutionMap, Research, Products, Technology, CredibilityBand, PageHero, PillarCards, HomeOverview, HomePillars, InsightsPreview, TalentMediaBand, PrincipleGrid, ResearchTrackGrid, TechnologyCapabilityGrid, ProductOperatingModel, InsightGrid, CareersGrid, PressResources, ContactChannelGrid, Contact, Initiatives, Footer } from "../site-shared";

function InsightsPage() {
  return (
    <>
      <PageHero
        label="INSIGHTS"
        title="One editorial hub for serious publishing."
        summary="Articles, blog notes, research briefs, documentaries, announcements, and field reports live together so the institution can publish without fragmenting its voice."
      />
      <Reveal id="insights" className="insights-section">
        <div className="container">
          <InsightGrid />
        </div>
      </Reveal>
    </>
  );
}
