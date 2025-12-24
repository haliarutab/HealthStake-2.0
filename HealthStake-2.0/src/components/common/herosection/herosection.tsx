import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, TrendingUp, Activity, Play } from "lucide-react";
import { CrossGridPattern } from "@/components/ui/cross-grid-pattern";

export default function Hero() {
  return (
    
    <section className="relative min-h-screen bg-[#08121d] text-white overflow-hidden flex items-center pt-24 md:pt-32 pb-20">
      <CrossGridPattern />

      {/* 2. THE ATMOSPHERIC RADIAL GLOWS */}
      <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] bg-[#122c44] blur-[160px] rounded-full opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0f3443] blur-[140px] rounded-full opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#112a35] border border-cyan-500/30 text-[#21c6ba] text-[9px] md:text-[11px] font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              Now with AI-Powered Predictions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[76px] font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-white">
              Transforming <br />
              <span className="bg-gradient-to-r from-[#24d9c7] via-[#36b7ff] to-[#4c86f9] bg-clip-text text-transparent">
                Diabetes Care
              </span> <br className="hidden sm:block" />
              Through Intelligence
            </h1>

            <p className="text-slate-400 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal opacity-80">
              An end-to-end digital platform connecting patients, nurses, doctors,
              and labs with AI-driven insights for proactive diabetes management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <Button
                asChild
                className="bg-gradient-to-r from-[#21c6ba] to-[#2b89f5] hover:opacity-90 text-white rounded-full w-full sm:w-[200px] md:w-[240px] py-6 md:py-7 text-base md:text-lg shadow-lg shadow-blue-500/20 transition-all hover:translate-y-[-2px]"
              >
                <Link href="#" className="flex items-center justify-center gap-3">
                  Get Started <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                className="bg-white hover:opacity-90 text-[#21c6ba] rounded-full w-full sm:w-[200px] md:w-[240px] py-6 md:py-7 text-base md:text-lg transition-all hover:translate-y-[-2px]"
              >
                <Link href="#" className="flex items-center justify-center gap-3">
                  <Play size={18} /> Watch Demo
                </Link>
              </Button>
            </div>

            <div className="pt-8 md:pt-12">
              <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4 md:mb-6">
                Trusted by leading healthcare providers
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 text-slate-400 font-bold text-lg md:text-xl opacity-50">
                <span>MedCare+</span>
                <span>HealthFirst</span>
                <span>DiaClinics</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: DASHBOARD */}
          <div className="relative mt-8 lg:mt-0 px-4 sm:px-0">
            <div className="absolute inset-0 bg-blue-500/10 blur-[60px] md:blur-[80px] rounded-full" />
            <div className="relative z-10 bg-[#122131]/80 border border-white/10 rounded-[30px] md:rounded-[45px] p-6 md:p-10 shadow-2xl backdrop-blur-md max-w-[500px] mx-auto">
              {/* Dashboard Internal Content */}
              <div className="flex justify-between items-center mb-6 md:mb-10">
                <div className="space-y-1">
                  <p className="text-slate-500 text-[10px] md:text-xs">Good Morning</p>
                  <h3 className="text-lg md:text-2xl font-bold tracking-tight text-white">Patient Dashboard</h3>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-[#34d399] text-[10px] md:text-sm font-semibold bg-[#34d399]/5 px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                  <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399]" />
                  Connected
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-5 mb-6 md:mb-10">
                <div className="bg-[#182c3f] rounded-[18px] md:rounded-[28px] p-3 md:p-6 h-24 md:h-36 flex flex-col justify-end">
                  <p className="text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-center sm:text-left">mg/dL</p>
                </div>
                <div className="bg-[#182c3f] rounded-[18px] md:rounded-[28px] p-3 md:p-6 h-24 md:h-36 flex flex-col justify-between items-center sm:items-start">
                  <Heart className="text-pink-500 fill-pink-500/20 w-4 h-4 md:w-[22px] md:h-[22px]" />
                  <div>
                    <div className="text-xl md:text-3xl font-bold text-white">72</div>
                    <p className="text-slate-500 text-[8px] md:text-[10px] font-bold uppercase">bpm</p>
                  </div>
                </div>
                <div className="bg-[#182c3f] rounded-[18px] md:rounded-[28px] p-3 md:p-6 h-24 md:h-36 flex flex-col justify-between items-center sm:items-start">
                  <TrendingUp className="text-[#36b7ff] w-4 h-4 md:w-[22px] md:h-[22px]" />
                  <div>
                    <div className="text-xl md:text-3xl font-bold text-white">6.2</div>
                    <p className="text-slate-500 text-[8px] md:text-[10px] font-bold uppercase">%</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0b1724] rounded-[20px] md:rounded-[35px] p-4 md:p-8 h-32 md:h-52 flex items-end justify-between gap-1 md:gap-2 border border-white/5">
                {[45, 75, 50, 85, 60, 70, 65, 90, 55, 80, 70, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-[#21c6ba] rounded-t-[2px] md:rounded-t-[3px] shadow-[0_0_15px_rgba(29,187,180,0.2)]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* Floating Element 1 - In Range */}
              <div className="absolute -left-4 sm:-left-12 top-20 sm:top-28 bg-white rounded-[20px] sm:rounded-[28px] p-3 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-2xl scale-75 sm:scale-100 origin-right sm:origin-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-emerald-50 rounded-lg sm:rounded-2xl flex items-center justify-center">
                  <Activity className="text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-slate-900 font-extrabold text-[12px] sm:text-[15px] leading-tight">In Range</p>
                  <p className="text-emerald-500 font-bold text-[10px] sm:text-[13px]">92% today</p>
                </div>
              </div>

              {/* Floating Element 2 - Prediction */}
              <div className="absolute -right-2 sm:-right-4 -bottom-4 bg-gradient-to-r from-[#21c6ba] to-[#2b89f5] p-4 sm:p-6 rounded-[20px] sm:rounded-[28px] shadow-2xl scale-75 sm:scale-100 origin-left sm:origin-center">
                <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] font-bold text-white/90 mb-0.5 sm:mb-1">AI Prediction</p>
                <p className="text-base sm:text-xl font-black text-white">Low Risk</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL TO EXPLORE */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 z-20 [animation:bounce_3s_infinite]">
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
          Scroll
        </span>
        <div className="w-[18px] h-[30px] md:w-[22px] md:h-[35px] border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 md:w-1.5 md:h-1.5 bg-[#21c6ba] rounded-full animate-pulse [animation:scroll_4s_infinite] shadow-[0_0_8px_#21c6ba]" />
        </div>
        <style jsx>{`
          @keyframes scroll {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(10px); opacity: 0.3; }
          }
        `}</style>
      </div>
    </section>
  );
}