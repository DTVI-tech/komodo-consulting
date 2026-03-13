import { motion } from "framer-motion";
import { Code2, Cloud, Database, TestTube, Shield, Server, Headphones, Kanban } from "lucide-react";

const areas = [
  { icon: Code2, label: "Software Engineering", gradient: "from-primary/15 to-primary/5" },
  { icon: Cloud, label: "Cloud & DevOps", gradient: "from-accent/15 to-accent/5" },
  { icon: Database, label: "Data & AI", gradient: "from-primary/15 to-accent/5" },
  { icon: TestTube, label: "QA & Test Automation", gradient: "from-accent/15 to-primary/5" },
  { icon: Shield, label: "Cybersecurity", gradient: "from-primary/15 to-primary/5" },
  { icon: Server, label: "ERP / Business Apps", gradient: "from-accent/15 to-accent/5" },
  { icon: Headphones, label: "IT Support & Infra", gradient: "from-primary/15 to-accent/5" },
  { icon: Kanban, label: "Product & Project Delivery", gradient: "from-accent/15 to-primary/5" },
];

const Expertise = () => (
  <section id="expertise" className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />
    
    <div className="container relative">
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
            className="group flex flex-col items-center text-center p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/15 hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-b ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <area.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground tracking-tight">{area.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
