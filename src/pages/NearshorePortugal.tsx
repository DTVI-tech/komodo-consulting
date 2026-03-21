import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  Clock,
  MessageCircle,
  TrendingDown,
  MapPin,
  Shield,
  Globe,
  Users,
  Building2,
  Settings,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Cloud,
  Cpu,
  BarChart3,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/PageShell";

/* ─── Hero ─── */

const HeroVisual = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[3/4] xl:aspect-square max-w-[400px] sm:max-w-[480px] mx-auto lg:mx-0"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.06] to-primary/[0.04] border border-border/60 overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Abstract Europe shapes */}
      <div className="absolute top-[12%] left-[15%] w-[55%] h-[50%]">
        <div className="absolute top-0 left-[15%] w-[65%] h-[45%] rounded-[40%] border border-primary/[0.06] bg-primary/[0.02]" />
        <div className="absolute top-[20%] left-[5%] w-[40%] h-[55%] rounded-[30%] border border-primary/[0.05] bg-primary/[0.015]" />
        <div className="absolute top-[30%] right-0 w-[35%] h-[40%] rounded-[35%] border border-primary/[0.04] bg-primary/[0.01]" />
      </div>

      {/* Portugal pin */}
      <div className="absolute top-[42%] left-[22%] flex flex-col items-center z-10">
        <div className="w-5 h-5 rounded-full bg-accent/40 animate-pulse" />
        <div className="w-2.5 h-2.5 rounded-full bg-accent mt-[-4px]" />
        <span className="mt-2 text-[10px] font-bold text-accent tracking-wider uppercase">Portugal</span>
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        <line x1="100" y1="180" x2="200" y2="100" stroke="hsl(var(--accent))" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.2" />
        <line x1="100" y1="180" x2="280" y2="140" stroke="hsl(var(--accent))" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.15" />
        <line x1="100" y1="180" x2="320" y2="200" stroke="hsl(var(--accent))" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.12" />
        <circle cx="200" cy="100" r="3" fill="hsl(var(--muted-foreground))" opacity="0.15" />
        <circle cx="280" cy="140" r="3" fill="hsl(var(--muted-foreground))" opacity="0.12" />
        <circle cx="320" cy="200" r="3" fill="hsl(var(--muted-foreground))" opacity="0.1" />
      </svg>

      {/* Floating badges */}
      <div className="absolute top-5 right-5 px-3 py-1.5 rounded-lg bg-primary/[0.06] border border-primary/[0.08]">
        <span className="text-[10px] font-bold text-primary">CET / WET</span>
      </div>
      <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-lg bg-accent/[0.06] border border-accent/[0.08]">
        <span className="text-[10px] font-bold text-accent">EU · GDPR</span>
      </div>
      <div className="absolute bottom-5 right-5 px-3 py-1.5 rounded-lg bg-primary/[0.06] border border-primary/[0.08]">
        <span className="text-[10px] font-bold text-primary">30–40% savings</span>
      </div>

      {/* Glows */}
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-accent/[0.08] blur-3xl" />
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-primary/[0.06] blur-2xl" />
    </div>
    <div className="absolute -inset-px rounded-2xl border border-primary/[0.04]" />
  </motion.div>
);

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[88vh] flex items-center bg-background overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="container relative z-10 pt-36 pb-24 md:pt-44 md:pb-36">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
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
              Nearshore from Portugal
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[2.75rem] md:text-[3.5rem] lg:text-[3.25rem] xl:text-[3.75rem] font-display font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground mb-7"
            >
              Your delivery team in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Portugal.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg md:text-xl text-muted-foreground max-w-[560px] mb-12 leading-[1.7]"
            >
              Access top-tier European engineering talent with timezone alignment, cultural fit, and a 30–40% cost advantage — without the offshore trade-offs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#why-portugal")}
                className="text-base px-8 h-12"
              >
                Why Portugal?
              </Button>
            </motion.div>
          </motion.div>

          <div className="flex flex-1 justify-center lg:justify-end mt-16 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Why Portugal ─── */

