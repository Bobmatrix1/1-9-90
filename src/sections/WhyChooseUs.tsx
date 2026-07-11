import { useEffect, useRef } from "react";
import { Leaf, Award, Globe, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "Direct partnerships with Nigerian farmers ensuring ethical and eco-friendly practices.",
  },
  {
    icon: Award,
    title: "Export-Grade Quality",
    description: "Strict adherence to international grading standards. Every batch certified and inspected.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Active exports to India, China, Vietnam, Taiwan, Australia, and Canada with growing networks.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "Efficient logistics and supply chain management ensuring on-time delivery to major global ports.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-icon", {
        scale: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".feature-text", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-[100px] bg-cream"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-3">
            Why Keystone Mercantile
          </p>
          <h2
            className="font-display font-bold text-forest leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            The Trusted Choice for Global Buyers
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="feature-icon flex justify-center mb-4">
                <Icon size={40} className="text-gold" />
              </div>
              <div className="feature-text">
                <h3 className="font-body font-semibold text-forest text-base mb-2">
                  {title}
                </h3>
                <p className="text-sage text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
