import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Building2,
  Globe,
  CheckCircle2,
  Shield,
  Zap,
  Clock,
  Target,
  ChevronDown,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PageShell from "@/components/PageShell";
import SEOHead, { buildBreadcrumbs, buildServiceSchema, buildFAQSchema } from "@/components/SEOHead";

/* ─── Hero ─── */

import servicesHeroSrc from "@/assets/services-hero.webp";

const HeroVisual = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="relative w-full aspect-[16/10] lg:aspect-[3/4] xl:aspect-square max-w-full sm:max-w-none lg:max-w-[480px] mx-auto sm:mx-0 lg:mx-0"
  >
    <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border/60 shadow-xl shadow-primary/[0.06]">
      <img
        src={servicesHeroSrc.src}
        alt="Komodo Consulting team collaborating on a software delivery project"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/[0.08] pointer-events-none" />
    </div>
    <div className="absolute -inset-px rounded-2xl border border-primary/[0.04] pointer-events-none" />
  </motion.div>
);

const ServicesHero = () => {
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
              IT Outsourcing Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[2.75rem] md:text-[3.5rem] lg:text-[3.25rem] xl:text-[3.75rem] font-display font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground mb-7"
            >
              Three models.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                One standard.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg md:text-xl text-muted-foreground max-w-[560px] mb-12 leading-[1.7]"
            >
              Scale with individual specialists, outsourced teams, or Portugal-based nearshore delivery — always on your terms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("#service-models")}
                className="w-full sm:w-auto text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Explore Models
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base px-8 h-12"
                >
                  Request Talent
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex flex-1 justify-center sm:justify-start lg:justify-end mt-10 sm:mt-14 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Service Model Cards ─── */

const services = [
  {
    icon: Users,
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    description:
      "Add carefully selected engineers to your existing teams. Scale capacity without long hiring cycles or overhead.",
    ideal: "Teams that need specific skills fast, with direct management.",
    features: [
      "Carefully selected senior-level candidates",
      "Integrated into your workflows",
      "Flexible scale-up and scale-down",
      "Full IP ownership retained",
    ],
  },
  {
    icon: Building2,
    title: "Dedicated Teams",
    slug: "dedicated-teams",
    description:
      "Get a ready-made outsourced team assembled by Komodo Consulting — including multiple roles and an optional team lead. You keep full ownership of priorities, planning, and direction.",
    ideal: "Companies that need ongoing team capacity without building an internal hiring operation.",
    features: [
      "Multi-role team composition",
      "Optional team lead included",
      "You manage priorities and direction",
      "Scalable and flexible structure",
    ],
  },
  {
    icon: Globe,
    title: "Nearshore from Portugal",
    slug: "nearshore-portugal",
    description:
      "CET-aligned, EU-based delivery with cultural and timezone proximity — strong talent at competitive rates.",
    ideal: "European or US companies wanting nearshore efficiency without offshore risk.",
    features: [
      "Real-time collaboration (CET)",
      "EU data compliance (GDPR)",
      "Strong English proficiency",
      "30–40% cost advantage",
    ],
  },
];

const ServiceModelCards = () => (
  <section id="service-models" className="section-padding bg-muted relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-primary/[0.04] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label">Service Models</span>
        <h2 className="section-title mb-5">
          Three models, one standard of quality
        </h2>
        <p className="section-subtitle mx-auto">
          Each model serves a different operational need — choose the one that fits how you want to work.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            id={service.slug}
            className="group relative bg-card rounded-xl border border-border p-8 md:p-10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 overflow-hidden scroll-mt-28"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Card corner pattern */}
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none overflow-hidden rounded-tr-xl opacity-50">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />
            </div>

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 border border-primary/[0.06]">
                <service.icon className="h-5 w-5 text-primary" />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="p-4 rounded-lg bg-muted/60 border border-border/60 mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-1.5">
                  Ideal for
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">{service.ideal}</p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {service.slug === "nearshore-portugal" && (
                <Link to="/services/nearshore-portugal">
                  <Button variant="outline" size="sm" className="text-sm">
                    Why Portugal? <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </Link>
              )}

            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="text-center mt-12"
      >
        <Link to="/contact">
          <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
            Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ─── Comparison / Choosing the Right Model ─── */

