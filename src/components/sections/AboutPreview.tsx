import { motion } from "framer-motion";
import { Target, Handshake, Eye } from "lucide-react";

const values = [
  { icon: Target, title: "Delivery Focus", description: "We prioritise execution. Our teams are built around outcomes, not just headcount.", gradient: "from-primary to-primary" },
  { icon: Handshake, title: "Partnership Mindset", description: "We work as an extension of your team — invested in your success, not just our placement.", gradient: "from-primary to-accent" },
  { icon: Eye, title: "Transparency", description: "Clear communication, honest timelines, and no hidden surprises. Trust built through visibility.", gradient: "from-accent to-primary" },
];

/* Abstract culture / values placeholder */
const CulturePlaceholder = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-muted to-card"
  >
    {/* Grid texture */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* Abstract team / connection visualization */}
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Central node */}
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/[0.12] to-accent/[0.08] border border-primary/[0.1] flex items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-primary/20" />
        </div>
        {/* Orbiting nodes */}
        {[
          { top: "-40px", left: "-50px", size: "w-8 h-8" },
          { top: "-45px", left: "55px", size: "w-6 h-6" },
          { top: "50px", left: "-55px", size: "w-7 h-7" },
          { top: "45px", left: "50px", size: "w-5 h-5" },
          { top: "0px", left: "-75px", size: "w-5 h-5" },
          { top: "0px", left: "75px", size: "w-6 h-6" },
        ].map((node, i) => (
          <div
            key={i}
            className={`absolute ${node.size} rounded-lg border border-primary/[0.08] bg-primary/[0.04]`}
            style={{ top: node.top, left: node.left }}
          />
        ))}
      </div>
    </div>

    {/* Connection lines (SVG) */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <line x1="50%" y1="50%" x2="35%" y2="35%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.08" />
      <line x1="50%" y1="50%" x2="65%" y2="32%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.06" />
      <line x1="50%" y1="50%" x2="35%" y2="65%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.06" />
      <line x1="50%" y1="50%" x2="65%" y2="65%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.05" />
      <line x1="50%" y1="50%" x2="28%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.06" />
      <line x1="50%" y1="50%" x2="72%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.05" />
    </svg>

    {/* Corner glows */}
    <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-primary/[0.05] blur-3xl" />
    <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl" />
  </motion.div>
);

const AboutPreview = () => (
  <section id="about" className="section-padding bg-muted relative overflow-hidden">
    <div className="absolute inset-0 gradient-mesh pointer-events-none" />

    <div className="container relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">About Komodo</span>
          <h2 className="section-title mb-6">
            A partner, not just a provider
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-base">
            Komodo is a premium IT outsourcing and nearshore delivery partner for companies that need strong technical capability, fast onboarding, and reliable collaboration.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mb-8">
            We combine commercial maturity with operational rigour — supporting companies across Portugal and international markets with teams built for real delivery.
          </p>

          {/* Culture placeholder on desktop */}
          <div className="hidden lg:block">
            <CulturePlaceholder />
          </div>
        </motion.div>

        <div className="space-y-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/15 hover:shadow-sm transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0 opacity-90`}>
                <value.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1 text-[15px] tracking-tight">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Culture placeholder on mobile */}
          <div className="lg:hidden mt-6">
            <CulturePlaceholder />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
