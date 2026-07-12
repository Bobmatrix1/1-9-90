import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Wheat, Bean, ShoppingBasket } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const images = [
    "/images/hero-farm.jpg",
    "/images/farm 1.jpeg",
    "/images/farm 2.jpeg",
    "/images/farm 3.jpeg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left panel content stagger
      gsap.from(".hero-animate", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Right panel image scale
      gsap.from(".hero-image", {
        scale: 1.08,
        duration: 1.2,
        ease: "power2.out",
      });

      // Floating cards
      gsap.from(".glass-card", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col lg:flex-row overflow-hidden">
      {/* Left Panel */}
      <div
        ref={leftRef}
        className="relative w-full lg:w-[45%] bg-cream flex flex-col justify-between px-6 sm:px-10 lg:px-16 py-20 lg:py-12 lg:pt-24 lg:pb-10 order-2 lg:order-1"
      >
        {/* Organic curved shape */}
        <svg
          className="absolute bottom-0 right-0 w-48 h-48 lg:w-72 lg:h-72 opacity-[0.05] pointer-events-none"
          viewBox="0 0 200 200"
        >
          <path
            d="M100,200 C150,150 200,100 200,0 L200,200 Z"
            fill="#7A9478"
          />
        </svg>

        <div className="max-w-xl relative z-10 lg:my-auto">
          <p className="hero-animate text-gold text-xs sm:text-sm font-medium tracking-[0.12em] uppercase mb-4 lg:mb-6">
            KEYSTONE MERCANTILE LIMITED NIGERIA
          </p>

          <h1 className="hero-animate font-display font-bold text-forest leading-[1.05] tracking-[-0.02em] mb-4 lg:mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Exporting Africa&apos;s Finest Agricultural Produce to the World
          </h1>

          <p className="hero-animate text-sage text-base lg:text-lg leading-relaxed max-w-md mb-6 lg:mb-8">
            From the fertile lands of Ogun State to global markets, cashews, cocoa, spices, and more. Trusted quality. Reliable supply.
          </p>

          <div className="hero-animate flex flex-wrap gap-4 mb-8 lg:mb-12">
            <button
              onClick={() => scrollToSection("#products")}
              className="group flex items-center gap-2 bg-gold text-forest font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5 shadow-card hover:shadow-elevated"
            >
              Explore Our Products
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="flex items-center gap-2 border-[1.5px] border-forest text-forest font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-forest/[0.05] hover:border-gold transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="hero-animate w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 mt-16 lg:mt-6 z-10">
          {[
            { num: "15+", label: "Years Experience" },
            { num: "20+", label: "Export Markets" },
            { num: "100%", label: "Quality Assured" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10 lg:gap-14">
              <div className="text-center">
                <p className="font-display font-bold text-gold text-3xl sm:text-4xl lg:text-[42px] leading-none mb-1 lg:mb-2">{stat.num}</p>
                <p className="text-sage text-[10px] sm:text-xs uppercase tracking-widest font-semibold leading-tight">{stat.label}</p>
              </div>
              {i < 2 && (
                <div className="w-px h-10 lg:h-14 bg-gold/40" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div
        ref={rightRef}
        className="relative w-full lg:w-[55%] min-h-[50vh] lg:min-h-0 order-1 lg:order-2"
      >
        <div className="hero-image absolute inset-0">
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Lush Nigerian farmland ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          ))}
          {/* Gradient overlay */}
          <div className="absolute inset-0 gradient-overlay z-20" />
          {/* Vignette */}
          <div
            className="absolute inset-0 z-20"
            style={{
              boxShadow: "inset 0 0 150px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        {/* Floating glass cards */}
        <div
          ref={cardsRef}
          className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-8 lg:right-auto flex flex-row flex-wrap lg:flex-nowrap gap-2 z-10 justify-center lg:justify-start"
        >
          {[
            { icon: Wheat, label: "Cashew Export" },
            { icon: Bean, label: "Cocoa Beans" },
            { icon: ShoppingBasket, label: "Premium Spices" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-card glass-panel rounded-lg px-3 py-1.5 lg:px-3.5 lg:py-2 flex items-center gap-2 animate-float"
            >
              <Icon size={16} className="text-gold-light flex-shrink-0" />
              <span className="text-white text-xs font-medium whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator - only on desktop */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center">
        <ChevronDown size={32} className="text-white animate-bounce-slow" />
      </div>
    </section>
  );
}
