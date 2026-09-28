import { CONTACT_EMAIL, NAV_LINKS, FOOTER_GROUPS, PAGE_META, INSTITUTION_FLOW, RESEARCH_AREAS, RESEARCH_LOOP, PRODUCT_TIERS, PRODUCT_TONES, TECHNOLOGY_AREAS, ECOSYSTEM_MARKS, ECOSYSTEM_LOOP, INITIATIVES, ORGANIZATION_PILLARS, PRINCIPLES, RESEARCH_TRACKS, TECHNOLOGY_CAPABILITIES, INSIGHTS, CAREER_PATHS, PRESS_FACTS, CONTACT_CHANNELS, useInView, useReducedMotion, normalizePath, useRoute, usePageMeta, AppLink, contactHref, LiveNetworkScene, AmbientLayer, EmiloLogo, SectionLabel, Reveal, Navbar, Hero, InstitutionPreview, Origin, InstitutionMap, Research, Products, Technology, CredibilityBand, PageHero, PillarCards, HomeOverview, HomePillars, InsightsPreview, TalentMediaBand, PrincipleGrid, ResearchTrackGrid, TechnologyCapabilityGrid, ProductOperatingModel, InsightGrid, CareersGrid, PressResources, ContactChannelGrid, Contact, Initiatives, Footer } from "../site-shared";

function TechnologyPage() {
  return (
    <>
      <PageHero
        label="TECHNOLOGY"
        title="What Emilo Labs has built capability in."
        summary="Technology is the capability layer: engineering systems, tools, infrastructure, product foundations, and competencies that support the organization now."
      />
      <TechnologyCapabilityGrid />
      <Technology />
      <CredibilityBand />
    </>
  );
}
