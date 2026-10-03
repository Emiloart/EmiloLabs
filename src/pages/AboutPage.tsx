import { PageHero, Origin, PrincipleGrid, Contact } from "../site-shared";

function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT"
        title="The parent institution behind the work."
        summary="Emilo Labs brings research, experiments, and products together to work on the shared problems of a connected digital world."
      />
      <Origin />
      <PrincipleGrid />
      <Contact />
    </>
  );
}
export default AboutPage;
