import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center bg-background overflow-hidden">
      {/* Geometric composition — abstract tech-inspired shapes */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      
      {/* Floating geometric shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-[12%] right-[8%] w-[340px] h-[340px] pointer-events-none hidden lg:block"
      >
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-primary/[0.08]" />
        {/* Inner ring offset */}
        <div className="absolute top-8 left-8 right-8 bottom-8 rounded-full border border-accent/[0.06]" />
        {/* Core dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/20" />
        {/* Radial lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent" />
      </motion.div>

      {/* Smaller floating shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-[18%] right-[22%] w-16 h-16 pointer-events-none hidden lg:block"
      >
        <div className="w-full h-full rounded-lg border border-primary/10 rotate-45" />
      </motion.div>

      {/* Accent line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-[30%] right-[5%] w-[120px] h-px bg-gradient-to-r from-primary/20 to-transparent pointer-events-none hidden lg:block origin-right"
      />

      <div className="container relative z-10 pt-36 pb-24 md:pt-44 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-[720px]"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-label mb-8"
          >
            IT Outsourcing &amp; Nearshore from Portugal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-display font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground mb-7"
          >
            Nearshore Teams from Portugal,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Built for Delivery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg md:text-xl text-muted-foreground max-w-[580px] mb-12 leading-[1.7]"
          >
            Scale with vetted IT talent, dedicated teams, and outsourcing support — without compromising speed, quality, or communication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" onClick={() => scrollTo("#contact")} className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#services")} className="text-base px-8 h-12">
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
