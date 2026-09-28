import { PageHero, Technology, CredibilityBand } from "../site-shared";

function TechnologyPage() {
  return (
    <>
      <PageHero
        label="TECHNOLOGY"
        title="The engineering foundations behind the work."
        summary="Emilo Labs works across software systems, identity and privacy infrastructure, security engineering, intelligent systems, financial technology, data infrastructure, and exploratory technology."
      />
      <Technology />
      <CredibilityBand />
    </>
  );
}

export default TechnologyPage;
