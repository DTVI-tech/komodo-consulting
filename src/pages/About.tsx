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
  CheckCircle2,
  Compass,
  ShieldCheck,
  MessageSquare,
  Clock,
  Settings,
  BarChart3,
  Layers,
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

/* ─── Visual Placeholder (reusable) ─── */
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

/* ─── Dark Visual Placeholder ─── */
const DarkVisualPlaceholder = ({
  aspect = "4/3",
  className = "",
  children,
}: {
  aspect?: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`relative w-full rounded-2xl overflow-hidden border border-secondary-foreground/[0.08] bg-gradient-to-br from-secondary-foreground/[0.03] to-secondary-foreground/[0.01] ${className}`}
    style={{ aspectRatio: aspect }}
  >
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    {children || (
      <>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/[0.1] border border-primary/[0.1] flex items-center justify-center">
            <div className="w-5 h-5 rounded-lg bg-primary/20" />
          </div>
        </div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/[0.04] blur-3xl" />
      </>
    )}
  </div>
);

/* ─── Hero ─── */
const HeroVisual = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[3/4] xl:aspect-square max-w-[400px] sm:max-w-[480px] mx-auto lg:mx-0"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.06] to-accent/[0.04] border border-secondary-foreground/[0.08] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Abstract geometric composition */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/[0.12] to-accent/[0.08] border border-primary/[0.1] flex items-center justify-center rotate-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 -rotate-3" />
          </div>
          {[
            { top: "-52px", left: "-64px", size: "w-12 h-12", rotate: "-6deg" },
            { top: "-56px", left: "64px", size: "w-8 h-8", rotate: "12deg" },
            { top: "60px", left: "-68px", size: "w-9 h-9", rotate: "-3deg" },
            { top: "56px", left: "62px", size: "w-7 h-7", rotate: "8deg" },
            { top: "2px", left: "-96px", size: "w-7 h-7", rotate: "-10deg" },
            { top: "2px", left: "94px", size: "w-8 h-8", rotate: "5deg" },
          ].map((node, i) => (
            <div
              key={i}
              className={`absolute ${node.size} rounded-lg border border-primary/[0.06] bg-primary/[0.03]`}
              style={{ top: node.top, left: node.left, transform: `rotate(${node.rotate})` }}
            />
          ))}
        </div>
      </div>
      <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl" />
    </div>
  </motion.div>
);

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4 block">
            About Komodo
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold tracking-tight mb-6 leading-[1.1]">
            A partner built for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              real delivery
            </span>
          </h1>
          <p className="text-secondary-foreground/50 text-base md:text-lg leading-relaxed max-w-lg mb-10">
            Komodo is a premium IT outsourcing and nearshore partner from Portugal — focused on quality, clarity, and commercially grounded collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
        </motion.div>
        <div className="hidden lg:block">
          <HeroVisual />
        </div>
      </div>
    </div>
  </section>
);

/* ─── Company Story ─── */
const CompanyStory = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
        <Reveal delay={0.15}>
          <VisualPlaceholder aspect="4/3">
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
            </svg>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-primary/[0.05] blur-3xl" />
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl" />
          </VisualPlaceholder>
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
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description:
      "We work as an extension of your team, invested in your success. Not a vendor you manage — a partner you rely on.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication, honest timelines, no hidden surprises. Trust built through visibility, not promises.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Over Volume",
    description:
      "We work with a select number of clients. Fewer engagements, deeper integration, better results.",
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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 opacity-90">
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
          <span className="section-label">How We Deliver</span>
          <h2 className="section-title mb-6">
            Delivery without friction
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            Our delivery model is designed to remove the common pain points of IT outsourcing — slow ramp-ups, communication gaps, unclear accountability, and inconsistent quality.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Every partnership is built around predictability and operational rigour, so you can focus on your product while we handle execution.
          </p>
          {/* Process visual placeholder */}
          <VisualPlaceholder aspect="16/9" className="max-w-sm">
            <div className="absolute inset-0 flex items-center justify-center gap-3 px-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-8 h-8 rounded-full bg-primary/[0.08] border border-primary/[0.1] flex items-center justify-center">
                    <span className="text-xs font-bold text-primary/40">{step}</span>
                  </div>
                  <div className="w-full h-px bg-primary/[0.06]" />
                </div>
              ))}
            </div>
          </VisualPlaceholder>
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

/* ─── Where We Operate ─── */
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

