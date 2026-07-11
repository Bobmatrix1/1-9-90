import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const products = [
  {
    name: "Raw Cashew Nuts (Premium)",
    description: "High outturn raw cashew nuts sourced from the best harvesting regions",
    image: "/images/cashew 2.jpeg",
  },
  {
    name: "Raw Cashew Nuts (Standard)",
    description: "Export-grade sun-dried raw cashew nuts in jute bags",
    image: "/images/cashew 4.jpeg",
  },
  {
    name: "Processed Cashew (W-240)",
    description: "Premium large whole white cashew kernels, vacuum packed",
    image: "/images/cashew 5.jpeg",
  },
  {
    name: "Processed Cashew (W-320)",
    description: "Standard whole white cashew kernels for global distribution",
    image: "/images/cashew 7.jpeg",
  },
  {
    name: "Cocoa Beans & Butter",
    description: "Well-fermented, sun-dried premium cocoa beans for chocolatiers",
    image: "/images/cocoa.jpeg",
  },
  {
    name: "Export Grade Coconuts",
    description: "Mature coconuts harvested and sorted for optimal shell and water quality",
    image: "/images/coconut.jpeg",
  },
  {
    name: "Bitter Kola",
    description: "Premium Garcinia Kola seeds, sorted and dried for pharmaceutical and food use",
    image: "/images/bitter cola.jpeg",
  },
  {
    name: "Fresh Avocados",
    description: "Butter-soft organic fresh avocados harvested for immediate shipping",
    image: "/images/avocado.jpeg",
  },
  {
    name: "White & Brown Beans",
    description: "Hygienically sorted and bag-packed honey beans and brown beans",
    image: "/images/beans.jpeg",
  },
  {
    name: "Cassava Garri",
    description: "Export-quality white and yellow pan-fried cassava grains",
    image: "/images/garri.jpeg",
  },
  {
    name: "Groundnuts (Peanuts)",
    description: "Hand-sorted shelled peanuts and groundnuts in ventilation bags",
    image: "/images/groundnuts.jpeg",
  },
  {
    name: "Natural Wild Honey",
    description: "100% pure organic wild honey rich in natural taste and enzymes",
    image: "/images/honey.jpeg",
  },
  {
    name: "Dried Crayfish",
    description: "Sun-dried African crayfish processed under strict quality standards",
    image: "/images/crayfish bag.jpeg",
  },
  {
    name: "Shea Butter (Ori)",
    description: "Pure unrefined organic shea butter for cosmetics and skincare industries",
    image: "/images/ori.jpeg",
  },
  {
    name: "Palm Kernel Shells & Oil",
    description: "High-energy palm kernel shells for biofuel and pure palm kernel oil",
    image: "/images/palmkernel.jpeg",
  },
  {
    name: "Red Palm Oil",
    description: "Premium grade, naturally processed red palm oil for global kitchens",
    image: "/images/palmoil.jpeg",
  },
  {
    name: "Giant African Snails",
    description: "Cleaned and oven-dried edible giant snails ready for packaging",
    image: "/images/snail.jpeg",
  },
  {
    name: "Plantain Flour",
    description: "Gluten-free, highly nutritious green plantain flour in bulk packs",
    image: "/images/plantain flour.jpeg",
  },
  {
    name: "Premium Hardwood",
    description: "Premium wood a unique beauty, durability, and versatility make it an essential resource for countless applications",
    image: "/images/wood.jpeg",
  },
  {
    name: "Spices & Seasoning",
    description: "Export-quality dried ginger, garlic, chili pepper, and local herbs",
    image: "/images/spices.jpeg",
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    if (visibleCount < products.length) {
      setVisibleCount((prev) => Math.min(prev + 5, products.length));
    } else {
      setVisibleCount(5);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.02, // Trigger as soon as 2% of the section is visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % products.length : null));
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + products.length) % products.length : null));

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-[100px] bg-parchment"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-3">
            Our Products
          </p>
          <h2
            className="font-display font-bold text-forest leading-[1.1] tracking-[-0.01em] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Premium Agricultural Commodities
          </h2>
          <p className="text-sage text-base max-w-lg mx-auto">
            From farm-fresh produce to carefully processed exports, quality in every batch.
          </p>
        </div>

        {/* Product Grid */}
        <div id="gallery" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.slice(0, visibleCount).map((product, i) => (
            <div
              key={product.name}
              style={{
                transitionDelay: `${(i % 4) * 100}ms` // stagger delay per column row
              }}
              className={`product-card group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-700 ease-out cursor-pointer ${
                isIntersecting 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              onClick={() => openLightbox(i)}
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 lg:p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <h3 className="font-display font-bold text-forest text-base lg:text-lg">
                    {product.name}
                  </h3>
                </div>
                <p className="text-sage text-xs lg:text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="group flex items-center gap-2 px-6 py-3 border border-gold text-gold font-medium rounded-full bg-transparent hover:bg-gold hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-elevated cursor-pointer"
          >
            <span>
              {visibleCount < products.length ? "Load More Products" : "Load Less"}
            </span>
            {visibleCount < products.length ? (
              <ChevronDown size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            ) : (
              <ChevronUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            )}
          </button>
        </div>

        {/* Cashew Infographic Banner */}
        <div className="mt-16 lg:mt-20 rounded-2xl overflow-hidden shadow-card">
          <img
            src="/images/1000858152.jpg"
            alt="Know Your Raw Cashews - Educational infographic about cashew quality factors"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
          <div
            className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={products[lightbox].image}
              alt={products[lightbox].name}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-white mt-4 font-display font-bold text-xl">
              {products[lightbox].name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
