import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import ServiceModels from "@/components/sections/ServiceModels";
import WhyPortugal from "@/components/sections/WhyPortugal";
import Expertise from "@/components/sections/Expertise";
import Industries from "@/components/sections/Industries";
import HowWeWork from "@/components/sections/HowWeWork";
import AboutPreview from "@/components/sections/AboutPreview";
import ConsultingCallout from "@/components/sections/ConsultingCallout";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <ServiceModels />
      <WhyPortugal />
      <Expertise />
      <Industries />
      <HowWeWork />
      <AboutPreview />
      <ConsultingCallout />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
