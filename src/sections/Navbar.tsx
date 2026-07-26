import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronRight, Menu, X, Zap, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenActivate: () => void;
}

export default function Navbar({ onOpenActivate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.classList.add("modal-open");
      document.body.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    };
  }, [mobileMenuOpen]);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Overview", href: "#hero" },
    { name: "Audio Presentation", href: "#audio-presentation" },
    { name: "Video Tour", href: "#video-presentation" },
    { name: "Double X (294%)", href: "#double-x" },
    { name: "Tetra X ($10M+)", href: "#tetra-x" },
    { name: "9-Level Matrix", href: "#matrix-levels" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#090D16]/90 backdrop-blur-md border-b border-[#F7931A]/20 py-3 shadow-2xl shadow-black/50"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <a href="#hero" className="flex items-center gap-3 group">
              <img
                src="/images/logo.jpeg"
                alt="1-9-90 Logo"
                className="w-10 h-10 rounded-full border-2 border-[#F7931A] object-cover group-hover:scale-105 transition-transform"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-display font-extrabold text-2xl tracking-wider text-white whitespace-nowrap leading-none">
                  1-9-90
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold text-slate-300 hover:text-[#F7931A] px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-right hidden md:block">
                <div className="text-[11px] text-slate-400">One-Time Activation</div>
                <div className="text-xs font-bold text-[#F7931A]">0.001 BTC</div>
              </div>
              <button
                onClick={onOpenActivate}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-black rounded-xl group bg-gradient-gold hover:shadow-btc-glow transition-all active:scale-95"
              >
                <span className="relative px-4 py-2.5 transition-all ease-in duration-75 rounded-lg flex items-center gap-2 font-extrabold text-black">
                  <Zap className="w-4 h-4 fill-black text-black" />
                  Activate Now
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-slate-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Panel Drawer Rendered via React Portal to Document Body */}
      {mounted &&
        createPortal(
          <div
            className={`lg:hidden fixed inset-0 z-[99999] transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Backdrop Overlay */}
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Right-Side Panel */}
            <div
              className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0C1220] border-l border-[#F7931A]/40 z-[99999] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="space-y-6">
                
                {/* Header inside side panel */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/logo.jpeg"
                      alt="1-9-90 Logo"
                      className="w-9 h-9 rounded-full border border-[#F7931A] object-cover"
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                    />
                    <span className="font-display font-extrabold text-xl tracking-wider text-white whitespace-nowrap">
                      1-9-90
                    </span>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Activation Card Info */}
                <div className="p-3.5 bg-[#141C2E] rounded-xl border border-[#F7931A]/30 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400">One-Time Activation:</div>
                    <div className="text-xs font-extrabold text-[#F7931A]">0.001 BTC</div>
                  </div>
                  <span className="text-[10px] font-bold bg-[#10B981]/20 text-[#10B981] px-2 py-0.5 rounded">
                    Earn For Life
                  </span>
                </div>

                {/* Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-sm font-semibold text-slate-200 hover:text-[#F7931A] py-3 px-3.5 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </a>
                  ))}
                </div>

              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenActivate();
                  }}
                  className="w-full bg-gradient-gold text-black font-extrabold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-btc-glow active:scale-95 transition-transform"
                >
                  <Zap className="w-4 h-4 fill-black text-black" />
                  GET STARTED
                </button>
              </div>

            </div>
          </div>,
          document.body
        )}
    </>
  );
}
