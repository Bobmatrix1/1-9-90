import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Keystone Mercantile has been our most reliable cashew supplier for over 5 years. Their quality control is unmatched, and every shipment meets our exact specifications.",
    author: "Raj Patel",
    company: "Mumbai Spice Traders, India",
  },
  {
    quote:
      "The cocoa beans we receive are consistently premium grade. Their attention to moisture levels and grading standards sets them apart from other African exporters.",
    author: "Li Wei",
    company: "Guangzhou Cocoa Processing, China",
  },
  {
    quote:
      "Professionalism from order to delivery. Their team understands international export requirements and makes the entire process seamless.",
    author: "Sarah Thompson",
    company: "Pacific Foods Import, Australia",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
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
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-[100px] bg-parchment"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-3">
            Testimonials
          </p>
          <h2
            className="font-display font-bold text-forest leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            What Our Partners Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="testimonial-card bg-white rounded-2xl p-8 lg:p-10 shadow-card relative"
            >
              {/* Quote mark */}
              <span
                className="absolute top-6 left-6 font-display font-bold text-gold/20 leading-none select-none"
                style={{ fontSize: "72px" }}
              >
                &ldquo;
              </span>

              <div className="relative z-10 pt-8">
                <p className="text-forest text-sm lg:text-base leading-relaxed italic mb-6">
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="w-10 h-[1px] bg-gold mb-4" />

                <p className="font-body font-semibold text-forest text-sm">
                  {t.author}
                </p>
                <p className="text-sage text-xs">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