const WhereWeOperate = () => (
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4 block">
              Where We Operate
            </span>
            <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-10">
              Portugal-based, internationally oriented
            </h2>
          </Reveal>

          <div className="space-y-5">
            {markets.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <div className="flex gap-4 p-5 rounded-xl border border-secondary-foreground/[0.08] bg-secondary-foreground/[0.03] hover:border-secondary-foreground/[0.14] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/[0.12] flex items-center justify-center flex-shrink-0">
                    <m.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-secondary-foreground text-[15px] tracking-tight mb-1">
                      {m.title}
                    </h3>
                    <p className="text-sm text-secondary-foreground/50 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="flex flex-wrap gap-4 mt-10">
            <Link to="/services">
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

        {/* Map placeholder */}
        <Reveal delay={0.15} className="hidden lg:block">
          <DarkVisualPlaceholder aspect="1/1">
            {/* Abstract geographic composition */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[70%] h-[70%]">
                {/* Abstract continent shapes */}
                <div className="absolute top-[10%] left-[20%] w-[55%] h-[40%] rounded-[40%] border border-primary/[0.06] bg-primary/[0.02]" />
                <div className="absolute top-[25%] left-[10%] w-[35%] h-[50%] rounded-[30%] border border-primary/[0.05] bg-primary/[0.015]" />
                <div className="absolute top-[30%] right-[10%] w-[30%] h-[35%] rounded-[35%] border border-primary/[0.04] bg-primary/[0.01]" />
                {/* Portugal pin */}
                <div className="absolute top-[45%] left-[25%] flex flex-col items-center z-10">
                  <div className="w-4 h-4 rounded-full bg-accent/40 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-accent mt-[-3px]" />
                  <span className="mt-1.5 text-[9px] font-bold text-accent tracking-wider uppercase">PT</span>
                </div>
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="30%" y1="48%" x2="55%" y2="35%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.08" strokeDasharray="4 4" />
                  <line x1="30%" y1="48%" x2="70%" y2="45%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.06" strokeDasharray="4 4" />
                  <line x1="30%" y1="48%" x2="60%" y2="60%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.06" strokeDasharray="4 4" />
                </svg>
                {/* Destination dots */}
                {[
                  { top: "33%", left: "53%", label: "EU" },
                  { top: "43%", left: "68%", label: "UK" },
                  { top: "58%", left: "58%", label: "US" },
                ].map((dot, i) => (
                  <div key={i} className="absolute flex flex-col items-center" style={{ top: dot.top, left: dot.left }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/20 border border-primary/[0.15]" />
                    <span className="mt-1 text-[8px] font-semibold text-secondary-foreground/30 tracking-wider">{dot.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-primary/[0.04] blur-3xl" />
          </DarkVisualPlaceholder>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─── What Clients Can Expect ─── */
const expectations = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    text: "Regular updates, defined touchpoints, and no surprises. You always know what's happening and why.",
  },
  {
    icon: Layers,
    title: "Structured Engagement",
    text: "Every project has defined scope, milestones, and accountability. We bring process without bureaucracy.",
  },
  {
    icon: Clock,
    title: "Responsiveness",
    text: "CET-aligned availability, fast turnaround on decisions, and no waiting days for a simple answer.",
  },
  {
    icon: Settings,
    title: "Flexibility",
    text: "Scale up or down as your project evolves. Change direction without starting from scratch.",
  },
  {
    icon: BarChart3,
    title: "Execution Quality",
    text: "Code reviews, testing standards, and delivery rigour built into every sprint — not added as an afterthought.",
  },
  {
    icon: Compass,
    title: "Low-Friction Collaboration",
    text: "Shared tools, overlapping hours, cultural alignment. Working with us should feel like working with your own team.",
  },
];

const WhatClientsExpect = () => (
  <section className="section-padding bg-muted relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    <div className="container relative">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="section-label">Working With Us</span>
        <h2 className="section-title">What clients can expect</h2>
        <p className="text-muted-foreground text-base leading-relaxed mt-4">
          We structure every engagement around clarity, accountability, and execution quality — so collaboration stays productive from the first week.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {expectations.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.06}>
            <div className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/15 hover:shadow-sm transition-all duration-300 h-full">
              <div className="w-9 h-9 rounded-lg bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                <e.icon className="h-[18px] w-[18px] text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1 text-[15px] tracking-tight">
                  {e.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {e.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
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
    <Hero />
    <CompanyStory />
    <Values />
    <DeliveryPhilosophy />
    <WhereWeOperate />
    <WhatClientsExpect />
    <FinalCTA />
  </PageShell>
);

export default About;
