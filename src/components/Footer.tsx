import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground" role="contentinfo">
      <div className="container py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="space-y-4">
            <img src={logoWhite} alt="Komodo Consulting" className="h-7 w-auto" />
            <p className="text-[13px] text-secondary-foreground/40 max-w-[260px] leading-relaxed">
              Premium IT outsourcing and nearshore delivery from Portugal for companies that need dependable execution.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold font-display uppercase tracking-[0.15em] text-secondary-foreground/30">Services</h4>
            <ul className="space-y-2.5 text-[13px] text-secondary-foreground/50">
              <li><Link to="/services#staff-augmentation" className="hover:text-secondary-foreground transition-colors">Staff Augmentation</Link></li>
              <li><Link to="/services#dedicated-teams" className="hover:text-secondary-foreground transition-colors">Dedicated Teams</Link></li>
              <li><Link to="/services/nearshore-portugal" className="hover:text-secondary-foreground transition-colors">Nearshore Portugal</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold font-display uppercase tracking-[0.15em] text-secondary-foreground/30">Company</h4>
            <ul className="space-y-2.5 text-[13px] text-secondary-foreground/50">
              <li><Link to="/about" className="hover:text-secondary-foreground transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-secondary-foreground transition-colors">Services</Link></li>
              <li><Link to="/technologies" className="hover:text-secondary-foreground transition-colors">Technologies</Link></li>
              <li><Link to="/contact" className="hover:text-secondary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold font-display uppercase tracking-[0.15em] text-secondary-foreground/30">Other</h4>
            <ul className="space-y-2.5 text-[13px] text-secondary-foreground/50">
              <li><Link to="/consulting" className="hover:text-secondary-foreground transition-colors">Consulting</Link></li>
              <li><a href="https://komodo-consulting.careers-page.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-secondary-foreground/[0.06] flex items-center justify-center md:justify-start gap-4">
          <p className="text-xs text-secondary-foreground/30">© {new Date().getFullYear()} Komodo Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
