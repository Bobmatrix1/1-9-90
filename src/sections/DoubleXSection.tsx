import { RefreshCw, DollarSign, CheckCircle2, ArrowRight, Zap } from "lucide-react";

interface DoubleXProps {
  onOpenActivate: () => void;
}

export default function DoubleXSection({ onOpenActivate }: DoubleXProps) {
  return (
    <section id="double-x" className="py-24 bg-[#0C111D] relative overflow-hidden border-t border-[#F7931A]/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#F7931A]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7931A]/10 border border-[#F7931A]/30 text-xs font-bold text-[#F7931A] uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            BUSINESS #1 IN BACKOFFICE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            DOUBLE X <span className="text-gradient-gold">294% RETURNS</span> ENGINE
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Start with <span className="text-[#F7931A] font-extrabold">0.001 BTC</span> one-time activation. The system continuously spins out nonstop payouts repeatedly!
          </p>
        </div>

        {/* 2 Step Double X Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 mb-16">
          
          {/* Card 1: 0.001 BTC Entry */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#131B2D] to-[#0E1524] border border-[#F7931A]/30 hover:border-[#F7931A] transition-all hover:shadow-btc-glow group">
            <div className="w-14 h-14 rounded-2xl bg-[#F7931A]/15 border border-[#F7931A]/30 text-[#F7931A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <DollarSign className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold text-[#F7931A] uppercase tracking-wider bg-[#F7931A]/10 px-2.5 py-1 rounded">
              STEP 1: ACTIVATION
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-4 mb-2">
              One-Time Entry (0.001 BTC)
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Everyone starts from the first business <span className="text-white font-bold">DOUBLE X</span> with 0.001 BTC. No monthly subs or hidden costs.
            </p>
          </div>

          {/* Card 2: 294% Payout */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#131B2D] to-[#0E1524] border border-emerald-500/30 hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/10 group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <RefreshCw className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded">
              STEP 2: REPEATED PAYOUTS
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-4 mb-2">
              294% Returns
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Pays <span className="text-emerald-400 font-extrabold">294%</span> repeatedly as the algorithm automatically reinvests your initial capital for non-stop passive earnings.
            </p>
          </div>

        </div>

        {/* Double X Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#17233B] via-[#1A2845] to-[#121B2F] border border-[#F7931A]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F7931A] bg-[#F7931A]/10 px-3 py-1 rounded-full border border-[#F7931A]/30">
              <CheckCircle2 className="w-4 h-4" /> Ready for Business #2 Activation?
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Use Double X Profits To Activate TETRA X!
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              From the income made from DOUBLE X, you easily activate the 2nd Business <span className="text-emerald-400 font-extrabold">TETRA X</span>, which pays <span className="text-white font-extrabold">1000% returns across 9 levels worth over $10 MILLION DOLLARS!</span>
            </p>
          </div>

          <button
            onClick={onOpenActivate}
            className="px-8 py-4 bg-gradient-gold hover:shadow-btc-glow text-black font-extrabold text-base rounded-xl flex items-center gap-2 shrink-0 transition-transform hover:scale-105 active:scale-95 shadow-xl"
          >
            Start Double X
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
