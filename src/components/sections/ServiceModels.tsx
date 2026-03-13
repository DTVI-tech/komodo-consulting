import { motion } from "framer-motion";
import { Users, Building2, Settings, Globe } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Add vetted IT specialists to your existing teams quickly. Scale capacity without long hiring cycles.",
  },
  {
    icon: Building2,
    title: "Dedicated Teams",
    description: "Build stable, nearshore teams aligned to your product roadmap and delivery cadence.",
  },
  {
    icon: Settings,
    title: "Managed Delivery",
    description: "Outsource delivery responsibility with structured oversight, reporting, and accountability.",
  },
  {
    icon: Globe,
    title: "Nearshore Portugal",
    description: "Access strong talent from Portugal with time-zone alignment, cultural fit, and cost efficiency.",
  },
];

const ServiceModels = () => (
  <section id="services" className="section-padding bg-muted">
    <div className="container">
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
            className="bg-card rounded-xl border border-border p-7 md:p-8 hover:shadow-lg hover:border-primary/15 transition-all duration-300 group"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/[0.12] transition-colors">
              <service.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-base font-display font-bold text-foreground mb-2.5 tracking-tight">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceModels;
