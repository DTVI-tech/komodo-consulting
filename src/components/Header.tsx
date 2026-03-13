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
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex-shrink-0">
          <img src={logoDark} alt="Komodo" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => scrollTo("#contact")}>
            Book a Call
          </Button>
          <Button size="sm" onClick={() => scrollTo("#contact")}>
            Request Talent
          </Button>
          <Link to="/consulting">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              Consulting
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-4">
            <Button size="sm" onClick={() => scrollTo("#contact")}>Request Talent</Button>
            <Link to="/consulting">
              <Button variant="outline" size="sm" className="w-full border-primary text-primary font-semibold">
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
