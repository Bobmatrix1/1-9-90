import { useState, useEffect } from "react";
import { X, Zap, Copy, Check, ShieldCheck, QrCode, ArrowRight } from "lucide-react";

interface ActivationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ActivationModal({ isOpen, onClose }: ActivationModalProps) {
  const [step, setStep] = useState(1);
  const [walletAddress, setWalletAddress] = useState("");
  const [sponsorId, setSponsorId] = useState("");
  const [copied, setCopied] = useState(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen) return null;

  const btcDepositAddress = "bc1q990btc1990multiplicationenginex990";
  const whatsappUrl = "https://wa.me/2347068886985?text=hi%20please%20i'm%20interested%20,would%20like%20to%20know%20more";

  const handleCopy = () => {
    navigator.clipboard.writeText(btcDepositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulateActivation = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-xl bg-[#0E1525] rounded-3xl border border-[#F7931A]/40 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-[#17223A] to-[#11182A] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold text-black flex items-center justify-center font-extrabold text-lg shadow-btc-glow">
              <Zap className="w-5 h-5 fill-black text-black" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">1-9-90 Backoffice Activation</h3>
              <p className="text-xs text-[#F7931A]">One-Time 0.001 BTC • Earn For Life</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-800 pb-4">
            <span className={step >= 1 ? "text-[#F7931A]" : ""}>1. System Plan</span>
            <span className={step >= 2 ? "text-[#F7931A]" : ""}>2. Bitcoin Payment</span>
            <span className={step >= 3 ? "text-emerald-400" : ""}>3. Backoffice Live</span>
          </div>

          {step === 1 && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-[#141C30] border border-[#F7931A]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">One-Time Capital</span>
                  <span className="text-sm font-bold text-emerald-400">Lifetime Earnings</span>
                </div>
                <div className="text-2xl font-extrabold text-white">0.001 BTC</div>
                <p className="text-xs text-slate-300">
                  Includes both <span className="text-[#F7931A] font-bold">DOUBLE X (294%)</span> and <span className="text-emerald-400 font-bold">TETRA X (1000% across 9 levels)</span>.
                </p>
              </div>

              <form onSubmit={() => setStep(2)} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Bitcoin Wallet Address (For Instant Payouts)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. bc1q..."
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#090E18] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F7931A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Sponsor / Referrer ID (Optional)</label>
                  <input
                    type="text"
                    placeholder="Enter sponsor code if available"
                    value={sponsorId}
                    onChange={(e) => setSponsorId(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#090E18] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F7931A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-gold text-black font-extrabold text-sm rounded-xl shadow-btc-glow flex items-center justify-center gap-2"
                >
                  PROCEED TO ACTIVATION PAYMENT
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 text-center">
              <div className="p-4 rounded-2xl bg-[#121A2D] border border-slate-800 space-y-3">
                <p className="text-xs text-slate-300 font-semibold">
                  Send exactly <span className="text-[#F7931A] font-extrabold">0.001 BTC</span> to the official deposit address below:
                </p>

                {/* Simulated QR Code box */}
                <div className="w-36 h-36 mx-auto bg-white p-2 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-full h-full border-2 border-black p-1 flex flex-col items-center justify-center text-black">
                    <QrCode className="w-20 h-20 text-black" />
                    <span className="text-[9px] font-extrabold">0.001 BTC QR</span>
                  </div>
                </div>

                <div className="p-3 bg-[#090E18] rounded-xl border border-slate-700 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#F7931A] truncate mr-2">{btcDepositAddress}</span>
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-lg bg-[#F7931A] text-black font-bold flex items-center gap-1 shrink-0 text-xs"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl"
                >
                  Back
                </button>
                <button
                  onClick={handleSimulateActivation}
                  className="w-2/3 py-3 bg-gradient-gold text-black font-extrabold text-xs rounded-xl shadow-btc-glow"
                >
                  I HAVE SENT 0.001 BTC
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-white">Backoffice Successfully Activated! 🎉</h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                Welcome to 1-9-90! Your Bitcoin wallet address (<span className="text-[#F7931A] font-mono">{walletAddress || "Registered Wallet"}</span>) is synced. Start referring partners to spin out 294% and 1000% returns non-stop!
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-gradient-gold text-black font-extrabold text-sm rounded-xl shadow-btc-glow"
              >
                ENTER MY BACKOFFICE DASHBOARD
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
