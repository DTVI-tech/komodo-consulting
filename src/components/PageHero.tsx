import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ label, title, subtitle, children }: PageHeroProps) => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary text-secondary-foreground overflow-hidden">
    <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4 block">
          {label}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold tracking-tight mb-6 leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-secondary-foreground/50 text-base md:text-lg leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
