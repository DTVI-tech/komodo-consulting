import { motion } from "framer-motion";
import { Target, Handshake, Eye } from "lucide-react";

const values = [
  { icon: Target, title: "Delivery Focus", description: "We prioritise execution. Our teams are built around outcomes, not just headcount." },
  { icon: Handshake, title: "Partnership Mindset", description: "We work as an extension of your team — invested in your success, not just our placement." },
  { icon: Eye, title: "Transparency", description: "Clear communication, honest timelines, and no hidden surprises. Trust built through visibility." },
];

const AboutPreview = () => (
  <section id="about" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">About Komodo</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            A partner, not just a provider
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Komodo is a premium IT outsourcing and nearshore delivery partner for companies that need strong technical capability, fast onboarding, and reliable collaboration.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We combine commercial maturity with operational rigour — supporting companies across Portugal and international markets with teams built for real delivery, not just resourcing.
          </p>
        </motion.div>

        <div className="space-y-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{value.title}</h3>
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
