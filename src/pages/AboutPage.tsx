import { PageHero, Origin, InstitutionApproach, INSTITUTION_PROFILE, PrincipleGrid, Contact, type PageProps } from "../site-shared";

function AboutPage({ currentPath, onNavigate }: PageProps) {
  return (
    <>
      <PageHero
        label="ABOUT"
        title="Emilo Labs"
        summary={INSTITUTION_PROFILE.summary}
      />
      <Origin />
      <InstitutionApproach currentPath={currentPath} onNavigate={onNavigate} />
      <PrincipleGrid />
      <Contact />
    </>
  );
}
export default AboutPage;
