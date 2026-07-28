import { ShieldCheck, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenActivate: () => void;
}

export default function Footer({ onOpenActivate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060911] border-t border-slate-800 text-slate-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Row: Brand & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpeg"
                alt="1-9-90 Logo"
                className="w-12 h-12 rounded-full border-2 border-[#F7931A] object-cover"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
              <div>
                <span className="font-display text-xl sm:text-2xl font-extrabold text-white whitespace-nowrap">Bitcoin Earners Community</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              1-9-90 is a revolutionary Bitcoin marketing platform. Activate your backoffice with 0.001 BTC one-time and unlock Double X (294%) and Tetra X (1000% across 9 levels).
            </p>

            <div className="text-xs text-[#F7931A] font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Lifetime Access • Instant Direct Wallet Payouts</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-[#F7931A] transition-colors">Overview</a></li>
              <li><a href="#audio-presentation" className="hover:text-[#F7931A] transition-colors">Voicenote Presentation</a></li>
              <li><a href="#video-presentation" className="hover:text-[#F7931A] transition-colors">Video Masterclass</a></li>
              <li><a href="#double-x" className="hover:text-[#F7931A] transition-colors">Business #1: Double X (294%)</a></li>
              <li><a href="#tetra-x" className="hover:text-[#F7931A] transition-colors">Business #2: Tetra X ($10M+)</a></li>
              <li><a href="#faq" className="hover:text-[#F7931A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Backoffice Quick Action */}
          <div className="md:col-span-4 p-6 rounded-2xl bg-[#0E1525] border border-[#F7931A]/30 space-y-3">
            <h4 className="text-sm font-extrabold text-white">One-Time Activation</h4>
            <div className="text-2xl font-extrabold text-[#F7931A]">0.001 BTC</div>
            <p className="text-xs text-slate-400">
              Start accumulating Bitcoin today with 2 powerful businesses inside 1 single backoffice.
            </p>
            <button
              onClick={onOpenActivate}
              className="w-full py-3 bg-gradient-gold text-black font-extrabold text-xs rounded-xl shadow-btc-glow hover:scale-[1.02] transition-transform"
            >
              ACTIVATE NOW
            </button>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-[#F7931A] font-bold">Disclaimer: This is not an investment platform.</p>
            <p>© {new Date().getFullYear()} 1-9-90. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-[#F7931A] transition-colors">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
