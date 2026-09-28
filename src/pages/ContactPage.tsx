import { CONTACT_EMAIL, NAV_LINKS, FOOTER_GROUPS, PAGE_META, INSTITUTION_FLOW, RESEARCH_AREAS, RESEARCH_LOOP, PRODUCT_TIERS, PRODUCT_TONES, TECHNOLOGY_AREAS, ECOSYSTEM_MARKS, ECOSYSTEM_LOOP, INITIATIVES, ORGANIZATION_PILLARS, PRINCIPLES, RESEARCH_TRACKS, TECHNOLOGY_CAPABILITIES, INSIGHTS, CAREER_PATHS, PRESS_FACTS, CONTACT_CHANNELS, useInView, useReducedMotion, normalizePath, useRoute, usePageMeta, AppLink, contactHref, LiveNetworkScene, AmbientLayer, EmiloLogo, SectionLabel, Reveal, Navbar, Hero, InstitutionPreview, Origin, InstitutionMap, Research, Products, Technology, CredibilityBand, PageHero, PillarCards, HomeOverview, HomePillars, InsightsPreview, TalentMediaBand, PrincipleGrid, ResearchTrackGrid, TechnologyCapabilityGrid, ProductOperatingModel, InsightGrid, CareersGrid, PressResources, ContactChannelGrid, Contact, Initiatives, Footer } from "../site-shared";

function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT"
        title="Reach the right part of Emilo Labs."
        summary="Use structured contact paths for partnerships, careers, press, products, research collaboration, and general communication."
      />
      <ContactChannelGrid />
      <Contact />
    </>
  );
}
