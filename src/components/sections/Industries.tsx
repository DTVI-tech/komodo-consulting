import { motion } from "framer-motion";
import { Landmark, ShoppingCart, Radio, HeartPulse, Factory, Laptop } from "lucide-react";

const industries = [
  { icon: Landmark, label: "Financial Services", desc: "Banking, insurance, and fintech delivery" },
  { icon: ShoppingCart, label: "Retail & E-commerce", desc: "Platforms, logistics, and digital commerce" },
  { icon: Radio, label: "Telecom", desc: "Networks, platforms, and digital services" },
  { icon: HeartPulse, label: "Healthcare", desc: "Health-tech, compliance, and data platforms" },
  { icon: Factory, label: "Manufacturing", desc: "Industrial software, ERP, and automation" },
  { icon: Laptop, label: "SaaS / Technology", desc: "Product engineering and platform scale" },
];

const Industries = () => (
  <section id="industries" className="section-padding bg-muted relative overflow-hidden">
    {/* Geometric accent */}
    <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full border border-border/50 pointer-events-none" />
    
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label">Industries</span>
        <h2 className="section-title mb-5">
          Relevant experience across key sectors
        </h2>
        <p className="section-subtitle mx-auto">
          We support companies across sectors where reliable IT delivery makes a measurable difference.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/15 hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <ind.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="relative">
              <h3 className="font-display font-bold text-foreground mb-1 text-[15px] tracking-tight">{ind.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
