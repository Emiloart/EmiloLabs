import { PageHero, Origin, InstitutionMap, PrincipleGrid } from "../site-shared";

function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT"
        title="A technology institution built around connected problems."
        summary="Emilo Labs researches, designs, and builds systems for identity, privacy, security, intelligence, finance, communication, and digital coordination."
      />
      <Origin />
      <InstitutionMap />
      <PrincipleGrid />
    </>
  );
}

export default AboutPage;
