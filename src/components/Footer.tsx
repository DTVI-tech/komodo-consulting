import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="space-y-4">
            <img src={logoWhite} alt="Komodo Consulting" className="h-7 w-auto" />
            <p className="text-[13px] text-secondary-foreground/40 max-w-[260px] leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold font-display uppercase tracking-[0.15em] text-secondary-foreground/30">{t.footer.services}</h4>
            <ul className="space-y-2.5 text-[13px] text-secondary-foreground/50">
              <li><button onClick={() => scrollTo("#services")} className="hover:text-secondary-foreground transition-colors">{t.footer.staffAug}</button></li>
              <li><button onClick={() => scrollTo("#services")} className="hover:text-secondary-foreground transition-colors">{t.footer.dedicatedTeams}</button></li>
              <li><button onClick={() => scrollTo("#services")} className="hover:text-secondary-foreground transition-colors">{t.footer.nearshorePortugal}</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold font-display uppercase tracking-[0.15em] text-secondary-foreground/30">{t.footer.company}</h4>
            <ul className="space-y-2.5 text-[13px] text-secondary-foreground/50">
              <li><Link to="/about" className="hover:text-secondary-foreground transition-colors">{t.footer.about}</Link></li>
              <li><button onClick={() => scrollTo("#industries")} className="hover:text-secondary-foreground transition-colors">{t.footer.industries}</button></li>
              <li><Link to="/technologies" className="hover:text-secondary-foreground transition-colors">{t.footer.technologies}</Link></li>
              <li><Link to="/contact" className="hover:text-secondary-foreground transition-colors">{t.footer.contact}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold font-display uppercase tracking-[0.15em] text-secondary-foreground/30">{t.footer.other}</h4>
            <ul className="space-y-2.5 text-[13px] text-secondary-foreground/50">
              <li><Link to="/consulting" className="hover:text-secondary-foreground transition-colors">{t.footer.consulting}</Link></li>
              <li><a href="https://komodo-consulting.careers-page.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground transition-colors">{t.footer.careers}</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">{t.footer.privacyPolicy}</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">{t.footer.termsOfService}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-secondary-foreground/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/30">© {new Date().getFullYear()} Komodo Consulting. {t.footer.rights}</p>
          <a href="#" className="text-xs text-secondary-foreground/30 hover:text-secondary-foreground transition-colors">{t.footer.linkedin}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
