import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What agricultural commodities do you export from Nigeria?",
    answer: "We export a wide range of premium agricultural products. This includes Raw Cashew Nuts (RCN), vacuum-packed Processed Cashew Kernels (grades W-240 and W-320), Sun-dried Cocoa Beans & Butter, Natural Wild Honey, Groundnuts (Peanuts), Red Palm Oil, Palm Kernel shells/oil, Dried Crayfish, Bitter Kola, Fresh Avocados, Cassava Garri, Plantain Flour, and Premium Hardwood Charcoal.",
  },
  {
    question: "What grading rules and quality assurance standards do you follow?",
    answer: "Our strict quality assurance team strictly follows the Global and Nigerian Grading Rules. For raw commodities like cashews and cocoa, we inspect and document vital parameters such as nut count, moisture content, defect rates, and kernel outturn (KOR) to ensure they meet contract specifications before shipping.",
  },
  {
    question: "What are your primary shipping destinations and trade ports?",
    answer: "Keystone Mercantile Limited has expanded global business relationships. Asia is our top market, and we regularly export to major ports in India, China, Vietnam, and Taiwan. We are also seeing growing markets and shipping regularly to buyers in Australia, Canada, and various neighboring African nations.",
  },
  {
    question: "Where are your facilities and corporate headquarters located?",
    answer: "Keystone Mercantile Limited is an incorporated Nigerian company based in Ijebu Ode, Ogun State, Nigeria. Sourcing directly from the rich rainforest zones in the south and high-yield farming regions across the north, our logistics headquarters are strategically placed to ensure prompt transit to export ports.",
  },
  {
    question: "Do you offer custom packaging and branding options?",
    answer: "Yes. Our directors have decades of experience in the branding, packaging, and custom handling of both processed dried foods and fresh agricultural commodities. We can customize retail or bulk packaging designs to preserve quality during long voyages and meet the labeling standards of your import country.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-[100px] bg-cream"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-3">
            FAQ
          </p>
          <h2
            className="font-display font-bold text-forest leading-[1.1] tracking-[-0.01em] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sage text-base max-w-lg mx-auto">
            Find answers to common questions about our export products, quality standards, and logistics.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  transitionDelay: `${idx * 100}ms`
                }}
                className={`border-b border-forest/10 pb-4 transition-all duration-700 ease-out ${
                  isIntersecting 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center py-4 text-left group focus:outline-none"
                >
                  <span className="font-display font-bold text-forest text-lg lg:text-xl group-hover:text-gold transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center text-forest group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-forest/80 text-sm lg:text-base leading-relaxed pl-1 pr-8 pb-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
