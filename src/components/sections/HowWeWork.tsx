import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery", description: "We understand your requirements, team structure, timelines, and business context." },
  { number: "02", title: "Shortlist", description: "We identify and present vetted candidates or team configurations matched to your needs." },
  { number: "03", title: "Validation", description: "You review profiles, conduct interviews, and approve the fit before engagement." },
  { number: "04", title: "Onboarding", description: "Fast, structured onboarding with clear communication channels and delivery alignment." },
  { number: "05", title: "Ongoing Support", description: "Continuous follow-up, performance tracking, and proactive collaboration management." },
];

const HowWeWork = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Process</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          How we work
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A clear, structured process from initial conversation to ongoing delivery — designed for speed and low friction.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-6 md:gap-8 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold font-display flex-shrink-0">
                {step.number}
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-2" />}
            </div>
            <div className="pb-10">
              <h3 className="font-display font-semibold text-foreground text-lg mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWork;
