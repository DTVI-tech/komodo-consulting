import { motion } from "framer-motion";
import { Target, Handshake, Eye } from "lucide-react";
import aboutImageSrc from "@/assets/about-preview-image.webp";

const values = [
  { icon: Target, title: "Delivery Focus", description: "We prioritise execution. Our teams are built around outcomes, not just headcount.", gradient: "from-primary to-primary" },
  { icon: Handshake, title: "Partnership Mindset", description: "We work as an extension of your team — invested in your success, not just our placement.", gradient: "from-primary to-accent" },
  { icon: Eye, title: "Transparency", description: "Clear communication, honest timelines, and no hidden surprises. Trust built through visibility.", gradient: "from-accent to-primary" },
];

const AboutImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border"
  >
    <img
      src={aboutImageSrc.src}
      alt="Team collaborating in a modern workspace"
      width={1200}
      height={1000}
      className="w-full h-full object-cover object-center"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
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
          <span className="section-label">About Komodo Consulting</span>
          <h2 className="section-title mb-6">
            A partner, not just a provider
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-base">
            Komodo Consulting is a premium IT consulting and outsourcing partner — helping companies build capability, scale delivery, and grow through high-quality technology talent and teams.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mb-8">
            We combine strategic thinking with operational rigour — supporting ambitious companies with the people, structure, and delivery focus they need to move forward.
          </p>

          {/* Culture placeholder on desktop */}
          <div className="hidden lg:block">
            <AboutImage />
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
            <AboutImage />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
