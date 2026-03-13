import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full border border-secondary-foreground/[0.04] pointer-events-none hidden md:block" />
      <div className="absolute bottom-[10%] left-[8%] w-[150px] h-[150px] rounded-full border border-secondary-foreground/[0.03] pointer-events-none hidden md:block" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-6">
            Looking for a more reliable IT outsourcing partner?
          </h2>
          <p className="text-secondary-foreground/50 mb-12 text-base md:text-lg leading-relaxed">
            Let's discuss how Komodo can support your delivery goals with vetted talent, dedicated teams, and nearshore execution from Portugal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" className="text-base px-8 h-12 bg-transparent border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:border-secondary-foreground/50">
              Request Talent
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
