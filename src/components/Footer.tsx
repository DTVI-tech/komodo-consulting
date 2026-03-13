import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img src={logoWhite} alt="Komodo" className="h-8 w-auto" />
            <p className="text-sm text-secondary-foreground/60 max-w-xs">
              Premium IT outsourcing and nearshore delivery from Portugal for companies that need dependable execution.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-display uppercase tracking-wider text-secondary-foreground/40">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><button onClick={() => scrollTo("#services")} className="hover:text-secondary-foreground transition-colors">Staff Augmentation</button></li>
              <li><button onClick={() => scrollTo("#services")} className="hover:text-secondary-foreground transition-colors">Dedicated Teams</button></li>
              <li><button onClick={() => scrollTo("#services")} className="hover:text-secondary-foreground transition-colors">Managed Delivery</button></li>
              <li><button onClick={() => scrollTo("#services")} className="hover:text-secondary-foreground transition-colors">Nearshore Portugal</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-display uppercase tracking-wider text-secondary-foreground/40">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><button onClick={() => scrollTo("#about")} className="hover:text-secondary-foreground transition-colors">About</button></li>
              <li><button onClick={() => scrollTo("#industries")} className="hover:text-secondary-foreground transition-colors">Industries</button></li>
              <li><button onClick={() => scrollTo("#expertise")} className="hover:text-secondary-foreground transition-colors">Technologies</button></li>
              <li><button onClick={() => scrollTo("#contact")} className="hover:text-secondary-foreground transition-colors">Contact</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-display uppercase tracking-wider text-secondary-foreground/40">Other</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/consulting" className="hover:text-secondary-foreground transition-colors">Consulting</Link></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/40">© {new Date().getFullYear()} Komodo. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-secondary-foreground/40">
            <a href="#" className="hover:text-secondary-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
