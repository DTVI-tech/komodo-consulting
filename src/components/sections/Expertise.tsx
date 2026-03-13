import { motion } from "framer-motion";
import { Code2, Cloud, Database, TestTube, Shield, Server, Headphones, Kanban } from "lucide-react";

const areas = [
  { icon: Code2, label: "Software Engineering" },
  { icon: Cloud, label: "Cloud & DevOps" },
  { icon: Database, label: "Data & AI" },
  { icon: TestTube, label: "QA & Test Automation" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Server, label: "ERP / Business Apps" },
  { icon: Headphones, label: "IT Support & Infra" },
  { icon: Kanban, label: "Product & Project Delivery" },
];

const Expertise = () => (
  <section id="expertise" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Expertise</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Technical depth across modern delivery functions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We provide talent and teams across the technology roles that matter most to your product and platform execution.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {areas.map((area, i) => (
          <motion.div
            key={area.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex flex-col items-center text-center p-6 md:p-8 rounded-lg border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <area.icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">{area.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
