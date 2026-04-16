import { motion } from "framer-motion";
import { Clock, GraduationCap, MessageCircle, TrendingDown, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: GraduationCap,
    title: "Talent Quality",
    description: "Deep pool of skilled engineers, cloud specialists, data professionals, and delivery experts.",
    stat: "70K+",
    statLabel: "IT graduates per year",
  },
  {
    icon: Clock,
    title: "Time Zone Alignment",
    description: "CET/WET time zone enables real-time collaboration with European and overlapping hours with US teams.",
    stat: "0–1h",
    statLabel: "offset from CET",
  },
  {
    icon: MessageCircle,
    title: "Communication & Culture",
    description: "Strong English proficiency and Western European business culture ensure low-friction collaboration.",
    stat: "7th",
    statLabel: "in EF English index (EU)",
  },
  {
    icon: TrendingDown,
    title: "Cost-to-Quality Balance",
    description: "Competitive rates with high delivery standards — better value than traditional Western hubs.",
    stat: "30–40%",
    statLabel: "cost advantage",
  },
];

/* Abstract map / infographic placeholder */
const MapPlaceholder = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-secondary-foreground/[0.06] bg-secondary-foreground/[0.03]"
  >
    {/* Grid texture */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    {/* Abstract Europe silhouette — geometric shapes */}
    <div className="absolute top-[15%] left-[20%] w-[55%] h-[65%]">
      {/* Simplified landmass shapes */}
      <div className="absolute top-0 left-[20%] w-[60%] h-[40%] rounded-[40%] border border-secondary-foreground/[0.06] bg-secondary-foreground/[0.02]" />
      <div className="absolute top-[25%] left-[10%] w-[45%] h-[50%] rounded-[30%] border border-secondary-foreground/[0.05] bg-secondary-foreground/[0.015]" />
      <div className="absolute top-[35%] right-[5%] w-[35%] h-[35%] rounded-[35%] border border-secondary-foreground/[0.04] bg-secondary-foreground/[0.01]" />
    </div>

    {/* Portugal highlight pin */}
    <div className="absolute top-[52%] left-[28%] flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-accent/40 animate-pulse" />
      <div className="w-2 h-2 rounded-full bg-accent mt-[-3px]" />
      <span className="mt-2 text-[10px] font-bold text-accent tracking-wider uppercase">Portugal</span>
    </div>

    {/* Connection lines to other regions */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
      <line x1="120" y1="165" x2="220" y2="100" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
      <line x1="120" y1="165" x2="300" y2="130" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />
      <line x1="120" y1="165" x2="350" y2="180" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.1" />
      {/* Destination dots */}
      <circle cx="220" cy="100" r="3" fill="hsl(var(--secondary-foreground))" opacity="0.15" />
      <circle cx="300" cy="130" r="3" fill="hsl(var(--secondary-foreground))" opacity="0.12" />
      <circle cx="350" cy="180" r="3" fill="hsl(var(--secondary-foreground))" opacity="0.1" />
    </svg>

    {/* Stat badges floating */}
    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-secondary-foreground/[0.05] border border-secondary-foreground/[0.08]">
      <span className="text-[10px] font-bold text-accent">CET/WET</span>
    </div>
    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-secondary-foreground/[0.05] border border-secondary-foreground/[0.08]">
      <span className="text-[10px] font-bold text-accent">30-40% cost advantage</span>
    </div>

    {/* Corner glow */}
    <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent/[0.08] blur-3xl" />
  </motion.div>
);

const WhyPortugal = () => (
  <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
    <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full border border-secondary-foreground/[0.04] pointer-events-none hidden lg:block" />
    <div className="absolute bottom-[15%] right-[15%] w-[200px] h-[200px] rounded-full border border-secondary-foreground/[0.03] pointer-events-none hidden lg:block" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-32"
        >
          <span className="section-label !text-accent">Nearshore Delivery</span>
          <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-6">
            Considering Nearshore? Why Portugal stands out
          </h2>
          <p className="text-secondary-foreground/60 leading-relaxed max-w-lg text-base mb-8">
            For companies evaluating nearshore delivery models, Portugal offers a compelling mix of technical talent, business compatibility, and time-zone alignment — one of the reasons many organisations choose it as a base for outsourced technology teams.
          </p>
          
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-secondary-foreground/[0.06] border border-secondary-foreground/[0.08] mb-10">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-secondary-foreground/70">Lisbon · Porto · Remote</span>
          </div>


          {/* Map placeholder */}
          <div className="hidden lg:block">
            <MapPlaceholder />
          </div>
        </motion.div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-xl bg-secondary-foreground/[0.04] border border-secondary-foreground/[0.06] hover:border-secondary-foreground/[0.12] hover:bg-secondary-foreground/[0.06] transition-all duration-300"
              >
                <reason.icon className="h-5 w-5 text-accent mb-4" />
                <h3 className="font-display font-bold text-sm mb-2 tracking-tight">{reason.title}</h3>
                <p className="text-[13px] text-secondary-foreground/50 leading-relaxed mb-4">{reason.description}</p>
                <div className="pt-3 border-t border-secondary-foreground/[0.06]">
                  <span className="text-xl font-display font-bold text-accent">{reason.stat}</span>
                  <span className="block text-[11px] text-secondary-foreground/40 mt-0.5">{reason.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-start mt-6">
            <Button variant="outlineDark" asChild>
              <Link to="/nearshore-portugal">
                Explore Nearshore <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile map */}
          <div className="lg:hidden mt-6">
            <MapPlaceholder />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyPortugal;
