import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center bg-background overflow-hidden">
      {/* Refined geometric accents */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-primary/[0.04] via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 left-[15%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />

      <div className="container relative z-10 pt-36 pb-24 md:pt-44 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-[720px]"
        >
          <p className="section-label mb-8">
            IT Outsourcing &amp; Nearshore from Portugal
          </p>

          <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-display font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground mb-7">
            Nearshore Teams from Portugal,{" "}
            <span className="text-primary">Built for Delivery</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-[580px] mb-12 leading-[1.7]">
            Scale with vetted IT talent, dedicated teams, and outsourcing support — without compromising speed, quality, or communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollTo("#contact")} className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#services")} className="text-base px-8 h-12">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
