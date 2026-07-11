import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 15, suffix: "+", label: "Years in Agribusiness" },
  { target: 20, suffix: "+", label: "Countries Served" },
  { target: 50, suffix: "K+", label: "Tons Exported" },
  { target: 100, suffix: "%", label: "Customer Satisfaction" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
        onEnter: () => setInView(true),
      });

      gsap.from(".stat-header", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
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
      className="py-16 md:py-20 lg:py-[80px] bg-forest"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="stat-header text-center mb-10 lg:mb-14">
          <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-3">
            Our Impact
          </p>
          <h2
            className="font-display font-bold text-white leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Numbers That Speak Trust
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <p
                className="font-display font-bold text-gold leading-none mb-2"
                style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
              >
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="text-white/70 text-xs lg:text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
