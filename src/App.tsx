import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";

// Eager imports — required for server-side pre-rendering with client:load.
// Lazy loading with Suspense only renders the fallback spinner during SSR.
import Index from "./react-pages/Index";
import Services from "./react-pages/Services";
import NearshorePortugal from "./react-pages/NearshorePortugal";
import Technologies from "./react-pages/Technologies";
import Contact from "./react-pages/Contact";
import About from "./react-pages/About";
import ConsultingComingSoon from "./react-pages/ConsultingComingSoon";
import PrivacyPolicy from "./react-pages/PrivacyPolicy";
import NotFound from "./react-pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consulting" element={<ConsultingComingSoon />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/nearshore-portugal" element={<NearshorePortugal />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

interface AppProps {
  /** Current page path passed from Astro for SSR routing (e.g. "/about"). */
  serverLocation?: string;
}

const App = ({ serverLocation }: AppProps) => {
  // During Astro's static pre-render (SSR), window is undefined.
  // Use StaticRouter so React Router can match routes without browser APIs.
  if (typeof window === "undefined") {
    return (
      <StaticRouter location={serverLocation || "/"}>
        <AppContent />
      </StaticRouter>
    );
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
