import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-xl shadow-card"
            : "bg-cream/92 backdrop-blur-md"
        }`}
        style={{ borderBottom: "1px solid rgba(42,75,58,0.08)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px] md:h-[72px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-3"
          >
            <img
              src="/images/logo.png"
              alt="Keystone Mercantile Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-display font-bold text-lg text-forest hidden sm:block">
              Keystone Mercantile
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative text-sm font-medium text-forest hover:text-gold transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="bg-gold text-forest text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-forest p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-forest transition-transform duration-500 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 pt-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-white text-xl font-display font-bold hover:text-gold transition-colors duration-300"
              style={{
                animation: isOpen ? `fadeInLeft 400ms ${i * 80}ms both` : "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="mt-4 bg-gold text-forest font-semibold px-8 py-3 rounded-lg hover:bg-gold-light transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
