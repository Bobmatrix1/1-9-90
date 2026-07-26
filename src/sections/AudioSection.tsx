import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Download, Mic, CheckCircle2 } from "lucide-react";

export default function AudioSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log("Audio play error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      setIsMuted(val === 0);
    }
  };

  const changePlaybackRate = () => {
    const rates = [1, 1.25, 1.5, 2];
    const nextIndex = (rates.indexOf(playbackRate) + 1) % rates.length;
    const newRate = rates[nextIndex];
    setPlaybackRate(newRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section id="audio-presentation" className="py-20 bg-[#0C1220] border-y border-[#F7931A]/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F7931A]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7931A]/10 border border-[#F7931A]/30 text-xs font-bold text-[#F7931A] uppercase tracking-wider">
            <Mic className="w-4 h-4 text-[#F7931A]" />
            Official Audio Breakdown
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Latest <span className="text-gradient-gold">1-9-90 MARKETING BITCOIN EARNERS</span> Voicenote Presentation
          </h2>
          <p className="text-slate-300 text-base">
            Listen directly to the official voicenote explaining how members multiply their Bitcoin with 0.001 BTC initial capital!
          </p>
        </div>

        {/* Audio Player Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141C30] to-[#0E1525] border border-[#F7931A]/30 shadow-2xl shadow-black/80 space-y-6">
          
          <audio ref={audioRef} src="/images/audio 1.ogg" preload="metadata" />

          <div className="flex flex-col md:flex-row items-center gap-6 justify-between border-b border-slate-800 pb-6">
            
            {/* Voicenote Avatar & Title */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#F7931A] shadow-lg">
                <img
                  src="/images/logo.jpeg"
                  alt="1-9-90 Presentation"
                  className="w-full h-full object-cover rounded-full aspect-square"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
                {isPlaying && (
                  <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                )}
              </div>

              <div className="space-y-1 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F7931A]/10 border border-[#F7931A]/30 text-[10px] font-extrabold text-[#F7931A] uppercase tracking-wider mb-0.5">
                  High Impact Marketing Voicenote
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  1-9-90 Bitcoin Earners Master Strategy
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  Official Audio Breakdown • Double X & Tetra X Blueprint
                </p>
              </div>
            </div>

            {/* Play Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-gradient-gold hover:shadow-btc-glow text-black flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-black" />
                ) : (
                  <Play className="w-8 h-8 fill-black ml-1" />
                )}
              </button>

              <button
                onClick={changePlaybackRate}
                className="px-3 py-1.5 rounded-lg bg-[#1D2942] border border-slate-700 text-xs font-bold text-slate-300 hover:text-white hover:border-[#F7931A]/40 transition-colors"
                title="Change speed"
              >
                {playbackRate}x
              </button>
            </div>

          </div>

          {/* Animated Waveform Visualizer simulation */}
          <div className="flex items-center justify-center gap-1 h-12 py-2">
            {[30, 45, 75, 90, 60, 40, 80, 100, 70, 50, 85, 95, 65, 40, 70, 90, 55, 35, 60, 80, 100, 65, 45, 80, 90, 60, 40, 70].map((height, i) => (
              <div
                key={i}
                className={`w-1.5 rounded-full transition-all duration-300 ${
                  isPlaying ? "bg-gradient-to-t from-[#F7931A] to-[#FFB800] animate-pulse" : "bg-slate-700"
                }`}
                style={{
                  height: isPlaying ? `${Math.max(15, (height * (i % 3 === 0 ? 1 : 0.7)))}%` : "20%",
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>

          {/* Time Scrubber */}
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#F7931A]"
            />
            <div className="flex justify-between text-xs font-medium text-slate-400">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Bottom Audio Controls & Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
            
            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button onClick={toggleMute} className="text-slate-400 hover:text-[#F7931A] transition-colors">
                {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 sm:w-24 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#F7931A]"
              />
            </div>

            {/* Audio Download Link */}
            <a
              href="/images/audio 1.ogg"
              download="1-9-90_Marketing_Voicenote.ogg"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#F7931A] hover:underline"
            >
              <Download className="w-4 h-4" /> Download Presentation Audio
            </a>
          </div>

        </div>

        {/* Audio Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <div className="p-5 rounded-2xl bg-[#12192A] border border-slate-800 space-y-2">
            <CheckCircle2 className="w-6 h-6 text-[#F7931A]" />
            <h4 className="text-base font-bold text-white">0.001 BTC One-Time Entry</h4>
            <p className="text-xs text-slate-400">
              No monthly renewal fees, earn for life.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#12192A] border border-slate-800 space-y-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            <h4 className="text-base font-bold text-white">Double X 294% Power</h4>
            <p className="text-xs text-slate-400">
              Generates 294% payouts repeatedly as system auto reinvests initial capital.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#12192A] border border-slate-800 space-y-2">
            <CheckCircle2 className="w-6 h-6 text-[#F7931A]" />
            <h4 className="text-base font-bold text-white">Tetra X 1000% Matrix</h4>
            <p className="text-xs text-slate-400">
              Unlocks 9 powerful levels with payouts compounding up to over $10 Million Dollars.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
