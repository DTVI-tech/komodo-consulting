import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-image.jpg";

const FinalCTA = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden text-white">
      {/* Background image */}
      <img
        src={ctaImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-6 text-white">
            Ready to strengthen your technology capability?
          </h2>
          <p className="text-white/70 mb-12 text-base md:text-lg leading-relaxed">
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
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-white/30 text-white hover:bg-white/10">
                Request Talent
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
