import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Building2,
  Globe,
  Users,
  ChevronDown,
  CheckCircle2,
  Shield,
  Zap,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

/* ─── Constants ─── */

const inquiryTypes = [
  { id: "staff-aug", label: "Staff Augmentation", icon: Users },
  { id: "dedicated-team", label: "Dedicated Team", icon: Building2 },
  { id: "project", label: "Project Delivery", icon: Zap },
  { id: "consulting", label: "Consulting", icon: Globe },
];

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@komodo.dev", href: "mailto:hello@komodo.dev" },
  { icon: MapPin, label: "Location", value: "Lisbon, Portugal" },
  { icon: Clock, label: "Timezone", value: "CET / WET (UTC+0/+1)" },
];

const markets = [
  { region: "Primary", locations: ["United Kingdom", "Germany", "Netherlands", "Nordics"] },
  { region: "Expanding", locations: ["United States", "Switzerland", "France"] },
];

const faqs = [
  {
    q: "How quickly can you start?",
    a: "For staff augmentation, we can typically present pre-vetted candidates within 5–10 business days. Dedicated teams and project engagements begin with a short scoping phase, usually 1–2 weeks.",
  },
  {
    q: "What is the minimum engagement?",
    a: "We recommend a minimum of 3 months for staff augmentation to ensure meaningful output. Dedicated teams and projects are scoped based on objectives — we'll help you define the right structure.",
  },
  {
    q: "Do you work with startups or only enterprise?",
    a: "We work with both. Our model scales from individual engineers supporting growth-stage companies to full delivery squads for enterprise organisations.",
  },
  {
    q: "What happens after I submit the form?",
    a: "A senior member of our team will review your inquiry and respond within one business day. We'll schedule a brief discovery call to understand your needs before proposing a solution.",
  },
  {
    q: "Are contracts flexible?",
    a: "Yes. We offer month-to-month arrangements for staff augmentation and milestone-based structures for project delivery. No long-term lock-in required.",
  },
];

const reassurance = [
  { icon: Shield, text: "NDA-ready from day one" },
  { icon: Clock, text: "Response within 1 business day" },
  { icon: CheckCircle2, text: "No commitment required to start a conversation" },
];

/* ─── FAQ Item ─── */

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-semibold text-foreground pr-8 group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed pr-8">{a}</p>
      </div>
    </motion.div>
  );
};

/* ─── Page ─── */

const Contact = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  return (
    <PageShell>
      {/* Hero */}
      <PageHero
        label="Contact"
        title="Let's build your team"
        subtitle="Tell us what you need. We'll respond within one business day with a tailored approach — no obligation, no fluff."
      >
        <div className="flex items-center gap-6 mt-8">
          {reassurance.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="h-3.5 w-3.5 text-primary/70" />
              <span className="text-xs text-secondary-foreground/40">{item.text}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Form + Sidebar */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="container relative">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              {/* Inquiry type selector */}
              <div className="mb-10">
                <h2 className="text-lg font-display font-bold text-foreground mb-1">
                  What are you looking for?
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Select the model closest to your needs — we'll refine it together.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id === selectedType ? null : type.id)}
                      className={`flex flex-col items-center gap-2.5 p-4 rounded-xl border text-center transition-all duration-200 ${
                        selectedType === type.id
                          ? "border-primary bg-primary/[0.04] shadow-sm"
                          : "border-border hover:border-primary/30 hover:bg-muted/50"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          selectedType === type.id
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <type.icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-semibold text-foreground">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input id="name" placeholder="Your full name" className="h-11" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Work Email <span className="text-destructive">*</span>
                    </Label>
                    <Input id="email" type="email" placeholder="you@company.com" className="h-11" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company
                    </Label>
                    <Input id="company" placeholder="Company name" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm font-medium text-foreground">
                      Country
                    </Label>
                    <Input id="country" placeholder="Where are you based?" className="h-11" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="team-size" className="text-sm font-medium text-foreground">
                      Team Size / Roles Needed
                    </Label>
                    <Input id="team-size" placeholder="e.g. 2 backend engineers" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-date" className="text-sm font-medium text-foreground">
                      Desired Start
                    </Label>
                    <Input id="start-date" placeholder="e.g. Q2 2026, ASAP" className="h-11" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Tell us more about your needs
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your project, challenges, or staffing requirements..."
                    rows={5}
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
                    Submit Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    We'll respond within 1 business day.
                  </span>
                </div>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2"
            >
              {/* Contact details */}
              <h3 className="text-lg font-display font-bold text-foreground mb-6">
                Get in touch
              </h3>
              <div className="space-y-4 mb-10">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/[0.06] flex items-center justify-center flex-shrink-0 border border-primary/[0.06]">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Markets served */}
              <div className="mb-10">
                <h4 className="text-sm font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  Markets We Serve
                </h4>
                {markets.map((m) => (
                  <div key={m.region} className="mb-3 last:mb-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      {m.region}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {m.locations.map((loc) => (
                        <span
                          key={loc}
                          className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl border border-border bg-muted/50 h-44 flex items-center justify-center overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }}
                />
                <div className="relative text-center">
                  <MapPin className="h-6 w-6 text-primary/30 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground font-medium">Lisbon, Portugal</p>
                  <p className="text-[10px] text-muted-foreground/60 mt-0.5">Operating across Europe</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="container relative">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2"
            >
              <span className="section-label">FAQ</span>
              <h2 className="section-title mb-4">Common questions</h2>
              <p className="section-subtitle">
                Quick answers to help you decide if we're the right fit.
              </p>
            </motion.div>

            <div className="lg:col-span-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <span className="section-label">Ready?</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Start with a conversation
            </h2>
            <p className="text-secondary-foreground/50 text-base leading-relaxed mb-8">
              No pitch decks. No obligation. Just a focused discussion about what you need and how we can help.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                className="text-base h-12 px-8 shadow-lg shadow-primary/25"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Go to Form <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outlineDark"
                className="text-base h-12 px-8"
                asChild
              >
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
