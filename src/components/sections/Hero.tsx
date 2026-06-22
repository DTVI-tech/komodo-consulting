import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImageSrc from "@/assets/hero-image.webp";

const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="relative w-full aspect-[16/10] lg:aspect-[3/4] xl:aspect-square max-w-full sm:max-w-none lg:max-w-[520px] mx-auto sm:mx-0 lg:mx-0"
  >
    <div className="absolute inset-0 rounded-2xl border border-border/60 overflow-hidden">
      <img
        src={heroImageSrc.src}
        alt="Technology team collaborating on digital solutions"
        width={1400}
        height={1000}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Subtle overlay for polish */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-secondary/[0.12]" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/20 to-transparent" />
    </div>
    <div className="absolute -inset-px rounded-2xl border border-primary/[0.06]" />
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
              IT Consulting &amp; Outsourcing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[2.75rem] md:text-[3.5rem] lg:text-[3.25rem] xl:text-[3.75rem] font-display font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground mb-7"
            >
              Technology Teams{" "}
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
              IT consulting and outsourcing for companies that need strong technical capability, dedicated teams, and reliable execution — in Portugal and internationally.
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
          <div className="flex flex-1 justify-center sm:justify-start lg:justify-end mt-10 sm:mt-14 lg:mt-0">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
