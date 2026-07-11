import { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll bar during loading
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Release scroll bar and signal completion
          document.body.style.overflow = "";
          onComplete();
        },
      });

      // Set initial states
      gsap.set(logoRef.current, { scale: 0.6, opacity: 0 });
      gsap.set(".char", { y: 24, opacity: 0 });
      gsap.set(barRef.current, { width: "0%" });

      // 1. Logo scale and fade-in
      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.8)",
      })
      // 2. Staggered lettering slide up
      .to(".char", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: "power3.out",
      }, "-=0.6")
      // 3. Progress bar animation
      .to(barRef.current, {
        width: "100%",
        duration: 1.4,
        ease: "power2.inOut",
      }, "-=0.4")
      // 4. Entire screen fades out smoothly to reveal the site
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const brandText = "KEYSTONE MERCANTILE";

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-forest flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center max-w-md px-6 text-center select-none">
        {/* Logo Container */}
        <div className="relative mb-6">
          {/* Subtle golden glow */}
          <div className="absolute inset-0 bg-gold/15 blur-2xl rounded-full scale-150 animate-pulse" />
          <img
            ref={logoRef}
            src="/images/logo1.png"
            alt="Keystone Logo"
            className="w-36 h-36 md:w-48 md:h-48 object-contain relative z-10"
          />
        </div>

        {/* Dynamic Text Characters */}
        <div
          ref={textRef}
          className="font-display font-bold text-white text-base md:text-lg tracking-[0.25em] mb-8 flex justify-center flex-wrap h-8 overflow-hidden"
        >
          {brandText.split("").map((char, index) => (
            <span
              key={index}
              className="char inline-block"
              style={{
                width: char === " " ? "8px" : "auto",
                whiteSpace: "pre"
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Loading Progress Bar */}
        <div className="w-[180px] h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-gold rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
