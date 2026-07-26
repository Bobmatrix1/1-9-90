import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Zap } from "lucide-react";

interface FaqProps {
  onOpenActivate: () => void;
}

export default function Faq({ onOpenActivate }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is 1-9-90 and how do I get started?",
      a: "1-9-90 is a high-yield Bitcoin marketing platform designed to help members accumulate Bitcoin. You start with a ONE-TIME activation cost of 0.001 BTC which grants lifetime access to two business engines inside one backoffice: DOUBLE X and TETRA X."
    },
    {
      q: "What is DOUBLE X and how does the 294% return work?",
      a: "DOUBLE X is the entry business. Once activated, referring partners triggers automatic 294% returns repeatedly. The algorithm automatically reinvests back your initial capital for non-stop earnings."
    },
    {
      q: "What is TETRA X and how do I earn over $10 Million Dollars?",
      a: "TETRA X is the 2nd business activated using profits made from DOUBLE X. It pays 1000% returns across 9 matrix levels. You progress from Level 1 ($1,000) all the way to Level 9 ($4,300,000), accumulating over $10 Million in total."
    },
    {
      q: "How does the Automatic Reinvestment feature work?",
      a: "Each time you or your team complete a matrix level, the system automatically recycles the entry capital to re-open that level while advancing you to the next tier. This allows you to earn multiple rounds of $10 Million over and over without paying out-of-pocket again!"
    },
    {
      q: "Are there any monthly subscription fees or hidden costs?",
      a: "No! Your 0.001 BTC activation fee is a ONE-TIME payment for life. You never have to pay monthly subscriptions or renewal fees."
    },
    {
      q: "How are earnings paid out?",
      a: "All earnings are generated in Bitcoin (BTC) and paid out directly and instantly to your private Bitcoin wallet address."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#090D16] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7931A]/10 border border-[#F7931A]/30 text-xs font-bold text-[#F7931A] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Everything You Need To Know About <span className="text-gradient-gold">1-9-90</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Got questions about activating your backoffice or earning 294% and 1000% returns? We have answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#111726] border border-slate-800 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="text-base sm:text-lg font-extrabold text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#F7931A] text-black' : 'bg-slate-800 text-slate-300'}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-12 p-8 rounded-3xl bg-[#131B2E] border border-[#F7931A]/30 text-center space-y-4">
          <h3 className="text-xl font-extrabold text-white">
            Ready to start accumulating Bitcoin today?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            1-9-90 has made it easy for everyone.... so let's crush our goals.
          </p>
          <button
            onClick={onOpenActivate}
            className="px-8 py-3.5 bg-gradient-gold text-black font-extrabold text-sm rounded-xl shadow-btc-glow hover:scale-105 transition-transform"
          >
            <Zap className="w-4 h-4 fill-black text-black inline-block mr-2" />
            GET STARTED NOW
          </button>
        </div>

      </div>
    </section>
  );
}
