import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
            IT Outsourcing &amp; Nearshore from Portugal
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-foreground mb-6">
            Nearshore Teams from Portugal,{" "}
            <span className="text-primary">Built for Delivery</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            We help companies scale with vetted IT talent, dedicated teams, and outsourcing support — without compromising speed, quality, or communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollTo("#contact")} className="text-base px-8">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#services")} className="text-base px-8">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
