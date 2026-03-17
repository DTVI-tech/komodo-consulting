import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

const serviceData: Record<string, { label: string; title: string; subtitle: string; benefits: string[]; features: { title: string; description: string }[] }> = {
  "staff-augmentation": {
    label: "Staff Augmentation",
    title: "Scale your team with precision-matched talent",
    subtitle: "Access pre-vetted senior engineers who integrate into your existing workflows, tools, and delivery cadence.",
    benefits: [
      "Pre-vetted senior-level engineers",
      "Seamless integration with your team",
      "CET-aligned working hours",
      "Flexible scale-up and scale-down",
      "Direct management and communication",
      "Full IP ownership retained",
    ],
    features: [
      { title: "Rapid Matching", description: "Vetted candidates presented within 5 business days based on your technical and cultural requirements." },
      { title: "Transparent Pricing", description: "Clear monthly rates with no hidden fees. Scale up or down with 30-day notice." },
      { title: "Quality Guarantee", description: "If a match doesn't work out, we replace the resource at no additional cost within the first 30 days." },
    ],
  },
  "dedicated-teams": {
    label: "Dedicated Teams",
    title: "Full cross-functional squads, managed to your standards",
    subtitle: "Purpose-built teams with the right mix of skills, aligned to your product roadmap and delivery goals.",
    benefits: [
      "Cross-functional team composition",
      "Dedicated team lead included",
      "Aligned to your methodology",
      "Scalable team structure",
      "Integrated communication channels",
      "Continuous delivery cadence",
    ],
    features: [
      { title: "Team Design", description: "We architect the right team composition based on your technology stack and delivery needs." },
      { title: "Embedded Operations", description: "Your dedicated team operates as an extension of your organization with shared tools and rituals." },
      { title: "Performance Tracking", description: "Regular delivery reviews, velocity tracking, and transparent reporting on team output." },
    ],
  },
  "managed-delivery": {
    label: "Managed Delivery",
    title: "End-to-end project execution with guaranteed outcomes",
    subtitle: "We own the delivery from specification through deployment, with clear milestones and transparent reporting.",
    benefits: [
      "Fixed-scope or T&M models",
      "Milestone-based delivery",
      "Dedicated project manager",
      "Risk mitigation built in",
      "Regular stakeholder updates",
      "Post-delivery support options",
    ],
    features: [
      { title: "Structured Planning", description: "Detailed project plans with defined milestones, acceptance criteria, and delivery timelines." },
      { title: "Proactive Communication", description: "Weekly status reports, risk registers, and direct access to the delivery lead." },
      { title: "Quality Assurance", description: "Built-in QA processes, automated testing, and code review standards throughout delivery." },
    ],
  },
  "nearshore-portugal": {
    label: "Nearshore from Portugal",
    title: "EU-based delivery with timezone and cultural alignment",
    subtitle: "Portugal offers the perfect combination of technical talent, timezone proximity, and cost efficiency for European and US companies.",
    benefits: [
      "CET timezone — real-time collaboration",
      "EU data compliance (GDPR)",
      "Strong English proficiency",
      "Top-tier engineering education",
      "Cultural alignment with Western markets",
      "Competitive cost structure",
    ],
    features: [
      { title: "Timezone Advantage", description: "Full overlap with European business hours and 4-6 hours of overlap with US East Coast." },
      { title: "Talent Quality", description: "Portugal ranks among the top countries for engineering talent quality in international assessments." },
      { title: "Cost Efficiency", description: "40-60% cost savings compared to Western European and US rates without compromising quality." },
    ],
  },
};

const fallback = serviceData["staff-augmentation"];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = (slug && serviceData[slug]) || fallback;

  return (
    <PageShell>
      <PageHero label={service.label} title={service.title} subtitle={service.subtitle}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Link to="/services">
            <Button size="lg" variant="ghost" className="text-base px-6 h-12 text-secondary-foreground/60 hover:text-secondary-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" /> All Services
            </Button>
          </Link>
        </div>
      </PageHero>

      {/* Benefits */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="section-label">Benefits</span>
            <h2 className="section-title">What you get</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="section-label">How it works</span>
            <h2 className="section-title">Delivery approach</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border bg-card"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mb-5 border border-primary/[0.08]">
                  {i + 1}
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
        <div className="container relative text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Let's discuss your {service.label.toLowerCase()} needs
            </h2>
            <p className="text-secondary-foreground/50 mb-10 text-base leading-relaxed">
              Get in touch and we'll help you find the right engagement model for your team.
            </p>
            <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
              Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default ServiceDetail;
