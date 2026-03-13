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
  <section id="services" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Service Models</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Flexible models. Serious delivery.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the engagement model that fits your needs — from individual specialists to full delivery management.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-lg border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceModels;
