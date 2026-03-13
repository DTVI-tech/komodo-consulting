import { motion } from "framer-motion";
import { Users, Building2, Settings, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Add vetted IT specialists to your existing teams quickly. Scale capacity without long hiring cycles.",
    accent: "from-primary/10 to-primary/[0.03]",
  },
  {
    icon: Building2,
    title: "Dedicated Teams",
    description: "Build stable, nearshore teams aligned to your product roadmap and delivery cadence.",
    accent: "from-accent/10 to-accent/[0.03]",
  },
  {
    icon: Settings,
    title: "Managed Delivery",
    description: "Outsource delivery responsibility with structured oversight, reporting, and accountability.",
    accent: "from-primary/10 to-primary/[0.03]",
  },
  {
    icon: Globe,
    title: "Nearshore Portugal",
    description: "Access strong talent from Portugal with time-zone alignment, cultural fit, and cost efficiency.",
    accent: "from-accent/10 to-accent/[0.03]",
  },
];

const ServiceModels = () => (
  <section id="services" className="section-padding bg-muted relative overflow-hidden">
    {/* Subtle geometric background */}
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
          Flexible models. Serious delivery.
        </h2>
        <p className="section-subtitle mx-auto">
          Choose the engagement model that fits your needs — from individual specialists to full delivery management.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative bg-card rounded-xl border border-border p-7 md:p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 overflow-hidden"
          >
            {/* Gradient accent on hover */}
            <div className={`absolute inset-0 bg-gradient-to-b ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-display font-bold text-foreground mb-2.5 tracking-tight">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceModels;
