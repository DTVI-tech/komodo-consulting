import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center bg-background overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="container relative z-10 pt-36 pb-24 md:pt-44 md:pb-36">
        <div className="flex items-center gap-12 lg:gap-16">
          {/* Left side — text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-[720px] lg:max-w-[560px] flex-shrink-0"
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

          {/* Right side — hero illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex flex-1 items-center justify-center"
          >
            <img
              src={heroIllustration}
              alt="Technology network illustration showing cloud, database, server and analytics connected in a modern infrastructure"
              className="w-full max-w-[540px] h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
