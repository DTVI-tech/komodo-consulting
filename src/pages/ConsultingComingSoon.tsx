import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

const ConsultingComingSoon = () => (
  <div
    className="dark min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-background text-foreground"
  >
    {/* Layered atmospheric gradients */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(ellipse, hsl(var(--primary)), transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse, hsl(var(--accent)), transparent 70%)" }}
      />
      <div
        className="absolute top-[40%] left-[-8%] w-[300px] h-[300px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(ellipse, hsl(var(--primary-glow)), transparent 70%)" }}
      />
    </div>

    {/* Grid texture */}
    <div
      className="absolute inset-0 opacity-[0.025] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Decorative ring */}
    <div className="absolute top-[15%] right-[12%] w-[220px] h-[220px] rounded-full border border-primary/[0.06] pointer-events-none hidden md:block" />
    <div className="absolute bottom-[18%] left-[10%] w-[120px] h-[120px] rounded-full border border-accent/[0.04] pointer-events-none hidden md:block" />

    {/* Top edge accent */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 text-center max-w-xl"
    >
      {/* Logo */}
      <Link to="/" className="inline-block mb-16 group">
        <img
          src={logoWhite}
          alt="Komodo Consulting"
          className="h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </Link>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6"
      >
        Consulting
      </motion.p>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold tracking-tight mb-6 text-foreground">
        Coming Soon
      </h1>

      {/* Divider */}
      <div className="w-12 h-px bg-primary/30 mx-auto mb-8" />

      {/* Copy */}
      <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-md mx-auto mb-12">
        Our Consulting practice is being built with the same rigour and precision we bring to everything we do. A dedicated experience is on the way.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link to="/contact">
          <Button
            size="lg"
            className="text-base px-8 h-12 bg-white text-background hover:bg-white/90 shadow-lg shadow-primary/10 font-semibold"
          >
            Contact Us About Consulting
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link to="/">
          <Button
            size="lg"
            className="text-base px-8 h-12 bg-transparent border border-foreground/15 text-foreground hover:bg-foreground/5 hover:border-foreground/25 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Outsourcing
          </Button>
        </Link>
      </div>

      {/* Subtle footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-xs text-muted-foreground/50 mt-16"
      >
        Komodo · Lisbon, Portugal
      </motion.p>
    </motion.div>
  </div>
);

export default ConsultingComingSoon;
