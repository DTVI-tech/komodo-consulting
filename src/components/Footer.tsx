import { Link } from "react-router-dom";
import logoWhiteImg from "@/assets/logo-white.webp";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground" role="contentinfo">
      <div className="container py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="space-y-4">
            <img src={logoWhiteImg.src} alt="Komodo Consulting" width={1764} height={420} className="h-7 w-auto" />
            <p className="text-[13px] text-secondary-foreground/60 max-w-[260px] leading-relaxed">
              The technology partner for companies built to grow.
            </p>
            <a
              href="https://www.linkedin.com/company/komodoconsulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground opacity-60 hover:opacity-100 transition-opacity inline-block"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold font-display uppercase tracking-[0.15em] text-secondary-foreground/50">Services</h3>
            <ul className="space-y-2.5 text-[13px] text-secondary-foreground/50">
              <li><Link to="/services#staff-augmentation" className="hover:text-secondary-foreground transition-colors">Staff Augmentation</Link></li>
              <li><Link to="/services#dedicated-teams" className="hover:text-secondary-foreground transition-colors">Dedicated Teams</Link></li>
              <li><Link to="/services/nearshore-portugal" className="hover:text-secondary-foreground transition-colors">Nearshore Portugal</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold font-display uppercase tracking-[0.15em] text-secondary-foreground/50">Company</h3>
            <ul className="space-y-2.5 text-[13px] text-secondary-foreground/50">
              <li><Link to="/about" className="hover:text-secondary-foreground transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-secondary-foreground transition-colors">Services</Link></li>
              <li><Link to="/technologies" className="hover:text-secondary-foreground transition-colors">Technologies</Link></li>
              <li><Link to="/contact" className="hover:text-secondary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold font-display uppercase tracking-[0.15em] text-secondary-foreground/50">Other</h3>
            <ul className="space-y-2.5 text-[13px] text-secondary-foreground/50">
              <li><Link to="/consulting" className="hover:text-secondary-foreground transition-colors">Consulting</Link></li>
              <li><a href="https://komodo-consulting.careers-page.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground transition-colors">Careers</a></li>
              <li><Link to="/privacy-policy" className="hover:text-secondary-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-secondary-foreground/[0.06] flex items-center justify-center">
          <p className="text-xs text-secondary-foreground/50">© {new Date().getFullYear()} Komodo Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
