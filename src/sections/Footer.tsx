import { Facebook, Linkedin } from "lucide-react";

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  "Raw Cashew Nuts",
  "Cashew Kernels",
  "Cocoa Beans",
  "Natural Honey",
  "Premium Spices",
  "Dried Crayfish",
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-deep-earth text-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-6">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Keystone Mercantile Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display font-bold text-lg text-white">
                Keystone Mercantile
              </span>
            </div>
            <p className="text-white/60 text-sm mb-2">
              Exporting Africa&apos;s Finest to the World
            </p>
            <p className="text-white/40 text-xs">RC. 838844</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">
              Our Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((product) => (
                <li key={product}>
                  <span className="text-white/60 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-white/60 text-sm">
              <p>
                <a
                  href="https://www.google.com/maps/place/6.8208,3.9208/@6.8208,3.9208,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  13B Abiodun Onanuga Street, Igbeba, Ijebu Ode, Ogun State, Nigeria
                </a>
              </p>
              <p>
                <a href="tel:+2348096580183" className="hover:text-white transition-colors">
                  08096580183
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/2348067540693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: 08067540693
                </a>
              </p>
              <p>
                <a href="mailto:keystoneng@gmail.com" className="hover:text-white transition-colors">
                  keystoneng@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col gap-1.5 sm:text-left text-center">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Keystone Mercantile Limited. All rights reserved.
            </p>
            <p className="text-white/30 text-[10px] tracking-wide uppercase">
              Powered by <span className="text-gold font-medium tracking-normal normal-case">Feel-flytechnology</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1BEtr4ffUj/" },
              { icon: Linkedin, label: "LinkedIn", href: "https://ng.linkedin.com/in/keystone-mercantile-90158624&sa=U&ved=2ahUKEwi5xtvQtM2VAxVhXkEAHUA0Fk8QFnoECAwQAg&usg=AOvVaw1wljNhHFCElEY81p7Tc51Y" },
              { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/2348067540693" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
