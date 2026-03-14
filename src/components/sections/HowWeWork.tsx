import { motion } from "framer-motion";
import { Search, ListChecks, UserCheck, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Discovery", description: "We understand your requirements, team structure, timelines, and business context.", color: "from-primary to-primary" },
  { icon: ListChecks, number: "02", title: "Shortlist", description: "We identify and present vetted candidates or team configurations matched to your needs.", color: "from-primary to-accent" },
  { icon: UserCheck, number: "03", title: "Validation", description: "You review profiles, conduct interviews, and approve the fit before engagement.", color: "from-accent to-accent" },
  { icon: Rocket, number: "04", title: "Onboarding", description: "Fast, structured onboarding with clear communication channels and delivery alignment.", color: "from-accent to-primary" },
  { icon: HeartHandshake, number: "05", title: "Ongoing Support", description: "Continuous follow-up, performance tracking, and proactive collaboration management.", color: "from-primary to-primary" },
];

/* Visual flowchart placeholder for desktop */
const ProcessFlowPlaceholder = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="mt-12 relative rounded-2xl border border-border bg-card/50 p-6 md:p-8 overflow-hidden"
  >
    {/* Grid background */}
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    {/* Flow visualization */}
    <div className="relative flex items-center justify-between gap-2">
      {steps.map((step, i) => (
        <div key={step.number} className="flex items-center flex-1">
          <div className="flex flex-col items-center flex-1">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-2`}>
              <step.icon className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="w-full h-1 rounded-full bg-gradient-to-r from-primary/[0.08] to-accent/[0.06]" />
            <span className="mt-2 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider">{step.title}</span>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="h-3 w-3 text-muted-foreground/20 flex-shrink-0 mx-1" />
          )}
        </div>
      ))}
    </div>

    {/* Corner accent */}
    <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/[0.04] blur-2xl" />
  </motion.div>
);

const HowWeWork = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-border/50 pointer-events-none hidden lg:block" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="section-label">Process</span>
        <h2 className="section-title mb-5">How we work</h2>
        <p className="section-subtitle mx-auto">
          A clear, structured process from initial conversation to ongoing delivery — designed for speed and low friction.
        </p>
      </motion.div>

      {/* Desktop: Horizontal process cards */}
      <div className="hidden md:block">
        <div className="grid grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative"
            >
              <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/15 hover:shadow-md transition-all duration-300 h-full relative overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
                  <div className="absolute top-2 right-2 w-6 h-6 rounded border border-primary/[0.04]" />
                  <div className="absolute top-3 right-3 w-4 h-4 rounded border border-accent/[0.03]" />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground/50 font-display">{step.number}</span>
                </div>
                <h3 className="font-display font-bold text-foreground text-[15px] mb-2 tracking-tight">{step.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-2 w-4 h-px bg-border hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 h-0.5 bg-gradient-to-r from-primary via-accent to-primary/30 rounded-full origin-left"
        />

        {/* Process flow infographic placeholder */}
        <ProcessFlowPlaceholder />
      </div>

      {/* Mobile: Vertical timeline */}
      <div className="md:hidden max-w-sm mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-5"
          >
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                <step.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
            </div>
            <div className="pb-8">
              <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-wider">{step.number}</span>
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