const comparisonRows = [
  { label: "Your involvement", aug: "High — you manage directly", ded: "High — you set priorities", ns: "Varies by model" },
  { label: "Team structure", aug: "Individual roles", ded: "Multi-role squads", ns: "Flexible" },
  { label: "Delivery ownership", aug: "Client", ded: "Client", ns: "Client" },
  { label: "Scale flexibility", aug: "Per-role", ded: "Team-level", ns: "Both" },
  { label: "Best for", aug: "Skill gaps", ded: "Ongoing capacity", ns: "EU nearshore access" },
  { label: "Onboarding speed", aug: "1–2 weeks", ded: "2–4 weeks", ns: "1–4 weeks" },
];

const Comparison = () => (
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
        <h2 className="section-title mb-5">Choosing the right model</h2>
        <p className="section-subtitle mx-auto">
          Each engagement model serves a different operational need. Here's how they compare across key dimensions.
        </p>
      </motion.div>

      {/* Desktop / tablet table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="hidden md:block rounded-xl border border-border bg-card overflow-hidden"
      >
        {/* Header */}
        <div className="grid grid-cols-4 border-b border-border">
          <div className="p-5 md:p-6" />
          {["Staff Augmentation", "Dedicated Teams", "Nearshore Portugal"].map((title) => (
            <div key={title} className="p-5 md:p-6 text-center border-l border-border">
              <span className="text-xs md:text-sm font-display font-bold text-foreground">{title}</span>
            </div>
          ))}
        </div>

        {/* Rows */}
        {comparisonRows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-4 ${i < comparisonRows.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-muted/20" : ""}`}
          >
            <div className="p-4 md:p-5 flex items-center">
              <span className="text-xs md:text-sm font-semibold text-foreground">{row.label}</span>
            </div>
            {[row.aug, row.ded, row.ns].map((val, j) => (
              <div key={j} className="p-4 md:p-5 text-center border-l border-border flex items-center justify-center">
                <span className="text-xs md:text-sm text-muted-foreground">{val}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Mobile stacked cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="md:hidden space-y-4"
      >
        {[
          { title: "Staff Augmentation", key: "aug" as const },
          { title: "Dedicated Teams", key: "ded" as const },
          { title: "Nearshore Portugal", key: "ns" as const },
        ].map((col) => (
          <div
            key={col.title}
            className="rounded-xl border border-border bg-card overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-border bg-muted/30">
              <span className="text-sm font-display font-bold text-foreground">{col.title}</span>
            </div>
            <dl className="divide-y divide-border">
              {comparisonRows.map((row) => (
                <div key={row.label} className="px-5 py-3.5 flex items-start justify-between gap-4">
                  <dt className="text-xs font-semibold text-foreground/80 flex-shrink-0 max-w-[40%]">
                    {row.label}
                  </dt>
                  <dd className="text-xs text-muted-foreground text-right leading-relaxed">
                    {row[col.key]}
                  </dd>
                </div>
              ))}
            </dl>
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
        Not sure which model fits? We'll help you decide based on your requirements.
      </motion.p>
    </div>
  </section>
);

/* ─── Why Choose Komodo Consulting ─── */

const reasons = [
  {
    icon: Shield,
    title: "Carefully Selected Talent",
    description: "Every consultant goes through a rigorous selection process before joining any engagement.",
  },
  {
    icon: Clock,
    title: "Fast Ramp-Up",
    description: "From initial brief to embedded team member in as little as one to two weeks.",
  },
  {
    icon: Target,
    title: "Delivery-First Culture",
    description: "We measure success by output quality, not hours logged. Accountability is built into every model.",
  },
  {
    icon: Zap,
    title: "Nearshore Advantage",
    description: "CET-aligned, EU-based teams with strong English and cultural proximity to Western markets.",
  },
];

const WhyKomodo = () => (
  <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
    <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full border border-secondary-foreground/[0.04] pointer-events-none hidden lg:block" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label !text-accent">Why Komodo Consulting</span>
        <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-5">
          Built for companies that can't afford to compromise
        </h2>
        <p className="text-secondary-foreground/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          We're not a talent marketplace. We're a delivery partner with deep technical capacity and operational discipline.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group p-7 rounded-xl bg-secondary-foreground/[0.04] border border-secondary-foreground/[0.06] hover:border-secondary-foreground/[0.12] hover:bg-secondary-foreground/[0.06] transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 border border-accent/[0.08]">
              <reason.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-[15px] mb-2.5 tracking-tight">{reason.title}</h3>
            <p className="text-[13px] text-secondary-foreground/50 leading-relaxed">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FAQ ─── */

const faqs = [
  {
    q: "How quickly can you provide engineers?",
    a: "For staff augmentation, we typically present candidates within 5 business days. Dedicated teams take 2–4 weeks depending on team composition and requirements.",
  },
  {
    q: "What if a team member isn't the right fit?",
    a: "We offer a replacement guarantee. If a resource doesn't meet expectations within the first 30 days, we replace them at no additional cost.",
  },
  {
    q: "Do you work with US-based companies?",
    a: "Yes. Portugal's CET timezone provides 4–6 hours of overlap with US East Coast, and we structure communication to maximize collaborative time.",
  },
  {
    q: "How do you select your talent?",
    a: "Every consultant goes through a multi-stage selection process covering professional experience, cultural fit, and reference checks. We maintain high standards — only a small percentage of applicants are accepted.",
  },
  {
    q: "What technologies do your teams cover?",
    a: "We cover the full modern stack — frontend, backend, mobile, cloud & DevOps, data & AI, QA automation, cybersecurity, and ERP/business applications.",
  },
  {
    q: "Who retains IP ownership?",
    a: "You do. In all engagement models, full intellectual property ownership is retained by the client. This is contractually guaranteed.",
  },
  {
    q: "Can I scale a team up or down?",
    a: "Yes. Staff augmentation allows per-role scaling with 30-day notice. Dedicated teams can be restructured to match your evolving needs. All engagements start with a 6-month minimum.",
  },
];

const FAQItem = ({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) => (
  <div className="border-b border-border last:border-b-0">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-5 md:py-6 text-left group"
    >
      <span className="text-sm md:text-base font-semibold text-foreground pr-8 group-hover:text-primary transition-colors">
        {faq.q}
      </span>
      <div className="flex-shrink-0 w-6 h-6 rounded-md bg-muted flex items-center justify-center">
        {isOpen ? (
          <Minus className="h-3.5 w-3.5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        )}
      </div>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden"
    >
      <p className="text-sm text-muted-foreground leading-relaxed pb-6 pr-12">{faq.a}</p>
    </motion.div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <span className="section-label">FAQ</span>
            <h2 className="section-title mb-5">Common questions</h2>
            <p className="section-subtitle">
              Straightforward answers about how we work, what to expect, and how to get started.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── Final CTA ─── */

const FinalCTA = () => (
  <section id="services-cta" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
    <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full border border-secondary-foreground/[0.04] pointer-events-none hidden md:block" />
    <div className="absolute bottom-[10%] left-[8%] w-[150px] h-[150px] rounded-full border border-secondary-foreground/[0.03] pointer-events-none hidden md:block" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container relative text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-6">
          Ready to build your extended team?
        </h2>
        <p className="text-secondary-foreground/50 mb-12 text-base md:text-lg leading-relaxed">
          Tell us about your delivery goals and we'll recommend the right engagement model — with matched talent ready in days.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outlineDark"
              className="text-base px-8 h-12"
            >
              Request Talent
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Page ─── */

const servicesJsonLd = [
  buildBreadcrumbs([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]),
  buildServiceSchema("Staff Augmentation", "Individual IT professionals integrated into your team and workflows.", "/services"),
  buildServiceSchema("Dedicated Teams", "Outsourced technology teams assembled by Komodo Consulting for your project.", "/services"),
  buildServiceSchema("Nearshore from Portugal", "Portugal-based nearshore IT delivery with timezone alignment and cost efficiency.", "/services"),
  buildFAQSchema(
    faqs.map((f) => ({ question: f.q, answer: f.a }))
  ),
];

const Services = () => (
  <PageShell>
    <SEOHead
      title="IT Outsourcing Services: Staff Augmentation & Teams"
      description="Staff augmentation, dedicated development teams, and flexible IT outsourcing models for companies that need technical capability without the overhead. Three models, one standard of quality."
      jsonLd={servicesJsonLd}
    />
    <ServicesHero />
    <ServiceModelCards />
    <Comparison />
    <WhyKomodo />
    <FAQ />
    <FinalCTA />
  </PageShell>
);

export default Services;
