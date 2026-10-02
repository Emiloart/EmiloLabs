import { PageHero, INSIGHTS, AppLink, type PageProps } from "../site-shared";

function ResearchDetailPage({ currentPath, onNavigate }: PageProps) {
  const slug = currentPath.split("/").pop() || "";
  const article = INSIGHTS.find(item => item[7].split("/").pop()?.replace(/^[^a-z]+/i, "").startsWith(slug) || item[0].toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug);
  if (!article) return <PageHero label="RESEARCH" title="Research entry not found." summary="The requested research entry does not exist in the current archive." />;
  const [title, category, summary, date, time, status, , url, cover] = article;
  return (
    <>
      <PageHero label={category.toUpperCase()} title={title} summary={summary} />
      <section className="section">
        <div className="container">
          <article className="split-panel light-panel">
            {cover && <img src={cover} alt="" style={{ width: "100%", maxWidth: 620, aspectRatio: "16 / 9", objectFit: "cover" }} />}
            <div><span>{date} · {time} · {status}</span><p>{summary}</p><a href={url} target="_blank" rel="noreferrer" className="primary-button">Read on Medium ↗</a><AppLink href="/research" currentPath={currentPath} onNavigate={onNavigate} className="secondary-button">Back to research</AppLink></div>
          </article>
        </div>
      </section>
    </>
  );
}
export default ResearchDetailPage;
