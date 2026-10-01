import { useEffect, type ComponentType } from "react";
import { Footer, LiveNetworkScene, Navbar, usePageMeta, useRoute, type PageProps } from "./site-shared";
import { HomePage, AboutPage, ResearchPage, TechnologyPage, ProductsPage, InsightsPage, CareersPage, PressPage, ContactPage } from "./pages";

const ROUTES: Record<string, ComponentType<PageProps>> = {
  "/": HomePage,
  "/about": AboutPage,
  "/research": ResearchPage,
  "/technology": TechnologyPage,
  "/products": ProductsPage,
  "/insights": InsightsPage,
  "/careers": CareersPage,
  "/press": PressPage,
  "/contact": ContactPage,
};

export default function EmiloLabsWebsite() {
  const [currentPath, navigate] = useRoute();
  const ActivePage = ROUTES[currentPath] || HomePage;

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
      <LiveNetworkScene />
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main>
        <ActivePage currentPath={currentPath} onNavigate={navigate} />
      </main>
      <Footer currentPath={currentPath} onNavigate={navigate} />
    </div>
  );
}
