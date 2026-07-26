import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";

interface CallToActionProps {
  onOpenActivate: () => void;
}

export default function CallToAction({ onOpenActivate }: CallToActionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#090D16] via-[#101728] to-[#090D16] relative overflow-hidden">
      {/* Background ambient radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F7931A]/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7931A]/15 border border-[#F7931A]/40 text-xs font-extrabold text-[#F7931A] uppercase tracking-widest shadow-lg">
          START YOUR BITCOIN WEALTH SPREE TODAY
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight">
          WARM WELCOME TO <br />
          <span className="text-gradient-gold">NON-STOP MULTIPLYING OF WEALTH</span> 💰💸
        </h2>

        <p className="text-xl sm:text-2xl text-slate-200 font-semibold max-w-3xl mx-auto">
          WELCOME TO <span className="text-[#F7931A] font-extrabold">ENDLESS POSSIBILITIES</span> 🔥🔥🔥
        </p>

        <div className="p-6 rounded-3xl bg-[#131C30]/90 border border-[#F7931A]/30 max-w-2xl mx-auto space-y-3 backdrop-blur-md shadow-2xl">
          <p className="text-lg font-bold text-white flex items-center justify-center gap-2">
            <span>💰💰</span>
            <span>It's time to accumulate Bitcoin!</span>
          </p>
          <p className="text-sm text-slate-300">
            1-9-90 has made it easy for everyone.... so let's crush our goals.
          </p>
          <div className="pt-2 text-xs font-extrabold text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-2 leading-none">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>One-Time Entry • Earn For Life</span>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenActivate}
            className="w-full sm:w-auto px-8 py-4.5 bg-gradient-gold hover:shadow-btc-glow-lg text-black font-extrabold text-base rounded-2xl flex items-center justify-center gap-2.5 transition-transform hover:scale-105 active:scale-95 shadow-2xl"
          >
            <Zap className="w-5 h-5 fill-black text-black" />
            GET STARTED NOW
          </button>

          <a
            href="https://wa.me/2347068886985?text=hi%20please%20I%20want%20to%20know%20more"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4.5 bg-gradient-gold hover:shadow-btc-glow text-black font-extrabold text-base rounded-2xl flex items-center justify-center gap-2.5 transition-transform hover:scale-105 active:scale-95 shadow-2xl"
          >
            <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Learn More
          </a>

          <a
            href="#audio-presentation"
            className="w-full sm:w-auto px-7 py-4.5 bg-[#172238] hover:bg-[#202E4A] border border-[#F7931A]/30 text-white font-bold text-base rounded-2xl flex items-center justify-center gap-2 transition-colors"
          >
            Listen to Voicenote
            <ArrowRight className="w-5 h-5 text-[#F7931A]" />
          </a>
        </div>

      </div>
    </section>
  );
}
