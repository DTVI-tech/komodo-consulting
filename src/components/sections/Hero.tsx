import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroImagePlaceholder = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="relative w-full aspect-[4/3] lg:aspect-[3/4] xl:aspect-square max-w-[520px] mx-auto lg:mx-0"
  >
    {/* Main container */}
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.06]" />

      {/* Geometric accents */}
      <div className="absolute top-6 left-6 w-12 h-12 rounded-lg border border-primary/10" />
      <div className="absolute top-8 left-8 w-12 h-12 rounded-lg border border-accent/[0.07]" />

      <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full border border-primary/[0.08]" />
      <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full border border-accent/[0.06]" />
      <div className="absolute bottom-[3.25rem] right-[3.25rem] w-2 h-2 rounded-full bg-primary/20" />

      {/* Horizontal accent lines */}
      <div className="absolute top-[35%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent" />
      <div className="absolute top-[65%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/[0.05] to-transparent" />

      {/* Corner glow */}
      <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl" />
    </div>

    {/* Outer decorative border offset */}
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
              <Button size="lg" onClick={() => scrollTo("#contact")} className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("#services")} className="text-base px-8 h-12">
                Explore Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — image placeholder */}
          <div className="hidden lg:flex flex-1 justify-end mt-0">
            <HeroImagePlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
