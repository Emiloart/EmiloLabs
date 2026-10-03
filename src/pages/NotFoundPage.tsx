import { AppLink, PageHero, type PageProps } from "../site-shared";

function NotFoundPage({ currentPath, onNavigate }: PageProps) {
  return (
    <>
      <PageHero label="PAGE UNAVAILABLE" title="This page could not be found." summary="The requested address is not part of the current Emilo Labs site." />
      <section className="section">
        <div className="container">
          <AppLink href="/" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">Return home</AppLink>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
