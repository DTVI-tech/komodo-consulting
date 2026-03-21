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

/* ─── Hero ─── */

const HeroVisual = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[3/4] xl:aspect-square max-w-[400px] sm:max-w-[480px] mx-auto lg:mx-0"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/[0.03] to-primary/[0.06] border border-border/60 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.06]" />

      {/* Abstract service blocks */}
      <div className="absolute top-[12%] left-[10%] right-[10%] space-y-3">
        {[85, 65, 45, 75].map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-md border border-primary/[0.08] bg-primary/[0.04] flex-shrink-0" />
            <div className="h-2.5 rounded-full bg-primary/[0.05]" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>

      {/* Geometric accents */}
      <div className="absolute bottom-[18%] right-[12%] w-20 h-20 rounded-full border border-accent/[0.08]" />
      <div className="absolute bottom-[22%] right-[16%] w-12 h-12 rounded-full border border-primary/[0.06]" />
      <div className="absolute bottom-[25%] right-[19%] w-3 h-3 rounded-full bg-primary/20" />

      <div className="absolute bottom-8 left-8 grid grid-cols-5 gap-1.5">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/[0.06]" />
        ))}
      </div>

      <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl" />
    </div>
    <div className="absolute -inset-px rounded-2xl border border-primary/[0.04]" />
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
              Flexible models.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Serious delivery.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg md:text-xl text-muted-foreground max-w-[560px] mb-12 leading-[1.7]"
            >
              Choose the engagement model that fits your pace, scale, and delivery goals — from individual specialists to full managed teams.
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
                className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Explore Models
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 h-12"
                >
                  Request Talent
                </Button>
              </Link>
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

/* ─── Service Model Cards ─── */

const services = [
  {
    icon: Users,
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    description:
      "Add pre-vetted engineers to your existing teams. Scale capacity without long hiring cycles or overhead.",
    ideal: "Teams that need specific skills fast, with direct management.",
    features: [
      "Vetted senior-level candidates",
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
      "Full cross-functional squads aligned to your product roadmap — with a dedicated team lead and integrated delivery.",
    ideal: "Companies needing ongoing capacity with team continuity and alignment.",
    features: [
      "Cross-functional team composition",
      "Dedicated team lead included",
      "Aligned to your methodology",
      "Scalable team structure",
    ],
  },
  {
    icon: Settings,
    title: "Managed Delivery",
    slug: "managed-delivery",
    description:
      "We own the delivery end-to-end — structured oversight, milestone tracking, and guaranteed accountability.",
    ideal: "Organizations that want outcome-based delivery without managing the team.",
    features: [
      "Fixed-scope or T&M models",
      "Milestone-based tracking",
      "Dedicated project manager",
      "Post-delivery support options",
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
          Four models, one standard of delivery
        </h2>
        <p className="section-subtitle mx-auto">
          Each model is designed for a different level of involvement — choose the one that matches your operational needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative bg-card rounded-xl border border-border p-8 md:p-10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 overflow-hidden"
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

              <Link to={`/services/${service.slug}`}>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 px-0 text-[13px] font-semibold">
                  Learn more <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Comparison / Choosing the Right Model ─── */

const comparisonRows = [
  { label: "Your involvement", aug: "High — you manage", ded: "Medium — shared", mgd: "Low — we manage" },
  { label: "Team structure", aug: "Individual roles", ded: "Full squads", mgd: "Project-based" },
  { label: "Delivery ownership", aug: "Client", ded: "Shared", mgd: "Komodo" },
  { label: "Scale flexibility", aug: "Per-role", ded: "Team-level", mgd: "Scope-based" },
  { label: "Best for", aug: "Skill gaps", ded: "Product roadmaps", mgd: "Defined projects" },
  { label: "Onboarding speed", aug: "1–2 weeks", ded: "2–4 weeks", mgd: "3–5 weeks" },
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
          {["Staff Augmentation", "Dedicated Teams", "Managed Delivery"].map((title) => (
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
            {[row.aug, row.ded, row.mgd].map((val, j) => (
              <div key={j} className="p-4 md:p-5 text-center border-l border-border flex items-center justify-center">
                <span className="text-xs md:text-sm text-muted-foreground">{val}</span>
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
        Not sure which model fits? We'll help you decide based on your requirements.
      </motion.p>
    </div>
  </section>
);

/* ─── Why Choose Komodo ─── */

const reasons = [
  {
    icon: Shield,
    title: "Vetted Talent Only",
    description: "Every engineer goes through technical and cultural screening before joining any engagement.",
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
        <span className="section-label !text-accent">Why Komodo</span>
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
    a: "For staff augmentation, we typically present vetted candidates within 5 business days. Dedicated teams take 2–4 weeks depending on composition. Managed delivery projects start within 3–5 weeks after scoping.",
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
    q: "How do you vet your talent?",
    a: "Every engineer goes through a multi-stage process: technical assessment, live coding review, cultural fit evaluation, and reference checks. Only about 1 in 8 applicants make it through.",
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
    a: "Yes. All models are designed for flexibility. Staff augmentation allows per-role scaling with 30-day notice. Dedicated teams can be restructured on a quarterly basis.",
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

const Services = () => (
  <PageShell>
    <ServicesHero />
    <ServiceModelCards />
    <Comparison />
    <WhyKomodo />
    <FAQ />
    <FinalCTA />
  </PageShell>
);

export default Services;
