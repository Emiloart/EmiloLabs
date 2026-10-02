import { PageHero, Origin, PrincipleGrid, Contact } from "../site-shared";

function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT"
        title="The parent institution behind the work."
        summary="Emilo Labs researches and builds systems across identity, privacy, security, intelligence, finance, communication, and digital coordination."
      />
      <Origin />
      <PrincipleGrid />
      <Contact />
    </>
  );
}
export default AboutPage;
