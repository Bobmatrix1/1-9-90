import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.6,
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
      className="py-16 md:py-24 lg:py-[100px] relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #2A4B3A 0%, #1C2E24 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="cta-content text-center max-w-2xl mx-auto">
          <h2
            className="font-display font-bold text-white leading-[1.1] tracking-[-0.01em] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Ready to Source Premium Agricultural Products?
          </h2>

          {/* Gold decorative line */}
          <div className="w-20 h-[2px] bg-gold mx-auto mb-6" />

          <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-8">
            Partner with Keystone Mercantile for reliable supply, competitive pricing, and world-class quality assurance. Get your quote today via WhatsApp or email.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2348067540693"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gold text-forest font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5 shadow-card"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 border-[1.5px] border-white/40 text-white font-semibold text-sm px-7 py-3.5 rounded-lg hover:border-white hover:bg-white/8 transition-all duration-300"
            >
              Send an Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
