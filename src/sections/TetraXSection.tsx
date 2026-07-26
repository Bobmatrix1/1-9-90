import { useState } from "react";
import { Flame, Zap, Repeat } from "lucide-react";

interface TetraXProps {
  onOpenActivate: () => void;
}

export default function TetraXSection({ onOpenActivate }: TetraXProps) {
  const [selectedLevel, setSelectedLevel] = useState(0);

  const levels = [
    { level: 1, name: "Tetra x1", earn: "$1,000", btcApprox: "0.010 BTC", requirement: "4 Direct Partners", highlight: "Starter Matrix Level" },
    { level: 2, name: "Tetra x2", earn: "$10,000", btcApprox: "0.103 BTC", requirement: "Auto Reinvest & Upgrade", highlight: "5-Figure Breakthrough" },
    { level: 3, name: "Tetra x3", earn: "$50,000", btcApprox: "0.518 BTC", requirement: "Team Duplication", highlight: "Financial Momentum" },
    { level: 4, name: "Tetra x4", earn: "$250,000", btcApprox: "2.59 BTC", requirement: "Matrix Expansion", highlight: "Quarter Million Milestone" },
    { level: 5, name: "Tetra x5", earn: "$500,000", btcApprox: "5.18 BTC", requirement: "Leadership Tier", highlight: "Half-Million Payout" },
    { level: 6, name: "Tetra x6", earn: "$1,000,000", btcApprox: "10.36 BTC", requirement: "Crypto Millionaire Tier", highlight: "★ 1 MILLION DOLLAR CLUB ★" },
    { level: 7, name: "Tetra x7", earn: "$2,000,000", btcApprox: "20.72 BTC", requirement: "High Volume Reinvest", highlight: "Multi-Millionaire Matrix" },
    { level: 8, name: "Tetra x8", earn: "$3,200,000", btcApprox: "33.16 BTC", requirement: "Elite Bitcoin Accumulator", highlight: "3.2 Million Dollar Surge" },
    { level: 9, name: "Tetra x9", earn: "$4,300,000", btcApprox: "44.56 BTC", requirement: "Final Matrix Mastery", highlight: "★ $4.3M PINNACLE LEVEL ★" },
  ];

  const totalEarned = "$11,311,000+"; // Summing 1k+10k+50k+250k+500k+1M+2M+3.2M+4.3M = $11,311,000

  return (
    <section id="tetra-x" className="py-24 bg-[#090D16] relative overflow-hidden border-t border-[#F7931A]/20">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#F7931A]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-gold text-black text-xs font-extrabold uppercase tracking-widest shadow-btc-glow">
            <Flame className="w-4 h-4 fill-black text-black" />
            BUSINESS #2: TETRA X (1000% RETURNS)
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            HOW TO EARN OVER <span className="text-gradient-gold">$10 MILLION DOLLARS</span> <br />
            WITH 2 BUSINESSES INSIDE 1 BACKOFFICE 🔥
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            From the income made from <span className="text-[#F7931A] font-bold">DOUBLE X</span>, you activate <span className="text-emerald-400 font-bold">TETRA X</span> which pays <span className="text-white font-extrabold">1000% returns on all 9 levels</span>!
          </p>
        </div>

        {/* 9 Levels Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                TETRA X 9-Level Earnings Matrix
              </h3>
            </div>
            
            <button
              onClick={onOpenActivate}
              className="bg-gradient-gold text-black font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-btc-glow flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4 fill-black text-black" />
              Activate Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((lvl, index) => (
              <div
                key={lvl.name}
                onClick={() => setSelectedLevel(index)}
                className={`cursor-pointer p-6 rounded-2xl transition-all border ${
                  selectedLevel === index
                    ? "bg-[#18233B] border-[#F7931A] shadow-btc-glow scale-[1.02]"
                    : "bg-[#111726] border-slate-800 hover:border-slate-600 hover:bg-[#151D30]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-[#F7931A] bg-[#F7931A]/10 px-2.5 py-1 rounded border border-[#F7931A]/30">
                    LEVEL {lvl.level}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">
                    {lvl.requirement}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-xl font-extrabold text-white">{lvl.name}</h4>
                  <span className="text-2xl font-extrabold text-emerald-400">{lvl.earn}</span>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-slate-800/80 pt-3 mt-3">
                  <span className="text-slate-400 font-medium">BTC Value:</span>
                  <span className="text-[#F7931A] font-bold">{lvl.btcApprox}</span>
                </div>

                <div className="mt-2 text-[11px] font-bold text-slate-300 bg-white/5 p-2 rounded text-center">
                  {lvl.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-Reinvestment Callout Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#19112A] via-[#211638] to-[#120F24] border border-purple-500/40 shadow-2xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <Repeat className="w-6 h-6 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div>
              <span className="text-xs font-extrabold text-purple-400 uppercase tracking-widest">
                AUTOMATIC REINVESTMENT ALGORITHM
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                NON-STOP REPEATED ROUNDS OF $10 MILLION DOLLARS!
              </h3>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            While you've <span className="text-white font-extrabold">EARNED over $10 Million</span> in total from level 1 to 9, an auto reinvestment that occurs each time anyone completes each level and moves to a higher level will be paying you <span className="text-emerald-400 font-extrabold">multiple rounds of $10 Million dollars over and over!</span>
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-purple-500/20">
            <span className="text-xs font-extrabold text-[#F7931A] flex items-center gap-1">
              <span>IT'S A NONSTOP EARNING SPREE!</span>
            </span>

            <button
              onClick={onOpenActivate}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-gold text-black font-extrabold text-sm rounded-xl hover:shadow-btc-glow transition-all"
            >
              GET STARTED NOW
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
