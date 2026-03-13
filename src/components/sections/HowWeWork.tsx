import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery", description: "We understand your requirements, team structure, timelines, and business context." },
  { number: "02", title: "Shortlist", description: "We identify and present vetted candidates or team configurations matched to your needs." },
  { number: "03", title: "Validation", description: "You review profiles, conduct interviews, and approve the fit before engagement." },
  { number: "04", title: "Onboarding", description: "Fast, structured onboarding with clear communication channels and delivery alignment." },
  { number: "05", title: "Ongoing Support", description: "Continuous follow-up, performance tracking, and proactive collaboration management." },
];

const HowWeWork = () => (
  <section className="section-padding bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label">Process</span>
        <h2 className="section-title mb-5">
          How we work
        </h2>
        <p className="section-subtitle mx-auto">
          A clear, structured process from initial conversation to ongoing delivery — designed for speed and low friction.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-6 md:gap-8 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold font-display flex-shrink-0">
                {step.number}
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
            </div>
            <div className="pb-10">
              <h3 className="font-display font-bold text-foreground text-base mb-1 tracking-tight">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWork;
