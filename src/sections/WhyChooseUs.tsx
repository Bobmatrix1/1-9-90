import { ShieldCheck, Zap, Repeat, Wallet, Users2, Lock, ArrowUpRight } from "lucide-react";

interface WhyChooseUsProps {
  onOpenActivate: () => void;
}

export default function WhyChooseUs({ onOpenActivate }: WhyChooseUsProps) {
  const features = [
    {
      icon: ShieldCheck,
      title: "One-Time Entry",
      desc: "No monthly renewals or subscription traps. Pay once and earn lifetime access to both backoffice engines.",
    },
    {
      icon: Zap,
      title: "Double X 294% Instant Engine",
      desc: "Turn your 0.001 BTC capital into 294% payouts repeatedly with automatic reinvestment.",
    },
    {
      icon: Repeat,
      title: "Tetra X $10 Million 9-Level Matrix",
      desc: "Unlock 1000% returns on 9 matrix levels with auto-reentry paying multiple rounds of $10M+ over and over.",
    },
    {
      icon: Wallet,
      title: "Instant Direct BTC Payouts",
      desc: "Earnings drop directly into your personal Bitcoin wallet address without delay or withdrawal limits.",
    },
    {
      icon: Users2,
      title: "Simple Team Duplication",
      desc: "All you need is to bring 2 partners for Double X and 4 partners for Tetra X and teach them to do the same.",
    },
    {
      icon: Lock,
      title: "Decentralized Backoffice Security",
      desc: "Built on high-security smart contracts ensuring 100% transparent and automated profit distribution.",
    },
  ];

  return (
    <section className="py-24 bg-[#0C1220] border-t border-[#F7931A]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-extrabold text-[#F7931A] uppercase tracking-widest bg-[#F7931A]/10 px-3 py-1 rounded-full border border-[#F7931A]/30">
            WHY 1-9-90 STANDS OUT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Built For Non-Stop <span className="text-gradient-gold">Bitcoin Accumulation</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Engineered to provide maximum leverage, complete security, and continuous automated passive earnings.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#131B2E] to-[#0E1424] border border-slate-800 hover:border-[#F7931A]/50 transition-all hover:shadow-btc-glow group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F7931A]/15 text-[#F7931A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-[#F7931A]/30">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#F7931A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenActivate}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-black font-extrabold text-base rounded-xl shadow-btc-glow hover:scale-105 transition-transform"
          >
            JOIN THE 1-9-90 BITCOIN REVOLUTION NOW
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
