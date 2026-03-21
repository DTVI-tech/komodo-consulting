import { motion } from "framer-motion";
import { Code2, Cloud, Database, TestTube, Shield, Server, Headphones, Kanban } from "lucide-react";

const areas = [
  { icon: Code2, label: "Software Engineering", gradient: "from-primary/15 to-primary/5", pattern: "code" },
  { icon: Cloud, label: "Cloud & DevOps", gradient: "from-accent/15 to-accent/5", pattern: "cloud" },
  { icon: Database, label: "Data & AI", gradient: "from-primary/15 to-accent/5", pattern: "data" },
  { icon: TestTube, label: "QA & Test Automation", gradient: "from-accent/15 to-primary/5", pattern: "test" },
  { icon: Shield, label: "Cybersecurity", gradient: "from-primary/15 to-primary/5", pattern: "shield" },
  { icon: Server, label: "ERP / Business Apps", gradient: "from-accent/15 to-accent/5", pattern: "server" },
  { icon: Headphones, label: "IT Support & Infra", gradient: "from-primary/15 to-accent/5", pattern: "support" },
  { icon: Kanban, label: "Product & Project Delivery", gradient: "from-accent/15 to-primary/5", pattern: "kanban" },
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
        <span className="section-label">Capabilities</span>
        <h2 className="section-title mb-5">
          Technical depth across modern IT
        </h2>
        <p className="section-subtitle mx-auto">
          Consultants and teams across the technology disciplines that matter most to your delivery and business outcomes.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {areas.map((area, i) => (
          <Link key={area.label} to="/technologies" className="block">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group flex flex-col items-center justify-start text-center p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/15 hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[160px] cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <TechPattern />

              <div className="relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-primary/[0.06]">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="mt-4 text-sm font-semibold text-foreground tracking-tight leading-tight">{area.label}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
