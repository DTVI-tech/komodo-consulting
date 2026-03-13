import { motion } from "framer-motion";
import { Clock, GraduationCap, MessageCircle, TrendingDown } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Talent Quality",
    description: "Deep pool of skilled engineers, cloud specialists, data professionals, and delivery experts.",
  },
  {
    icon: Clock,
    title: "Time Zone Alignment",
    description: "CET/WET time zone enables real-time collaboration with European and overlapping hours with US teams.",
  },
  {
    icon: MessageCircle,
    title: "Communication & Culture",
    description: "Strong English proficiency and Western European business culture ensure low-friction collaboration.",
  },
  {
    icon: TrendingDown,
    title: "Cost-to-Quality Balance",
    description: "Competitive rates with high delivery standards — better value than traditional Western hubs.",
  },
];

const WhyPortugal = () => (
  <section className="section-padding bg-secondary text-secondary-foreground">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-32"
        >
          <span className="section-label !text-accent">
            Nearshore Advantage
          </span>
          <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-6">
            Why companies choose Portugal for nearshore IT
          </h2>
          <p className="text-secondary-foreground/60 leading-relaxed max-w-lg text-base">
            Portugal has become one of Europe's strongest nearshore hubs — combining deep technical talent, cultural alignment, and a mature business environment for reliable delivery at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-secondary-foreground/[0.05] border border-secondary-foreground/[0.08] hover:border-secondary-foreground/[0.15] transition-colors"
            >
              <reason.icon className="h-5 w-5 text-accent mb-4" />
              <h3 className="font-display font-bold text-sm mb-2 tracking-tight">{reason.title}</h3>
              <p className="text-[13px] text-secondary-foreground/50 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyPortugal;
