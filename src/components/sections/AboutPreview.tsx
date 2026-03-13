import { motion } from "framer-motion";
import { Target, Handshake, Eye } from "lucide-react";

const values = [
  { icon: Target, title: "Delivery Focus", description: "We prioritise execution. Our teams are built around outcomes, not just headcount.", gradient: "from-primary to-primary" },
  { icon: Handshake, title: "Partnership Mindset", description: "We work as an extension of your team — invested in your success, not just our placement.", gradient: "from-primary to-accent" },
  { icon: Eye, title: "Transparency", description: "Clear communication, honest timelines, and no hidden surprises. Trust built through visibility.", gradient: "from-accent to-primary" },
];

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
          <p className="text-muted-foreground leading-relaxed text-base">
            We combine commercial maturity with operational rigour — supporting companies across Portugal and international markets with teams built for real delivery.
          </p>
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
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
