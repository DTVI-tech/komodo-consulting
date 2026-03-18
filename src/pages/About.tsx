import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Handshake,
  Eye,
  Zap,
  Globe,
  MapPin,
  Users,
  CheckCircle2,
  Compass,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

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

/* ─── Company Story ─── */
const CompanyStory = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal>
          <span className="section-label">Who We Are</span>
          <h2 className="section-title mb-6">
            Built for delivery,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              not just placement
            </span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
            <p>
              Komodo is a premium IT outsourcing and nearshore delivery partner headquartered in Portugal. We exist to solve a specific problem: companies that need strong technical talent, fast onboarding, and reliable collaboration — without the overhead of traditional outsourcing.
            </p>
            <p>
              We don't operate as a staffing agency. We build delivery-ready teams that integrate with your workflows, tools, and standards from day one. Every engagement is structured around outcomes, not just headcount.
            </p>
            <p>
              Our focus is on quality over volume — working with a select number of clients where we can make a measurable impact on their delivery capability and technical capacity.
            </p>
          </div>
        </Reveal>

        {/* Abstract visual */}
        <Reveal delay={0.15}>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-muted to-card">
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/[0.12] to-accent/[0.08] border border-primary/[0.1] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-primary/20" />
                </div>
                {[
                  { top: "-48px", left: "-60px", size: "w-10 h-10" },
                  { top: "-52px", left: "60px", size: "w-7 h-7" },
                  { top: "56px", left: "-65px", size: "w-8 h-8" },
                  { top: "52px", left: "58px", size: "w-6 h-6" },
                  { top: "0px", left: "-90px", size: "w-6 h-6" },
                  { top: "0px", left: "88px", size: "w-7 h-7" },
                ].map((node, i) => (
                  <div
                    key={i}
                    className={`absolute ${node.size} rounded-lg border border-primary/[0.08] bg-primary/[0.04]`}
                    style={{ top: node.top, left: node.left }}
                  />
                ))}
              </div>
            </div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="50%" x2="35%" y2="32%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.08" />
              <line x1="50%" y1="50%" x2="65%" y2="30%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.06" />
              <line x1="50%" y1="50%" x2="32%" y2="65%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.06" />
              <line x1="50%" y1="50%" x2="66%" y2="64%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.05" />
              <line x1="50%" y1="50%" x2="25%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.06" />
              <line x1="50%" y1="50%" x2="75%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.05" />
            </svg>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-primary/[0.05] blur-3xl" />
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─── Values ─── */
const values = [
  {
    icon: Target,
    title: "Delivery Focus",
    description:
      "We prioritise execution. Our teams are built around outcomes — shipping working software, not filling seats.",
    gradient: "from-primary to-primary",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description:
      "We work as an extension of your team, invested in your success. Not a vendor you manage — a partner you rely on.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication, honest timelines, no hidden surprises. Trust built through visibility, not promises.",
    gradient: "from-accent to-primary",
  },
  {
    icon: ShieldCheck,
    title: "Quality Over Volume",
    description:
      "We work with a select number of clients. Fewer engagements, deeper integration, better results.",
    gradient: "from-primary to-primary",
  },
];

