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
  <section id="industries" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Industries</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Relevant experience across key sectors
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We support companies across sectors where reliable IT delivery makes a measurable difference.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ind.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">{ind.label}</h3>
              <p className="text-sm text-muted-foreground">{ind.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
