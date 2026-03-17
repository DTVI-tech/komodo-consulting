import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroImagePlaceholder = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[3/4] xl:aspect-square max-w-[400px] sm:max-w-[520px] mx-auto lg:mx-0"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/[0.03] to-primary/[0.06] border border-border/60 overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.06]" />

      {/* Abstract interface blocks */}
      <div className="absolute top-8 left-8 right-8 h-3 rounded-full bg-primary/[0.06]" />
      <div className="absolute top-14 left-8 w-[60%] h-3 rounded-full bg-accent/[0.05]" />
      <div className="absolute top-20 left-8 w-[40%] h-3 rounded-full bg-primary/[0.04]" />

      {/* Geometric composition */}
      <div className="absolute top-[35%] left-[15%] w-16 h-16 rounded-xl border border-primary/10 rotate-12" />
      <div className="absolute top-[38%] left-[18%] w-16 h-16 rounded-xl border border-accent/[0.07] rotate-12" />
      <div className="absolute bottom-[20%] right-[15%] w-24 h-24 rounded-full border border-primary/[0.08]" />
      <div className="absolute bottom-[22%] right-[17%] w-20 h-20 rounded-full border border-accent/[0.06]" />
      <div className="absolute bottom-[26%] right-[21%] w-3 h-3 rounded-full bg-primary/20" />

      {/* Floating dot grid */}
      <div className="absolute bottom-8 left-8 grid grid-cols-4 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/[0.08]" />
        ))}
      </div>

      {/* Accent lines */}
      <div className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent" />
      <div className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/[0.05] to-transparent" />

      {/* Corner glows */}
      <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl" />
    </div>
    <div className="absolute -inset-px rounded-2xl border border-primary/[0.04]" />
  </motion.div>
);

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center bg-background overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="container relative z-10 pt-36 pb-24 md:pt-44 md:pb-36">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Left — messaging */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-[720px] lg:max-w-[540px] xl:max-w-[580px] flex-shrink-0"
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
              className="text-[2.75rem] md:text-[3.5rem] lg:text-[3.25rem] xl:text-[3.75rem] font-display font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground mb-7"
            >
              Nearshore Teams from Portugal,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Built for Delivery
              </span>
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
              <Link to="/contact">
                <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-base px-8 h-12">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — image placeholder (visible on mobile too, smaller) */}
          <div className="flex flex-1 justify-center lg:justify-end mt-16 lg:mt-0">
            <HeroImagePlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