const Values = () => (
  <section className="section-padding bg-muted relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="section-label">What We Stand For</span>
        <h2 className="section-title">
          Principles that shape every engagement
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <div className="group flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/15 hover:shadow-sm transition-all duration-300 h-full">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${v.gradient} flex items-center justify-center flex-shrink-0 opacity-90`}
              >
                <v.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1 text-[15px] tracking-tight">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Delivery Philosophy ─── */
const deliveryPrinciples = [
  {
    icon: Zap,
    title: "Fast Onboarding",
    text: "Teams are operational within days, not months. We match profiles to your tech stack and working culture before engagement starts.",
  },
  {
    icon: Compass,
    title: "Structured Collaboration",
    text: "Defined rituals, shared tooling, and embedded communication. Your extended team works the way you work.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Built In",
    text: "Code reviews, testing standards, and delivery checkpoints are part of every engagement — not afterthoughts.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    text: "No account managers sitting between you and your team. You talk directly to the people doing the work.",
  },
];

const DeliveryPhilosophy = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <span className="section-label">How We Work</span>
          <h2 className="section-title mb-6">
            Delivery without friction
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            Our delivery model is designed to remove the common pain points of IT outsourcing — slow ramp-ups, communication gaps, unclear accountability, and inconsistent quality.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Every partnership is built around predictability and operational rigour, so you can focus on your product while we handle execution.
          </p>
        </Reveal>

        <div className="lg:col-span-3 space-y-5">
          {deliveryPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex gap-4 p-5 rounded-xl bg-muted border border-border hover:border-primary/15 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                  <p.icon className="h-[18px] w-[18px] text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1 text-[15px] tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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

/* ─── Leadership ─── */
const Leadership = () => (
  <section className="section-padding bg-muted relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="section-label">Leadership</span>
        <h2 className="section-title">The people behind Komodo</h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { name: "Founder / CEO", role: "Strategy & Client Partnerships" },
          { name: "CTO", role: "Technology & Delivery" },
          { name: "Head of Operations", role: "Talent & Execution" },
        ].map((person, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="rounded-xl border border-border bg-card p-6 text-center hover:border-primary/15 transition-all duration-300">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] border border-primary/[0.08] mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary/30" />
              </div>
              <h3 className="font-display font-bold text-foreground text-[15px] tracking-tight mb-1">
                {person.name}
              </h3>
              <p className="text-sm text-muted-foreground">{person.role}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="text-center mt-10">
        <p className="text-sm text-muted-foreground italic">
          Leadership profiles coming soon.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ─── Markets Served ─── */
const markets = [
  {
    icon: MapPin,
    title: "Portugal",
    description:
      "Our home base. Deep local talent networks, strong university partnerships, and direct access to one of Europe's fastest-growing tech ecosystems.",
  },
  {
    icon: Globe,
    title: "Europe",
    description:
      "Nearshore delivery across the EU — CET-aligned, culturally compatible, and structured for seamless cross-border collaboration.",
  },
  {
    icon: Globe,
    title: "International",
    description:
      "Supporting clients in the UK, US, and global markets with flexible engagement models adapted to different time zones and compliance requirements.",
  },
];

const MarketsServed = () => (
  <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
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
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4 block">
          Where We Operate
        </span>
        <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight">
          Portugal-based, internationally oriented
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {markets.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.08}>
            <div className="rounded-xl border border-secondary-foreground/[0.08] bg-secondary-foreground/[0.03] p-6 hover:border-secondary-foreground/[0.14] transition-all duration-300 h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/[0.12] flex items-center justify-center mb-4">
                <m.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-secondary-foreground text-[15px] tracking-tight mb-2">
                {m.title}
              </h3>
              <p className="text-sm text-secondary-foreground/50 leading-relaxed">
                {m.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="flex flex-wrap items-center justify-center gap-4 mt-12">
        <Link to="/services/nearshore-portugal">
          <Button variant="outlineDark" size="lg" className="text-base px-8 h-12">
            Nearshore from Portugal
          </Button>
        </Link>
        <Link to="/services">
          <Button variant="outlineDark" size="lg" className="text-base px-8 h-12">
            View Service Models
          </Button>
        </Link>
      </Reveal>
    </div>
  </section>
);

/* ─── Final CTA ─── */
const FinalCTA = () => (
  <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
    <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full border border-secondary-foreground/[0.04] pointer-events-none hidden md:block" />
    <div className="absolute bottom-[10%] left-[8%] w-[150px] h-[150px] rounded-full border border-secondary-foreground/[0.03] pointer-events-none hidden md:block" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container relative">
      <Reveal className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-6">
          Ready to start a conversation?
        </h2>
        <p className="text-secondary-foreground/50 mb-12 text-base md:text-lg leading-relaxed">
          Whether you're exploring nearshore options, need to scale a team, or want to discuss a specific delivery challenge — we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button
              size="lg"
              className="text-base px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
            >
              Talk to Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/technologies">
            <Button size="lg" variant="outlineDark" className="text-base px-8 h-12">
              Explore Technologies
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── Page ─── */
const About = () => (
  <PageShell>
    <PageHero
      label="About Komodo"
      title="A partner built for real delivery"
      subtitle="Komodo is a premium IT outsourcing and nearshore partner from Portugal — focused on quality, clarity, and commercially grounded collaboration."
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link to="/contact">
          <Button
            size="lg"
            className="text-base px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link to="/services">
          <Button size="lg" variant="outlineDark" className="text-base px-8 h-12">
            Explore Services
          </Button>
        </Link>
      </div>
    </PageHero>

    <CompanyStory />
    <Values />
    <DeliveryPhilosophy />
    <Leadership />
    <MarketsServed />
    <FinalCTA />
  </PageShell>
);

export default About;
