import { motion } from "framer-motion";
import { Clock, GraduationCap, MessageCircle, TrendingDown } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Talent Quality",
    description: "Access to a deep pool of skilled engineers, cloud specialists, data professionals, and delivery experts.",
  },
  {
    icon: Clock,
    title: "Time Zone Alignment",
    description: "CET/WET time zone enables real-time collaboration with European and overlapping hours with US teams.",
  },
  {
    icon: MessageCircle,
    title: "Communication & Culture",
    description: "Strong English proficiency and Western European business culture ensure smooth, low-friction collaboration.",
  },
  {
    icon: TrendingDown,
    title: "Cost-to-Quality Balance",
    description: "Competitive rates combined with high delivery standards — better value than traditional Western hubs.",
  },
];

const WhyPortugal = () => (
  <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Nearshore Advantage
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Why companies choose Portugal for nearshore IT outsourcing
          </h2>
          <p className="text-secondary-foreground/70 leading-relaxed max-w-lg">
            Portugal has become one of Europe's strongest nearshore hubs — combining deep technical talent, cultural alignment, and a mature business environment that supports reliable delivery at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10"
            >
              <reason.icon className="h-5 w-5 text-primary mb-4" />
              <h3 className="font-display font-semibold text-sm mb-2">{reason.title}</h3>
              <p className="text-sm text-secondary-foreground/60 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyPortugal;
