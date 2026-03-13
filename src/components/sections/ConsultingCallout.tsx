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
        className="rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Consulting</p>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Looking for Consulting instead?
          </h3>
          <p className="text-muted-foreground max-w-lg">
            Our Consulting practice supports strategy, transformation, and advisory engagements. Explore our dedicated Consulting offering.
          </p>
        </div>
        <Link to="/consulting" className="flex-shrink-0">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
            Explore Consulting
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ConsultingCallout;
