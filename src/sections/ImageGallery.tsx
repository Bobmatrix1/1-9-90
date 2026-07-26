import { useState, useEffect } from "react";
import { Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageGallery() {
  const gallery = [
    { src: "/images/image 1.jpeg", title: "1-9-90 Official Overview", desc: "Non-Stop Bitcoin Wealth Multiplication Engine" },
    { src: "/images/image 2.jpeg", title: "Double X 294% Breakdown", desc: "294% Returns Repeatedly with Auto-Reinvestment" },
    { src: "/images/image 3.jpeg", title: "Tetra X 1000% Matrix", desc: "9 Levels to Over $10 Million Dollars" },
    { src: "/images/image 4.jpeg", title: "Auto-Reinvestment System", desc: "System recycles initial capital for endless payouts" },
    { src: "/images/image 5.jpeg", title: "Bitcoin Accumulation", desc: "Accumulate Bitcoin & Crush Your Financial Goals" },
    { src: "/images/image 6.jpeg", title: "Dual Engine Backoffice", desc: "2 Businesses Inside 1 Powerful Backoffice" },
  ];

  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Lock background scroll when lightbox modal is open
  useEffect(() => {
    if (activeModalIndex !== null) {
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
  }, [activeModalIndex]);

  const prevImage = () => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => (prev! - 1 + gallery.length) % gallery.length);
  };

  const nextImage = () => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => (prev! + 1) % gallery.length);
  };

  return (
    <section className="py-20 bg-[#090D16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7931A]/10 border border-[#F7931A]/30 text-xs font-bold text-[#F7931A] uppercase tracking-wider">
            <ImageIcon className="w-4 h-4" />
            Official Platform Gallery & Graphics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            1-9-90 <span className="text-gradient-gold">Visual System Breakdown</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Explore the official promotional and structural breakdown graphics for 1-9-90.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveModalIndex(index)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-[#111726] border border-[#F7931A]/20 hover:border-[#F7931A] transition-all hover:shadow-btc-glow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/60">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="p-4 bg-gradient-to-t from-[#0E1424] to-[#12192A] space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-white group-hover:text-[#F7931A] transition-colors">
                    {item.title}
                  </h3>
                  <Maximize2 className="w-4 h-4 text-slate-400 group-hover:text-[#F7931A] transition-colors" />
                </div>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {activeModalIndex !== null && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveModalIndex(null);
            }
          }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div className="relative max-w-4xl w-full bg-[#0E1525] rounded-3xl border border-[#F7931A]/40 overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#F7931A] text-white hover:text-black flex items-center justify-center transition-colors border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="relative aspect-auto max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={gallery[activeModalIndex].src}
                alt={gallery[activeModalIndex].title}
                className="max-h-[75vh] w-auto object-contain"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#F7931A] text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#F7931A] text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption Footer */}
            <div className="p-5 bg-[#121A2D] flex items-center justify-between border-t border-slate-800">
              <div>
                <h4 className="text-lg font-extrabold text-white">
                  {gallery[activeModalIndex].title}
                </h4>
                <p className="text-xs text-slate-400">
                  {gallery[activeModalIndex].desc}
                </p>
              </div>
              <span className="text-xs font-bold text-[#F7931A] bg-[#F7931A]/10 px-3 py-1 rounded-full border border-[#F7931A]/30">
                {activeModalIndex + 1} / {gallery.length}
              </span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
