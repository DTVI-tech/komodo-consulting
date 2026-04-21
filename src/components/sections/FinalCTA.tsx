import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ctaGraphic from "@/assets/final-cta-graphic.png";

/* Brand graphic */
const ContactPlaceholder = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="mt-16 max-w-[16rem] sm:max-w-[20rem] md:max-w-xl mx-auto relative"
  >
    <div className="absolute inset-0 -z-10 bg-accent/[0.06] blur-3xl rounded-full" />
    <img
      src={ctaGraphic}
      alt="Komodo Consulting — talent, partnership, and trust"
      className="w-full h-auto object-contain mx-auto"
      loading="lazy"
    />
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
            Ready to strengthen your technology capability?
          </h2>
          <p className="text-secondary-foreground/50 mb-12 text-base md:text-lg leading-relaxed">
            Let's discuss how Komodo Consulting can support your goals with the right talent, team structure, and delivery approach.
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
