import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  ShoppingCart,
  Radio,
  HeartPulse,
  Factory,
  Laptop,
  ShieldCheck,
  Clock,
  Scale,
  FileCheck,
  Zap,
  Users,
  Building2,
  Settings,
  Globe,
  Layers,
  MessageSquare,
  Target,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/PageShell";

/* ─── Fade-in wrapper ─── */
const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Visual Placeholder ─── */
const VisualPlaceholder = ({
  aspect = "4/3",
  className = "",
  children,
}: {
  aspect?: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`relative w-full rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-muted to-card ${className}`}
    style={{ aspectRatio: aspect }}
  >
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
    {children || (
      <>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.06] border border-primary/[0.08] flex items-center justify-center">
            <div className="w-6 h-6 rounded-lg bg-primary/15" />
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full bg-accent/[0.03] blur-2xl" />
      </>
    )}
  </div>
);

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary text-secondary-foreground overflow-hidden">
    <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
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
          Industries
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold tracking-tight mb-6 leading-[1.1]">
          Sector context makes{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            delivery sharper
          </span>
        </h1>
        <p className="text-secondary-foreground/50 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          Every industry has specific pressures — compliance, speed, scale, or technical complexity. Komodo builds teams that understand the environment they're delivering into.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
            <Button
              size="lg"
              className="text-base px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
            >
              Discuss Your Industry Needs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outlineDark" className="text-base px-8 h-12">
              View Services
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Industries Overview ─── */
const industries = [
  {
    icon: Landmark,
    label: "Financial Services",
    desc: "Banking, insurance, payments, and fintech platforms that demand security, compliance, and high-availability systems.",
    slug: "fintech",
  },
  {
    icon: ShoppingCart,
    label: "Retail & E-commerce",
    desc: "Digital commerce, logistics platforms, and omnichannel experiences built for conversion and scale.",
    slug: null,
  },
  {
    icon: Radio,
    label: "Telecom",
    desc: "Network infrastructure, service delivery platforms, and digital transformation across carrier and enterprise segments.",
    slug: null,
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    desc: "Health-tech platforms, clinical data systems, and patient-facing applications with strict compliance requirements.",
    slug: "healthcare",
  },
  {
    icon: Factory,
    label: "Manufacturing",
    desc: "Industrial software, ERP modernisation, IoT integration, and production automation systems.",
    slug: null,
  },
  {
    icon: Laptop,
    label: "SaaS / Technology",
    desc: "Product engineering, multi-tenant architecture, and platform scale for software companies shipping fast.",
    slug: "saas",
  },
];

const IndustriesOverview = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative">
      <Reveal className="text-center mb-14 md:mb-20">
        <span className="section-label">Sectors We Support</span>
        <h2 className="section-title mb-5">
          Deep experience across key industries
        </h2>
        <p className="section-subtitle mx-auto">
          We support companies across sectors where reliable IT delivery makes a measurable difference to business outcomes.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {industries.map((ind, i) => (
          <Reveal key={ind.label} delay={i * 0.06}>
            <div className="group relative flex flex-col h-full p-7 rounded-xl bg-card border border-border hover:border-primary/15 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Corner pattern */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden rounded-tr-xl opacity-40">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg, hsl(var(--primary)) 1px, transparent 1px)",
                    backgroundSize: "8px 8px",
                  }}
                />
              </div>

              <div className="relative flex-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 border border-primary/[0.06]">
                  <ind.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2 tracking-tight">
                  {ind.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {ind.desc}
                </p>
              </div>

              {ind.slug && (
                <div className="relative">
                  <Link to={`/industries/${ind.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 px-0 text-[13px] font-semibold"
                    >
                      Learn more <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Common Sector Challenges ─── */
const challenges = [
  {
    icon: ShieldCheck,
    title: "Compliance & Regulation",
    desc: "Finance, healthcare, and telecom operate under strict regulatory frameworks. Teams need to understand compliance context, not just code.",
  },
  {
    icon: Clock,
    title: "Speed to Market",
    desc: "SaaS and e-commerce move fast. Delivery teams must ship iteratively without compromising quality or stability.",
  },
  {
    icon: Scale,
    title: "Scale & Reliability",
    desc: "High-traffic platforms and mission-critical systems require architecture decisions that hold up under load.",
  },
  {
    icon: FileCheck,
    title: "Legacy Modernisation",
    desc: "Manufacturing and banking often run on legacy stacks. Teams must bridge old and new without disrupting operations.",
  },
  {
    icon: Zap,
    title: "Integration Complexity",
    desc: "Enterprise environments demand interoperability — APIs, third-party systems, and data pipelines that work across boundaries.",
  },
  {
    icon: Layers,
    title: "Data Sensitivity",
    desc: "Handling personal, financial, or medical data requires engineers who understand security-first development practices.",
  },
];

const SectorChallenges = () => (
  <section className="section-padding bg-muted relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border border-border/50 pointer-events-none" />

    <div className="container relative">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <span className="section-label">Sector Challenges</span>
          <h2 className="section-title mb-6">
            Why sector context{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              matters
            </span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            Generic development teams deliver generic results. Different industries face different technical and operational pressures — and the teams supporting them need to understand those realities.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Komodo builds delivery capability around your industry's specific demands, not around a one-size-fits-all engagement model.
          </p>
        </Reveal>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {challenges.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/15 transition-all duration-300 h-full">
                <div className="w-9 h-9 rounded-lg bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                  <c.icon className="h-[18px] w-[18px] text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1 text-[15px] tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Services by Industry ─── */
const serviceModels = [
  {
    icon: Users,
    title: "Staff Augmentation",
    desc: "Embed individual specialists into your team when you need specific skills or extra capacity — fast.",
    industries: "SaaS, Fintech, Retail",
    link: "/services/staff-augmentation",
  },
  {
    icon: Building2,
    title: "Dedicated Teams",
    desc: "Full cross-functional squads aligned to your roadmap — with continuity, ownership, and a dedicated team lead.",
    industries: "Healthcare, Manufacturing, Telecom",
    link: "/services/dedicated-teams",
  },
  {
    icon: Settings,
    title: "Managed Delivery",
    desc: "End-to-end project delivery with milestone-based accountability. We own the execution, you define the outcomes.",
    industries: "Banking, Insurance, Enterprise SaaS",
    link: "/services/managed-delivery",
  },
  {
    icon: Globe,
    title: "Nearshore from Portugal",
    desc: "CET-aligned, EU-based teams with cultural proximity, strong English, and 30–40% cost advantage over Western Europe.",
    industries: "All sectors",
    link: "/services/nearshore-portugal",
  },
];

const ServicesByIndustry = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative">
      <Reveal className="text-center mb-14 md:mb-20">
        <span className="section-label">Services by Industry</span>
        <h2 className="section-title mb-5">
          The right model for your sector
        </h2>
        <p className="section-subtitle mx-auto">
          Different industries need different engagement structures. We match the delivery model to your operational reality.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {serviceModels.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="group relative bg-card rounded-xl border border-border p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 border border-primary/[0.06]">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {s.desc}
                </p>

                <div className="p-3 rounded-lg bg-muted/60 border border-border/60 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-1">
                    Common in
                  </p>
                  <p className="text-sm text-foreground/80">{s.industries}</p>
                </div>

                <Link to={s.link}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 px-0 text-[13px] font-semibold"
                  >
                    Learn more <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── How Komodo Supports Sector Delivery ─── */
const supportPoints = [
  {
    icon: Target,
    title: "Sector-Aware Team Matching",
    text: "We don't just match skills — we match experience. Engineers with relevant industry context ramp up faster and deliver with fewer mistakes.",
  },
  {
    icon: Compass,
    title: "Adaptive Engagement Models",
    text: "We adjust team composition, process structure, and communication cadence to fit your sector's pace, risk profile, and operational norms.",
  },
  {
    icon: MessageSquare,
    title: "Domain-Informed Communication",
    text: "Our teams learn your terminology, your tools, and your workflows. No translation layer between business needs and technical execution.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Ready Delivery",
    text: "From GDPR and PSD2 to HIPAA and MDR — we build teams that understand the regulatory landscape and develop accordingly.",
  },
];

const HowWeSupport = () => (
  <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full border border-secondary-foreground/[0.04] pointer-events-none hidden lg:block" />

    <div className="container relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <Reveal>
          <span className="section-label !text-accent">Our Approach</span>
          <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-6">
            Built to adapt, structured to deliver
          </h2>
          <p className="text-secondary-foreground/50 text-base leading-relaxed mb-6">
            Komodo isn't a generalist outsourcing provider. We build delivery capability around the specific technical and operational realities of your sector — so your teams integrate faster, ship better, and create fewer surprises.
          </p>
          <p className="text-secondary-foreground/50 text-base leading-relaxed mb-10">
            Whether you operate under heavy regulation, ship product on weekly sprints, or manage critical infrastructure — we structure teams and workflows to match.
          </p>

          {/* Visual placeholder — abstract process */}
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-secondary-foreground/[0.08] bg-gradient-to-br from-secondary-foreground/[0.03] to-secondary-foreground/[0.01]" style={{ aspectRatio: "16/9" }}>
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center gap-4 px-8">
              {["Assess", "Match", "Embed", "Deliver"].map((step, idx) => (
                <div key={step} className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-9 h-9 rounded-full bg-primary/[0.1] border border-primary/[0.12] flex items-center justify-center">
                    <span className="text-[11px] font-bold text-primary/60">{idx + 1}</span>
                  </div>
                  <span className="text-[10px] font-medium text-secondary-foreground/30 tracking-wide uppercase">
                    {step}
                  </span>
                  {idx < 3 && <div className="absolute" />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="space-y-5">
          {supportPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex gap-4 p-5 rounded-xl bg-secondary-foreground/[0.04] border border-secondary-foreground/[0.06] hover:border-secondary-foreground/[0.12] hover:bg-secondary-foreground/[0.06] transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-primary/[0.1] flex items-center justify-center flex-shrink-0">
                  <p.icon className="h-[18px] w-[18px] text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-secondary-foreground mb-1 text-[15px] tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground/50 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Final CTA ─── */
const FinalCTA = () => (
  <section className="section-padding bg-muted relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative text-center max-w-2xl mx-auto">
      <Reveal>
        <span className="section-label">Get Started</span>
        <h2 className="section-title mb-6">
          Let's talk about your industry
        </h2>
        <p className="section-subtitle mx-auto mb-10">
          Tell us about your sector, your delivery challenges, and the kind of support you're looking for. We'll take it from there.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/25"
            >
              Discuss Your Industry Needs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/technologies">
            <Button size="lg" variant="outline" className="text-base px-8 h-12">
              View Technologies
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── Page ─── */
const IndustriesPage = () => (
  <PageShell>
    <Hero />
    <IndustriesOverview />
    <SectorChallenges />
    <ServicesByIndustry />
    <HowWeSupport />
    <FinalCTA />
  </PageShell>
);

export default IndustriesPage;