const portugalReasons = [
  {
    icon: GraduationCap,
    title: "Talent Quality",
    description: "Deep pool of skilled engineers, cloud specialists, data professionals, and delivery experts from top-tier universities.",
    stat: "70K+",
    statLabel: "IT graduates per year",
  },
  {
    icon: Clock,
    title: "Time Zone Alignment",
    description: "CET/WET time zone enables real-time collaboration with European and overlapping hours with US East Coast teams.",
    stat: "0–1h",
    statLabel: "offset from CET",
  },
  {
    icon: MessageCircle,
    title: "Communication & Culture",
    description: "Strong English proficiency and Western European business culture ensure low-friction, transparent collaboration.",
    stat: "7th",
    statLabel: "in EF English index (EU)",
  },
  {
    icon: TrendingDown,
    title: "Cost-to-Quality Balance",
    description: "Competitive rates with high delivery standards — better value than traditional Western European hubs.",
    stat: "30–40%",
    statLabel: "cost advantage",
  },
];

const WhyPortugal = () => (
  <section id="why-portugal" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
    <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full border border-secondary-foreground/[0.04] pointer-events-none hidden lg:block" />
    <div className="absolute bottom-[15%] right-[15%] w-[200px] h-[200px] rounded-full border border-secondary-foreground/[0.03] pointer-events-none hidden lg:block" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label !text-accent">Nearshore Advantage</span>
        <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-5">
          Why companies choose Portugal
        </h2>
        <p className="text-secondary-foreground/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Portugal has become one of Europe's strongest nearshore hubs — combining deep technical talent, cultural alignment, and a mature business environment.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {portugalReasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group p-7 rounded-xl bg-secondary-foreground/[0.04] border border-secondary-foreground/[0.06] hover:border-secondary-foreground/[0.12] hover:bg-secondary-foreground/[0.06] transition-all duration-300"
          >
            <reason.icon className="h-5 w-5 text-accent mb-4" />
            <h3 className="font-display font-bold text-sm mb-2 tracking-tight">{reason.title}</h3>
            <p className="text-[13px] text-secondary-foreground/50 leading-relaxed mb-5">{reason.description}</p>
            <div className="pt-3 border-t border-secondary-foreground/[0.06]">
              <span className="text-xl font-display font-bold text-accent">{reason.stat}</span>
              <span className="block text-[11px] text-secondary-foreground/40 mt-0.5">{reason.statLabel}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex justify-center mt-10"
      >
        <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-secondary-foreground/[0.06] border border-secondary-foreground/[0.08]">
          <MapPin className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-secondary-foreground/70">Lisbon · Porto · Remote-first</span>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Talent & Collaboration Benefits ─── */

const talentBenefits = [
  {
    icon: Code2,
    title: "Senior Engineering Depth",
    description: "Experienced engineers across full-stack, mobile, cloud, data, DevOps, and architecture — not junior pools.",
  },
  {
    icon: Globe,
    title: "Cultural Proximity",
    description: "Western European work ethic, proactive communication style, and business culture aligned with UK, DACH, Nordics, and US.",
  },
  {
    icon: Shield,
    title: "EU Compliance Built In",
    description: "GDPR-compliant delivery environment. EU-based data handling, contracts, and legal frameworks as standard.",
  },
  {
    icon: Clock,
    title: "Real-Time Collaboration",
    description: "Full overlap with European hours and 4–6 hours overlap with US East Coast. No async delays on critical decisions.",
  },
  {
    icon: Users,
    title: "Team Stability & Retention",
    description: "Portugal's tech ecosystem attracts and retains talent. Low attrition means continuity and deep product knowledge.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Regular delivery cadence reviews, velocity tracking, and stakeholder-ready reporting across every engagement.",
  },
];

const TalentSection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label">Talent & Collaboration</span>
        <h2 className="section-title mb-5">Built for seamless delivery</h2>
        <p className="section-subtitle mx-auto">
          Portugal's nearshore advantage goes beyond cost — it's about quality, culture, and the ability to work as one team.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {talentBenefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group p-7 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center mb-5 border border-primary/[0.06] group-hover:scale-105 transition-transform duration-300">
              <benefit.icon className="h-4.5 w-4.5 text-primary" />
            </div>
            <h3 className="text-base font-display font-bold text-foreground mb-2 tracking-tight">{benefit.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Roles & Services Available ─── */

const roleCategories = [
  {
    icon: Code2,
    title: "Engineering",
    roles: ["Full-Stack Engineers", "Frontend (React, Angular, Vue)", "Backend (Node, .NET, Java, Python)", "Mobile (iOS, Android, React Native)"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    roles: ["Cloud Architects (AWS, Azure, GCP)", "DevOps / SRE Engineers", "Infrastructure Automation", "CI/CD Pipeline Specialists"],
  },
  {
    icon: Database,
    title: "Data & AI",
    roles: ["Data Engineers", "ML / AI Engineers", "BI & Analytics Specialists", "Data Architects"],
  },
  {
    icon: Cpu,
    title: "Architecture & QA",
    roles: ["Solution Architects", "QA Engineers (Manual & Automation)", "Performance Engineers", "Security Engineers"],
  },
  {
    icon: Layers,
    title: "Product & Design",
    roles: ["Product Managers", "UX/UI Designers", "UX Researchers", "Technical Writers"],
  },
  {
    icon: Settings,
    title: "Delivery & PMO",
    roles: ["Scrum Masters", "Project Managers", "Delivery Leads", "Agile Coaches"],
  },
];

const RolesSection = () => (
  <section className="section-padding bg-muted relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-primary/[0.04] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label">Roles Available</span>
        <h2 className="section-title mb-5">The talent you need, ready to deliver</h2>
        <p className="section-subtitle mx-auto">
          Access a deep bench of carefully selected professionals across engineering, cloud, data, design, and delivery management.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {roleCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="p-7 rounded-xl border border-border bg-card"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center mb-5 border border-primary/[0.06]">
              <cat.icon className="h-4.5 w-4.5 text-primary" />
            </div>
            <h3 className="text-base font-display font-bold text-foreground mb-4 tracking-tight">{cat.title}</h3>
            <ul className="space-y-2">
              {cat.roles.map((role) => (
                <li key={role} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{role}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link to="/services">
          <Button size="lg" variant="outline" className="text-base px-8 h-12">
            View All Service Models
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ─── Nearshore vs Alternatives Comparison ─── */

const comparisonRows = [
  { dimension: "Time zone overlap", nearshore: "Full (CET)", offshore: "Minimal (5–10h gap)", onshore: "Full" },
  { dimension: "Cultural alignment", nearshore: "High", offshore: "Moderate", onshore: "High" },
  { dimension: "Cost efficiency", nearshore: "30–40% savings", offshore: "50–60% savings", onshore: "Baseline" },
  { dimension: "Communication quality", nearshore: "Real-time, fluent English", offshore: "Async, variable", onshore: "Real-time" },
  { dimension: "Talent availability", nearshore: "Strong & growing", offshore: "Very large pool", onshore: "Competitive / scarce" },
  { dimension: "IP & data compliance", nearshore: "EU / GDPR native", offshore: "Varies by country", onshore: "Local jurisdiction" },
  { dimension: "Team retention", nearshore: "High stability", offshore: "Higher attrition", onshore: "Market-dependent" },
];

const ComparisonSection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label">Compare</span>
        <h2 className="section-title mb-5">Nearshore vs. the alternatives</h2>
        <p className="section-subtitle mx-auto">
          See how Portugal nearshore compares to offshore and onshore delivery across the dimensions that matter most.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="rounded-xl border border-border bg-card overflow-hidden"
      >
        {/* Header */}
        <div className="grid grid-cols-4 border-b border-border">
          <div className="p-5 md:p-6" />
          {[
            { label: "Nearshore (Portugal)", highlight: true },
            { label: "Offshore", highlight: false },
            { label: "Onshore", highlight: false },
          ].map((col) => (
            <div
              key={col.label}
              className={`p-5 md:p-6 text-center border-l border-border ${col.highlight ? "bg-primary/[0.04]" : ""}`}
            >
              <span className={`text-xs md:text-sm font-display font-bold ${col.highlight ? "text-primary" : "text-foreground"}`}>
                {col.label}
              </span>
            </div>
          ))}
        </div>

        {/* Rows */}
        {comparisonRows.map((row, i) => (
          <div
            key={row.dimension}
            className={`grid grid-cols-4 ${i < comparisonRows.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-muted/20" : ""}`}
          >
            <div className="p-4 md:p-5 flex items-center">
              <span className="text-xs md:text-sm font-semibold text-foreground">{row.dimension}</span>
            </div>
            {[row.nearshore, row.offshore, row.onshore].map((val, j) => (
              <div
                key={j}
                className={`p-4 md:p-5 text-center border-l border-border flex items-center justify-center ${j === 0 ? "bg-primary/[0.02]" : ""}`}
              >
                <span className={`text-xs md:text-sm ${j === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                  {val}
                </span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center text-xs text-muted-foreground/60 mt-6"
      >
        Based on typical engagement profiles for mid-to-large enterprises.
      </motion.p>
    </div>
  </section>
);

/* ─── How We Work / Process ─── */

const processSteps = [
  {
    step: "01",
    title: "Discovery & Scoping",
    description: "We start with a structured brief to understand your technical requirements, team dynamics, and delivery goals.",
  },
  {
    step: "02",
    title: "Talent Matching",
    description: "Our team identifies and presents carefully selected candidates or team compositions within 5–10 business days.",
  },
  {
    step: "03",
    title: "Onboarding & Integration",
    description: "Selected professionals are onboarded into your workflows, tools, and communication channels for seamless collaboration.",
  },
  {
    step: "04",
    title: "Delivery & Iteration",
    description: "Your nearshore team delivers within your existing methodology — with regular check-ins, reporting, and continuous improvement.",
  },
];

const ProcessSection = () => (
  <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label !text-accent">Process</span>
        <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-5">
          How we work together
        </h2>
        <p className="text-secondary-foreground/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          A structured, transparent process from first conversation to embedded delivery — designed for zero friction.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative p-7 rounded-xl bg-secondary-foreground/[0.04] border border-secondary-foreground/[0.06]"
          >
            <div className="text-3xl font-display font-extrabold text-accent/20 mb-4">{step.step}</div>
            <h3 className="text-base font-display font-bold mb-3 tracking-tight">{step.title}</h3>
            <p className="text-sm text-secondary-foreground/50 leading-relaxed">{step.description}</p>
            {i < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-secondary-foreground/[0.08]" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FAQ ─── */

const faqs = [
  {
    q: "What types of roles can I hire from Portugal?",
    a: "We provide engineers, architects, cloud & DevOps specialists, data professionals, QA engineers, designers, product managers, and delivery leads — across all seniority levels.",
  },
  {
    q: "How quickly can a team be onboarded?",
    a: "Individual specialists can start within 1–2 weeks. Full dedicated teams are typically operational within 2–4 weeks, depending on team size and complexity.",
  },
  {
    q: "Is Portugal GDPR-compliant?",
    a: "Yes. Portugal is an EU member state, so all data handling, employment, and contractual frameworks are fully GDPR-compliant by default.",
  },
  {
    q: "How does nearshore pricing compare?",
    a: "Portugal offers a 30–40% cost advantage compared to Western European and US rates, while maintaining comparable quality standards and full timezone alignment.",
  },
  {
    q: "Can I manage the team directly?",
    a: "Absolutely. With Staff Augmentation and Dedicated Teams, you have direct access and management of your nearshore professionals. With Managed Delivery, we handle day-to-day execution with regular reporting.",
  },
  {
    q: "What engagement models are available?",
    a: "We offer Staff Augmentation, Dedicated Teams, and Managed Delivery — each designed for different levels of involvement and ownership. You can also combine models as needs evolve.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title mb-5">Common questions</h2>
          <p className="section-subtitle mx-auto">
            Answers to the most frequent questions about nearshore delivery from Portugal.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="text-sm font-display font-bold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Final CTA ─── */

const FinalCTA = () => (
  <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full border border-secondary-foreground/[0.03] pointer-events-none hidden lg:block" />

    <div className="container relative text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label !text-accent">Get Started</span>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold tracking-tight mb-6 leading-[1.12]">
          Ready to build your Portugal-based team?
        </h2>
        <p className="text-secondary-foreground/50 mb-10 text-base md:text-lg leading-relaxed">
          Tell us what you need. We'll present qualified candidates and a delivery plan within days — not weeks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outlineDark" className="text-base px-8 h-12">
              Request Talent
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Page ─── */

const NearshorePortugal = () => (
  <PageShell>
    <Hero />
    <WhyPortugal />
    <TalentSection />
    <RolesSection />
    <ComparisonSection />
    <ProcessSection />
    <FAQ />
    <FinalCTA />
  </PageShell>
);

export default NearshorePortugal;
