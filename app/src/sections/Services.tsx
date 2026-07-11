import { useEffect, useRef, useState } from "react";
import { Wheat, ShieldCheck, Ship, Leaf, Package, Users } from "lucide-react";

const services = [
  {
    icon: Wheat,
    title: "Crop Sourcing & Export",
    description:
      "Large-scale export of cashew nuts, cocoa beans, sesame seeds, and grains. Sourced directly from local Nigerian farms to ensure premium harvest fresh from the land.",
  },
  {
    icon: Leaf,
    title: "Spices, Fruits & Vegetables",
    description:
      "Exporting authentic African spices, dried peppers, and fresh fruits/vegetables. We service different African countries and international markets with fresh commodities.",
  },
  {
    icon: Package,
    title: "Custom Branding & Packaging",
    description:
      "Decades of experience in packaging both dried and fresh agricultural commodities. We offer custom packaging options tailored specifically to meet our global client demands.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control & Grading",
    description:
      "Strictly following Global and Nigerian Grading Rules. Every batch is rigorously tested for nut count, moisture content, outturn, and defects by our QA team.",
  },
  {
    icon: Ship,
    title: "Expanded Global Logistics",
    description:
      "Reliable freight shipping to major ports in India, China, Vietnam, Taiwan, Australia, and Canada, backed by safe FOB High-Sea sales and logistics efficiency.",
  },
  {
    icon: Users,
    title: "Sound Agribusiness Management",
    description:
      "Secured by a highly satisfied customer base, loyal employees, and sound management. We focus on building long-term, mutually beneficial business relationships globally.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // Trigger as soon as 5% of the section is visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-[100px] bg-forest"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-3">
            What We Do
          </p>
          <h2
            className="font-display font-bold text-white leading-[1.1] tracking-[-0.01em] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            End-to-End Agricultural Export Services
          </h2>
          <p className="text-white/80 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Keystone Mercantile Limited is a large scale exporter of African foods, spices and fresh fruits and vegetables to different African countries and beyond having expanded business relationships globally.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={title}
              style={{
                transitionDelay: `${idx * 100}ms`
              }}
              className={`service-card group bg-white/[0.06] border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-gold/40 hover:-translate-y-2 hover:shadow-elevated transition-all duration-700 ease-out ${
                isIntersecting 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div 
                style={{
                  transitionDelay: `${(idx * 100) + 150}ms`
                }}
                className={`service-icon w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mb-6 transition-all duration-500 ease-out ${
                  isIntersecting ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <Icon size={28} className="text-gold" />
              </div>
              <h3 className="font-display font-bold text-white text-xl lg:text-2xl mb-3">
                {title}
              </h3>
              <p className="text-white/75 text-sm lg:text-base leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
