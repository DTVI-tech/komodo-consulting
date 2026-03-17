import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

const ConsultingComingSoon = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden" style={{ background: "hsl(220 40% 6%)" }}>
    {/* Subtle gradient atmosphere */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(ellipse, hsl(222 100% 56%), transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(ellipse, hsl(197 80% 56%), transparent 70%)" }} />
    </div>

    {/* Faint grid texture */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="relative z-10 text-center max-w-lg">
      <Link to="/" className="inline-block mb-16">
        <img src={logoWhite} alt="Komodo Consulting" className="h-10 w-auto" />
      </Link>

      <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: "hsl(222 100% 60%)" }}>
        Consulting
      </p>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6" style={{ color: "hsl(210 20% 96%)" }}>
        Coming Soon
      </h1>
      <p className="text-base md:text-lg leading-relaxed mb-12" style={{ color: "hsl(220 15% 55%)" }}>
        Our Consulting practice is launching soon. For IT outsourcing, staff augmentation, and nearshore delivery — explore our main website.
      </p>
      <Link to="/">
        <Button
          size="lg"
          variant="outline"
          className="text-base px-8 border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
          style={{ color: "hsl(210 20% 80%)" }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Outsourcing
        </Button>
      </Link>
    </div>
  </div>
);

export default ConsultingComingSoon;
