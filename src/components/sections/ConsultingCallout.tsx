import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ConsultingCallout = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.04] via-primary/[0.02] to-accent/[0.03] p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden"
      >
        {/* Geometric accent */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full border border-primary/[0.06] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
        <div className="relative">
          <span className="section-label">Consulting</span>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight mb-3">
            Looking for Consulting instead?
          </h3>
          <p className="text-muted-foreground max-w-lg text-base leading-relaxed">
            Our Consulting practice supports strategy, transformation, and advisory engagements. Explore our dedicated Consulting offering.
          </p>
        </div>
        <Link to="/consulting" className="flex-shrink-0 relative">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 h-12">
            Explore Consulting
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ConsultingCallout;
