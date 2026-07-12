import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column slide in
      gsap.from(leftRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Right column slide in
      gsap.from(rightRef.current, {
        x: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Parallax on main image
      gsap.to(".about-main-img", {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-[100px] bg-cream"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div ref={leftRef} className="w-full lg:w-[55%]">
            <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-3">
              About Keystone Mercantile
            </p>
            <h2
              className="font-display font-bold text-forest leading-[1.1] tracking-[-0.01em] mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Rooted in Nigeria. Connected to the World.
            </h2>
            <div className="space-y-4 text-forest/90 text-base leading-relaxed mb-6">
              <p>
                Keystone Mercantile Limited is an incorporated and wholly owned Nigerian company located in Ijebu Ode, Ogun State, Nigeria, a country well known for abundant rainforests in the south and sunshine in the north through the year.
              </p>
              <p>
                It is covered with great vegetation, good climate and fantastic weather guaranteeing numerous production of different agricultural produce in both dry and wet season.
              </p>
              <p>
                Keystone Mercantile Limited is a large scale exporter of African foods, spices and fresh fruits and vegetables to different African countries and beyond having expanded business relationships globally.
              </p>
              <p>
                The company is secured by a satisfied customer base, loyal employees, sound management and reliable supply. The directors have been in agribusiness with ample experience in branding and packaging of various processed foods both dried and fresh agricultural commodities to suit its customers&apos; demands and quality delivery.
              </p>
              <p>
                Keystone Mercantile Limited, being a reputable Nigerian exporter, provides a range of varieties of agricultural produce servicing many countries. Australia and Canada are showing more positive markets, but Asia has been our top market, which is why we export to major ports in India, China, Vietnam, Taiwan, and others.
              </p>
              <p>
                The standard quality assurance team of the company strictly follows the Global and Nigerian Grading Rules in line with industry knowledge, with a high degree of professionalism to uphold goodwill, long-term cooperation, and customer satisfaction.
              </p>
              <p>
                Our customers are assured of reliable agricultural commodities due to our superior product handling expertise and efficiency, which underpins our sales and service philosophy.
              </p>
            </div>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-gold font-medium text-sm group"
            >
              Learn More About Us
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Right Column */}
          <div ref={rightRef} className="w-full lg:w-[45%] flex flex-col gap-16 lg:gap-20">
            {/* Image Set 1: Cashew & Warehouse */}
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/images/cashew 3.jpeg"
                  alt="Warehouse with bagged cashew kernels ready for export"
                  className="about-main-img w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                {/* Gold accent line */}
                <div className="absolute top-4 right-4 w-[3px] h-20 bg-gold rounded-full" />
              </div>

              {/* Overlapping small image */}
              <div className="absolute -bottom-6 left-4 sm:-left-4 lg:-left-10 w-28 h-28 lg:w-40 lg:h-40 rounded-xl overflow-hidden border-4 border-cream shadow-card z-10">
                <img
                  src="/images/cashew 2.jpeg"
                  alt="Raw cashew nuts close-up"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Image Set 2: Crayfish & Small Crayfish */}
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/images/crayfish bag.jpeg"
                  alt="Premium African dried crayfish ready for export"
                  className="about-main-img w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                {/* Gold accent line */}
                <div className="absolute top-4 right-4 w-[3px] h-20 bg-gold rounded-full" />
              </div>

              {/* Overlapping small image */}
              <div className="absolute -bottom-6 left-4 sm:-left-4 lg:-left-10 w-28 h-28 lg:w-40 lg:h-40 rounded-xl overflow-hidden border-4 border-cream shadow-card z-10">
                <img
                  src="/images/crayfish small.jpeg"
                  alt="Dried crayfish close-up"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
