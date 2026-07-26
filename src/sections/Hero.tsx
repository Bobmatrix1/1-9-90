import { useState, useEffect } from "react";
import { Zap, Play, Volume2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenActivate: () => void;
}

export default function Hero({ onOpenActivate }: HeroProps) {
  const images = [
    { src: "/images/image 1.jpeg", alt: "Bitcoin Wealth Growth Engine", caption: "1-9-90 Bitcoin Multiplication Platform" },
    { src: "/images/image 2.jpeg", alt: "Double X 294% Returns", caption: "Double X: 294% Returns Repeatedly" },
    { src: "/images/image 3.jpeg", alt: "Tetra X 1000% Returns", caption: "Tetra X: 1000% Returns Across 9 Matrix Levels" },
    { src: "/images/image 4.jpeg", alt: "Automatic Reinvestment Engine", caption: "Non-Stop Auto-Reinvestment Pays Rounds of $10M+" },
    { src: "/images/image 5.jpeg", alt: "Bitcoin Financial Freedom", caption: "Accumulate Bitcoin & Crush Your Wealth Goals" },
    { src: "/images/image 6.jpeg", alt: "Global Bitcoin Community", caption: "2 Businesses Inside 1 Powerful Backoffice" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#090D16]">
      {/* Glow Effects Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F7931A]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#10B981]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#F7931A] bg-[#F7931A]/10 px-3 py-1 rounded-md inline-block border border-[#F7931A]/20">
                WARM WELCOME TO NON-STOP MULTIPLYING OF WEALTH
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                WELCOME TO <br />
                <span className="text-gradient-gold">ENDLESS POSSIBILITIES</span> 🔥
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
              Start with a <span className="text-[#F7931A] font-extrabold bg-[#F7931A]/10 px-2 py-0.5 rounded border border-[#F7931A]/30">ONE TIME ACTIVATION COST OF 0.001 BTC</span> and <span className="underline decoration-[#F7931A] underline-offset-4 font-bold text-white">EARN FOR LIFE!</span>
            </p>

            <div className="p-4 rounded-2xl bg-[#12192A]/90 border border-[#F7931A]/30 space-y-2 backdrop-blur-md">
              <p className="text-base text-slate-200 font-semibold flex items-center gap-2 justify-center lg:justify-start">
                <span>💰💰</span>
                <span>It's time to accumulate Bitcoin!</span>
              </p>
              <p className="text-sm text-slate-400 font-medium">
                1-9-90 has made it easy for everyone.... so let's crush our goals.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenActivate}
                className="w-full sm:w-auto px-7 py-4 bg-gradient-gold hover:shadow-btc-glow-lg text-black font-extrabold text-base rounded-xl flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95"
              >
                <Zap className="w-5 h-5 fill-black" />
                GET STARTED
              </button>

              <a
                href="https://wa.me/2347068886985?text=hi%20please%20I%20want%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-gradient-gold hover:shadow-btc-glow text-black font-extrabold text-base rounded-xl flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Learn More
              </a>

              <a
                href="#video-presentation"
                className="w-full sm:w-auto px-6 py-4 bg-[#182338] hover:bg-[#202E4A] border border-[#F7931A]/30 text-white font-bold text-base rounded-xl flex items-center justify-center gap-2 transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#F7931A]/20 flex items-center justify-center group-hover:bg-[#F7931A] transition-colors">
                  <Play className="w-3.5 h-3.5 text-[#F7931A] group-hover:text-black fill-current ml-0.5" />
                </div>
                Watch Video Tour
              </a>
            </div>

            {/* Feature Pills */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80">
              <div className="text-center lg:text-left">
                <div className="text-xs text-slate-400 uppercase font-semibold">Business #1</div>
                <div className="text-sm font-extrabold text-[#F7931A]">DOUBLE X 294%</div>
                <div className="text-[11px] text-slate-500">$210 - $260 Repeatedly</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-xs text-slate-400 uppercase font-semibold">Business #2</div>
                <div className="text-sm font-extrabold text-emerald-400">TETRA X 1000%</div>
                <div className="text-[11px] text-slate-500">9 Levels to $10M+</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-xs text-slate-400 uppercase font-semibold">Payouts</div>
                <div className="text-sm font-extrabold text-white">Instant BTC</div>
                <div className="text-[11px] text-slate-500">Direct to Wallet</div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Slider of Platform Graphics */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-[#F7931A]/40 to-[#10B981]/20 border border-[#F7931A]/30 shadow-2xl shadow-black/80 group">
              
              {/* Slider Image Display */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60">
                <img
                  src={images[currentSlide].src}
                  alt={images[currentSlide].alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback placeholder gradient if image missing
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Gradient Overlay for Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F7931A] bg-black/60 px-2 py-0.5 rounded w-max mb-1 border border-[#F7931A]/30">
                    SLIDE {currentSlide + 1} OF {images.length}
                  </span>
                  <p className="text-base font-extrabold text-white">
                    {images[currentSlide].caption}
                  </p>
                </div>

                {/* Arrow Navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#F7931A] text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-colors border border-white/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#F7931A] text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-colors border border-white/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots navigation */}
              <div className="flex items-center justify-center gap-2 pt-3 pb-1">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === idx ? "w-7 bg-[#F7931A]" : "w-2 bg-slate-700 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>

              {/* Bottom Quick Audio Teaser */}
              <a
                href="#audio-presentation"
                className="mt-2 p-3 bg-[#111728] rounded-xl border border-slate-700/80 hover:border-[#F7931A]/50 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F7931A]/20 text-[#F7931A] flex items-center justify-center animate-pulse">
                    <Volume2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Voicenote Presentation</div>
                    <div className="text-[11px] text-slate-400">Listen to Bitcoin Earners Voicenote</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#F7931A]" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
