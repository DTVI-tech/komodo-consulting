import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDark from "@/assets/logo-dark.png";

const ConsultingComingSoon = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
    <Link to="/" className="mb-12">
      <img src={logoDark} alt="Komodo" className="h-10 w-auto" />
    </Link>

    <div className="text-center max-w-lg">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Consulting</p>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Coming Soon</h1>
      <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
        Our Consulting practice is launching soon. For IT outsourcing, staff augmentation, and nearshore delivery — explore our main website.
      </p>
      <Link to="/">
        <Button size="lg" variant="outline" className="text-base px-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Outsourcing
        </Button>
      </Link>
    </div>
  </div>
);

export default ConsultingComingSoon;
