import { motion } from "framer-motion";
import { Code2, Cloud, Database, TestTube, Shield, Server, Headphones, Kanban } from "lucide-react";

const areas = [
  { icon: Code2, label: "Software Engineering", tech: "Java · .NET · React · Node.js", gradient: "from-primary/15 to-primary/5" },
  { icon: Cloud, label: "Cloud & DevOps", tech: "AWS · Azure · Kubernetes · Terraform", gradient: "from-accent/15 to-accent/5" },
  { icon: Database, label: "Data & AI", tech: "Python · SQL · Power BI · Databricks", gradient: "from-primary/15 to-accent/5" },
  { icon: TestTube, label: "QA & Test Automation", tech: "Selenium · Cypress · Playwright", gradient: "from-accent/15 to-primary/5" },
  { icon: Shield, label: "Cybersecurity", tech: "IAM · SIEM · Cloud Security", gradient: "from-primary/15 to-primary/5" },
  { icon: Server, label: "ERP / Business Apps", tech: "SAP · Salesforce · Dynamics 365", gradient: "from-accent/15 to-accent/5" },
  { icon: Headphones, label: "IT Support & Infra", tech: "Linux · Microsoft 365 · VMware", gradient: "from-primary/15 to-accent/5" },
  { icon: Kanban, label: "Product & Project Delivery", tech: "Agile · Scrum · Jira · Confluence", gradient: "from-accent/15 to-primary/5" },
];

/* Subtle tech pattern background per card */
const TechPattern = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
    {/* Small circuit-like accents */}
    <div className="absolute bottom-2 right-2 w-6 h-6">
      <div className="absolute bottom-0 right-0 w-full h-px bg-primary/[0.06]" />
      <div className="absolute bottom-0 right-0 w-px h-full bg-primary/[0.06]" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-primary/[0.08]" />
    </div>
  </div>
);

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
            <div className={`absolute inset-0 bg-gradient-to-b ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <TechPattern />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 border border-primary/[0.06]">
                <area.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground tracking-tight">{area.label}</span>
              <span className="text-[11px] text-muted-foreground/70 mt-1.5 leading-snug">{area.tech}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
