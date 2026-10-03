import { PageHero, INSIGHTS, AppLink, SectionLabel, slugify, type PageProps } from "../site-shared";
import NotFoundPage from "./NotFoundPage";

function ResearchDetailPage({ currentPath, onNavigate }: PageProps) {
  const slug = currentPath.split("/").pop() || "";
  const article = INSIGHTS.find(([title]) => slugify(title) === slug);
  if (!article) return <NotFoundPage currentPath={currentPath} onNavigate={onNavigate} />;
  const [title, category, summary, date, time, status, , url, cover] = article;
  return (
    <>
      <PageHero label="PUBLISHED RESEARCH" title={title} />
      <section className="section detail-section">
        <div className="container">
          <AppLink href="/research" currentPath={currentPath} onNavigate={onNavigate} className="back-link">← All research</AppLink>
          <article className="publication-layout">
            <div className="publication-cover">
              {cover ? <img src={cover} alt="" /> : <div className="insight-cover-fallback"><span>EMILO LABS</span><strong>{title}</strong></div>}
            </div>
            <div className="publication-record">
              <SectionLabel>{category.toUpperCase()}</SectionLabel>
              <p>{summary}</p>
              <dl className="detail-facts">
                <div><dt>Status</dt><dd>{status}</dd></div>
                <div><dt>Published</dt><dd>{date}</dd></div>
                <div><dt>Reading time</dt><dd>{time}</dd></div>
              </dl>
              <a href={url} target="_blank" rel="noreferrer" className="primary-button">Read original on Medium ↗</a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
export default ResearchDetailPage;
