import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ConsultingComingSoon from "./pages/ConsultingComingSoon.tsx";
import Services from "./pages/Services.tsx";
import IndustryPage from "./pages/IndustryPage.tsx";
import NearshorePortugal from "./pages/NearshorePortugal.tsx";
import Technologies from "./pages/Technologies.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consulting" element={<ConsultingComingSoon />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/nearshore-portugal" element={<NearshorePortugal />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
