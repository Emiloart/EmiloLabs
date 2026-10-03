import { useEffect, type ComponentType } from "react";
import { Footer, Navbar, usePageMeta, useRoute, type PageProps } from "./site-shared";
import { HomePage, AboutPage, ResearchPage, ProductsPage, LabsPage, ProductDetailPage, ResearchDetailPage, NotFoundPage } from "./pages";

const ROUTES: Record<string, ComponentType<PageProps>> = {
  "/": HomePage,
  "/about": AboutPage,
  "/research": ResearchPage,
  "/products": ProductsPage,
  "/labs": LabsPage,
};

function resolveRoute(path: string): ComponentType<PageProps> {
  if (ROUTES[path]) return ROUTES[path];
  if (path.startsWith("/products/")) return ProductDetailPage;
  if (path.startsWith("/research/")) return ResearchDetailPage;
  return NotFoundPage;
}

export default function EmiloLabsWebsite() {
  const [currentPath, navigate] = useRoute();
  const ActivePage = resolveRoute(currentPath);
  usePageMeta(currentPath);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="site-shell">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main><ActivePage currentPath={currentPath} onNavigate={navigate} /></main>
      <Footer currentPath={currentPath} onNavigate={navigate} />
    </div>
  );
}
