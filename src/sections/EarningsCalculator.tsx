import { useState } from "react";
import { Calculator } from "lucide-react";

interface CalculatorProps {
  onOpenActivate: () => void;
}

export default function EarningsCalculator({ onOpenActivate }: CalculatorProps) {
  const [levelIndex, setLevelIndex] = useState(0);
  const [partners, setPartners] = useState(4);

  const levelData = [
    { name: "Double X (294%)", earn: "$210 - $260", btc: "0.0029 BTC", raw: 260, roi: "294%" },
    { name: "Tetra Level 1", earn: "$1,000", btc: "0.010 BTC", raw: 1000, roi: "1,000%" },
    { name: "Tetra Level 2", earn: "$10,000", btc: "0.10 BTC", raw: 10000, roi: "1,000%" },
    { name: "Tetra Level 3", earn: "$50,000", btc: "0.51 BTC", raw: 50000, roi: "1,000%" },
    { name: "Tetra Level 4", earn: "$250,000", btc: "2.59 BTC", raw: 250000, roi: "1,000%" },
    { name: "Tetra Level 5", earn: "$500,000", btc: "5.18 BTC", raw: 500000, roi: "1,000%" },
    { name: "Tetra Level 6", earn: "$1,000,000", btc: "10.36 BTC", raw: 1000000, roi: "1,000%" },
    { name: "Tetra Level 7", earn: "$2,000,000", btc: "20.72 BTC", raw: 2000000, roi: "1,000%" },
    { name: "Tetra Level 8", earn: "$3,200,000", btc: "33.16 BTC", raw: 3200000, roi: "1,000%" },
    { name: "Tetra Level 9", earn: "$4,300,000", btc: "44.55 BTC", raw: 4300000, roi: "1,000%" },
  ];

  const current = levelData[levelIndex];
  
  // Dynamic multiplier calculation based on partner duplication
  const multiplier = Math.max(1, partners / 2);
  const projectedEarnings = Math.round(current.raw * multiplier);

  return (
    <section className="py-20 bg-[#0C1220] border-y border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7931A]/10 border border-[#F7931A]/30 text-xs font-bold text-[#F7931A] uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            Interactive Wealth Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            1-9-90 <span className="text-gradient-gold">Bitcoin Earnings Calculator</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            See how your one-time 0.001 BTC entry grows through Double X and Tetra X Matrix levels.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141E34] to-[#0E1525] border border-[#F7931A]/30 shadow-2xl space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Controls */}
            <div className="space-y-6">
              
              {/* Level Selector */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">Target Matrix Level:</span>
                  <span className="text-[#F7931A]">{current.name}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={levelData.length - 1}
                  value={levelIndex}
                  onChange={(e) => setLevelIndex(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#F7931A]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                  <span>Double X (0.001 BTC)</span>
                  <span>Tetra x5 ($500k)</span>
                  <span>Tetra x9 ($4.3M)</span>
                </div>
              </div>

              {/* Direct Partners Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">Direct Partners Referred:</span>
                  <span className="text-emerald-400 font-extrabold">{partners} Partners</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  value={partners}
                  onChange={(e) => setPartners(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <p className="text-[11px] text-slate-400">
                  {partners < 4 ? "⚠️ Refer 4 partners to unlock full 1000% Tetra X velocity!" : "🚀 Optimal Team Duplication Velocity Unlocked!"}
                </p>
              </div>

              {/* Input Capital Display */}
              <div className="p-4 rounded-xl bg-[#090E18] border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-semibold">One-Time Activation Out-Of-Pocket</div>
                </div>
                <span className="text-[10px] font-bold bg-[#F7931A]/20 text-[#F7931A] px-2 py-1 rounded">
                  Earn For Life
                </span>
              </div>

            </div>

            {/* Projected Result Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#19253F] to-[#11192C] border-2 border-[#F7931A]/40 text-center space-y-4 shadow-xl">
              <div className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#F7931A] uppercase tracking-widest bg-[#F7931A]/10 px-3 py-1 rounded-full border border-[#F7931A]/30">
                PROJECTED PAYOUT
              </div>

              <div>
                <div className="text-xs text-slate-400 font-medium">Estimated Earnings Payout</div>
                <div className="text-3xl sm:text-5xl font-extrabold text-emerald-400 my-1">
                  ${projectedEarnings.toLocaleString()}
                </div>
                <div className="text-xs font-bold text-[#F7931A]">
                  ≈ {current.btc}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-left pt-3 border-t border-slate-700/80 text-xs">
                <div>
                  <div className="text-slate-400">Target Level:</div>
                  <div className="font-bold text-white">{current.name}</div>
                </div>
                <div>
                  <div className="text-slate-400">System ROI:</div>
                  <div className="font-bold text-emerald-400">{current.roi}</div>
                </div>
              </div>

              <button
                onClick={onOpenActivate}
                className="w-full py-3 bg-gradient-gold text-black font-extrabold text-xs sm:text-sm rounded-xl shadow-btc-glow hover:scale-[1.02] transition-transform"
              >
                ACTIVATE NOW
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
