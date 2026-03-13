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
  <section id="expertise" className="section-padding bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label">Expertise</span>
        <h2 className="section-title mb-5">
          Technical depth across modern delivery
        </h2>
        <p className="section-subtitle mx-auto">
          Talent and teams across the technology roles that matter most to your product and platform execution.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {areas.map((area, i) => (
          <motion.div
            key={area.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="flex flex-col items-center text-center p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/15 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/[0.08] flex items-center justify-center mb-4 group-hover:bg-primary/[0.12] transition-colors">
              <area.icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground tracking-tight">{area.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
