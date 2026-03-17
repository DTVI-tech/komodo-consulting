import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDark from "@/assets/logo-dark.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Technologies", href: "#expertise" },
  { label: "About", href: "#about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/" className="flex-shrink-0">
          <img src={logoDark} alt="Komodo" className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <Button variant="ghost" size="sm" onClick={() => scrollTo("#contact")} className="text-[13px] text-muted-foreground hover:text-foreground">
            Contact
          </Button>
          <Button size="sm" onClick={() => scrollTo("#contact")} className="text-[13px] h-9 px-5 shadow-sm shadow-primary/15">
            Request Talent
          </Button>
          <Link to="/consulting">
            <Button size="sm" className="text-[13px] h-9 px-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold tracking-wide shadow-md shadow-secondary/20">
              Consulting
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
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-4">
            <Button size="sm" onClick={() => { setMobileOpen(false); scrollTo("#contact"); }}>Request Talent</Button>
            <Link to="/consulting">
              <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary font-semibold">
                Consulting
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
