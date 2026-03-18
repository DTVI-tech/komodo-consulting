import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* Contact interface placeholder */
const ContactPlaceholder = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="mt-14 max-w-md mx-auto"
  >
    <div className="relative rounded-2xl border border-secondary-foreground/[0.08] bg-secondary-foreground/[0.03] p-6 overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative space-y-3">
        {/* Fake form lines */}
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-accent/40" />
          <div className="flex-1 h-3 rounded-full bg-secondary-foreground/[0.06]" />
        </div>
        <div className="flex items-center gap-3">
          <MessageSquare className="h-4 w-4 text-accent/40" />
          <div className="flex-1 h-3 rounded-full bg-secondary-foreground/[0.05]" />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4" />
          <div className="w-[60%] h-3 rounded-full bg-secondary-foreground/[0.04]" />
        </div>
        <div className="pt-2">
          <div className="w-24 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-[10px] font-bold text-primary/60">Send</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-accent/[0.06] blur-2xl" />
    </div>
  </motion.div>
);

const FinalCTA = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full border border-secondary-foreground/[0.04] pointer-events-none hidden md:block" />
      <div className="absolute bottom-[10%] left-[8%] w-[150px] h-[150px] rounded-full border border-secondary-foreground/[0.03] pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-6">
            Looking for a more reliable IT outsourcing partner?
          </h2>
          <p className="text-secondary-foreground/50 mb-12 text-base md:text-lg leading-relaxed">
            Let's discuss how Komodo can support your delivery goals with vetted talent, dedicated teams, and nearshore execution from Portugal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="text-base px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outlineDark" className="text-base px-8 h-12">
                Request Talent
              </Button>
            </Link>
          </div>

          {/* Contact interface placeholder */}
          <ContactPlaceholder />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
