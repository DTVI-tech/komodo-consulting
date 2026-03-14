import { motion } from "framer-motion";
import { Landmark, ShoppingCart, Radio, HeartPulse, Factory, Laptop } from "lucide-react";

const industries = [
  { icon: Landmark, label: "Financial Services", desc: "Banking, insurance, and fintech delivery", color: "from-primary/[0.08] to-primary/[0.02]" },
  { icon: ShoppingCart, label: "Retail & E-commerce", desc: "Platforms, logistics, and digital commerce", color: "from-accent/[0.08] to-accent/[0.02]" },
  { icon: Radio, label: "Telecom", desc: "Networks, platforms, and digital services", color: "from-primary/[0.08] to-accent/[0.02]" },
  { icon: HeartPulse, label: "Healthcare", desc: "Health-tech, compliance, and data platforms", color: "from-accent/[0.08] to-primary/[0.02]" },
  { icon: Factory, label: "Manufacturing", desc: "Industrial software, ERP, and automation", color: "from-primary/[0.08] to-primary/[0.02]" },
  { icon: Laptop, label: "SaaS / Technology", desc: "Product engineering and platform scale", color: "from-accent/[0.08] to-accent/[0.02]" },
];

/* Industry-specific mini placeholder graphic */
const IndustryGraphic = ({ gradient }: { gradient: string }) => (
  <div className="absolute top-0 right-0 bottom-0 w-20 pointer-events-none overflow-hidden rounded-r-xl opacity-50">
    <div className={`absolute inset-0 bg-gradient-to-l ${gradient}`} />
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(45deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "8px 8px",
      }}
    />
    {/* Abstract bar chart / data viz hint */}
    <div className="absolute bottom-3 right-3 flex items-end gap-[2px]">
      <div className="w-1 h-3 rounded-sm bg-primary/[0.1]" />
      <div className="w-1 h-5 rounded-sm bg-primary/[0.08]" />
      <div className="w-1 h-4 rounded-sm bg-primary/[0.06]" />
      <div className="w-1 h-6 rounded-sm bg-primary/[0.1]" />
    </div>
  </div>
);

const Industries = () => (
  <section id="industries" className="section-padding bg-muted relative overflow-hidden">
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
            <IndustryGraphic gradient={ind.color} />

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 border border-primary/[0.06]">
              <ind.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="relative pr-16">
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
