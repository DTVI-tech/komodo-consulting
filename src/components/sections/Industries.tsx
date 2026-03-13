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
  <section id="industries" className="section-padding bg-muted">
    <div className="container">
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
            className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/15 hover:shadow-sm transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
              <ind.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
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
