import { useState, useRef } from "react";
import { Play, Maximize, Video, ShieldCheck, CheckCircle } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => console.log("Video error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="video-presentation" className="py-20 bg-[#090D16] relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#F7931A]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-bold text-[#10B981] uppercase tracking-wider">
            <Video className="w-4 h-4" />
            Complete System Walkthrough
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            1-9-90 <span className="text-gradient-gold">Video Masterclass Presentation</span>
          </h2>
          <p className="text-slate-300 text-base">
            Watch the full video demonstration showing how 1-9-90 operates with 2 businesses inside 1 single backoffice.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="max-w-4xl mx-auto relative rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#F7931A]/30 to-[#10B981]/20 border border-[#F7931A]/30 shadow-2xl shadow-black">
          
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/90 group">
            <video
              ref={videoRef}
              src="/images/video 1.mp4"
              poster="/images/image 1.jpeg"
              className="w-full h-full object-cover"
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Custom Overlay Play Button if paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity group-hover:bg-black/40"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-gold hover:shadow-btc-glow-lg text-black flex items-center justify-center transition-transform transform group-hover:scale-110 shadow-2xl">
                  <Play className="w-10 h-10 fill-black text-black ml-1" />
                </div>
                <p className="mt-4 text-sm font-extrabold text-white uppercase tracking-wider bg-black/70 px-4 py-1.5 rounded-full border border-white/20">
                  Click to Watch Presentation Video
                </p>
              </div>
            )}
          </div>

          {/* Bottom Bar inside frame */}
          <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified 1-9-90 Platform Presentation</span>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={togglePlay} className="hover:text-[#F7931A] transition-colors">
                {isPlaying ? "Pause Video" : "Play Video"}
              </button>
              <button onClick={handleFullscreen} className="hover:text-[#F7931A] flex items-center gap-1 transition-colors">
                <Maximize className="w-3.5 h-3.5" /> Fullscreen
              </button>
            </div>
          </div>

        </div>

        {/* Bullet Points below video */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#131A2B] border border-slate-800">
            <CheckCircle className="w-5 h-5 text-[#F7931A] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white">One Backoffice System</div>
              <div className="text-xs text-slate-400">Manage both Double X (294%) and Tetra X (1000%) in a single unified portal.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#131A2B] border border-slate-800">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white">Auto-Reinvestment Mechanics</div>
              <div className="text-xs text-slate-400">System continuously recycles initial capital to pay endless compounding rounds of earnings.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
