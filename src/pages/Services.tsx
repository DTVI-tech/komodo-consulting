import { motion } from "framer-motion";
import { ArrowRight, Users, Monitor, Settings, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

const services = [
  {
    icon: Users,
    title: "Staff Augmentation",
    description:
      "Extend your team with pre-vetted engineers who integrate seamlessly into your workflows, tools, and culture.",
    href: "/services/staff-augmentation",
  },
  {
    icon: Monitor,
    title: "Dedicated Teams",
    description:
      "Full cross-functional squads managed to your standards — from product to deployment.",
    href: "/services/dedicated-teams",
  },
  {
    icon: Settings,
    title: "Managed Delivery",
    description:
      "End-to-end project execution with clear milestones, transparent reporting, and guaranteed outcomes.",
    href: "/services/managed-delivery",
  },
  {
    icon: Globe,
    title: "Nearshore from Portugal",
    description:
      "CET-aligned, EU-based delivery with cultural and timezone proximity to your core business.",
    href: "/services/nearshore-portugal",
  },
];

const Services = () => (
  <PageShell>
    <PageHero
      label="Services"
      title="Outsourcing models built for precision"
      subtitle="Flexible engagement models designed to match your pace, scale, and technical requirements."
    />

    {/* Service Cards */}
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-8 md:p-10 rounded-xl border border-border bg-card hover:border-primary/15 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center mb-5 border border-primary/[0.06]">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 px-0 text-[13px] font-semibold">
                  Learn more <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works summary */}
    <section className="section-padding bg-muted/30 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-label">Process</span>
          <h2 className="section-title mb-5">Simple, transparent engagement</h2>
          <p className="section-subtitle mx-auto">
            From initial brief to ongoing delivery — a structured process designed for speed and clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {["Discovery & Scoping", "Talent Matching", "Onboarding & Integration", "Ongoing Delivery"].map(
            (step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mx-auto mb-4 border border-primary/[0.08]">
                  {i + 1}
                </div>
                <h4 className="text-sm font-display font-bold text-foreground mb-2">{step}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Structured and transparent at every stage.
                </p>
              </motion.div>
            )
          )}
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
            Ready to scale your engineering capacity?
          </h2>
          <p className="text-secondary-foreground/50 mb-10 text-base leading-relaxed">
            Tell us about your team needs and we'll match you with the right talent within days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
              Request Talent <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
              Book a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default Services;
