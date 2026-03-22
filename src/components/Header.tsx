import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import logoDark from "@/assets/logo-dark.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.services, href: "/services", isRoute: true },
    { label: t.nav.industries, href: "#industries", isRoute: false },
    { label: t.nav.technologies, href: "/technologies", isRoute: true },
    { label: t.nav.about, href: "/about", isRoute: true },
    { label: t.nav.careers, href: "https://komodo-consulting.careers-page.com/", isExternal: true },
  ];

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/" className="flex-shrink-0">
          <img src={logoDark} alt="Komodo Consulting" className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.isExternal ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ) : link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleAnchorClick(link.href)}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          {/* Language switcher */}
          <div className="flex items-center border border-border rounded-md overflow-hidden mr-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 text-[11px] font-bold tracking-wide transition-colors ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("pt")}
              className={`px-2.5 py-1 text-[11px] font-bold tracking-wide transition-colors ${
                language === "pt"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              PT
            </button>
          </div>

          <Link to="/contact">
            <Button variant="ghost" size="sm" className="text-[13px] text-muted-foreground hover:text-foreground">
              {t.nav.contact}
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="sm" className="text-[13px] h-9 px-5 shadow-sm shadow-primary/15">
              {t.nav.requestTalent}
            </Button>
          </Link>
          <Link to="/consulting">
            <Button size="sm" className="text-[13px] h-9 px-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold tracking-wide shadow-md shadow-secondary/20">
              {t.nav.consulting}
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-6 space-y-3">
          {navLinks.map((link) =>
            link.isExternal ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ) : link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleAnchorClick(link.href)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </button>
            )
          )}

          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 pt-2 pb-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("pt")}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${
                language === "pt"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              PT
            </button>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full">{t.nav.requestTalent}</Button>
            </Link>
            <Link to="/consulting">
              <Button size="sm" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold tracking-wide">
                {t.nav.consulting}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
