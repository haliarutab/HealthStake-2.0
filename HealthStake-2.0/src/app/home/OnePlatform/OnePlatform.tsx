import Link from "next/link";
import { CheckCircle2, ArrowRight, Laptop, Activity, Beaker, Stethoscope, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SolutionSection() {
  const solutionFeatures = [
    "Seamless data flow between patients and care teams",
    "AI-powered risk stratification and early warnings",
    "Integrated lab results and medication tracking",
    "Evidence-based insights for clinical decisions",
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
        
        {/* LEFT SIDE: CONTENT */}
        <div className="space-y-10 relative z-10">
          <span className="inline-block px-5 py-2 rounded-full bg-[#ccfbf1] text-[#0d9488] text-[12px] font-bold uppercase tracking-[0.2em]">
            Our Solution
          </span>
          
          <div className="space-y-6">
            {/* EXACT GRADIENT TEXT EFFECT */}
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-[#0f172a]">One Platform,</span> <br />
              <span className="bg-gradient-to-r from-[#21c6ba] via-[#36b7ff] to-[#4c86f9] bg-clip-text text-transparent">
                Complete Care
              </span>
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed max-w-xl">
              Healthstake brings together every stakeholder in the diabetes care journey into a unified, intelligent ecosystem. From patient self-monitoring to physician decision support—all powered by predictive AI.
            </p>
          </div>

          <ul className="space-y-5">
            {solutionFeatures.map((item, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="bg-[#ccfbf1] p-1.5 rounded-full group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={18} className="text-[#0d9488]" />
                </div>
                <span className="text-[#475569] font-medium text-[16px] group-hover:text-[#0f172a] transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Link href="#" className="inline-flex items-center gap-3 text-[#0d9488] font-bold text-lg hover:underline transition-all">
            Explore the Platform <ArrowRight size={20} />
          </Link>
        </div>

        {/* RIGHT SIDE: CENTRAL HUB VISUALIZATION */}
        <div className="relative flex justify-center items-center h-[500px] lg:h-[600px]">
          {/* Animated Glow Backdrop */}
          <div className="absolute w-[300px] h-[300px] bg-[#2b89f5]/10 blur-[100px] rounded-full animate-pulse" />
          
          {/* CENTER LOGO HUB */}
          <div className="relative z-20 w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#21c6ba] via-[#2b89f5] to-[#4c86f9] flex items-center justify-center text-white shadow-[0_0_50px_rgba(43,137,245,0.3)]">
            <span className="text-xl md:text-2xl font-bold tracking-tight">Healthstake</span>
          </div>

          {/* CONNECTING NODES (Floating Bubbles) */}
          <Node icon={<Smartphone size={22} />} label="Patient App" className="-top-12 left-1/2 -translate-x-1/2" />
          <Node icon={<Laptop size={22} />} label="Nursing Portal" className="top-1/4 -right-12 md:-right-16" />
          <Node icon={<Stethoscope size={22} />} label="Doctor Module" className="bottom-0 right-4 md:right-8" />
          <Node icon={<Beaker size={22} />} label="Lab Integration" className="bottom-0 left-4 md:left-8" />
          <Node icon={<Activity size={22} />} label="AI Engine" className="top-1/4 -left-12 md:-left-16" />

          {/* SVG CONNECTING LINES */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-10" viewBox="0 0 400 400">
             <line x1="200" y1="200" x2="200" y2="40" stroke="#2b89f5" strokeWidth="2" strokeDasharray="6,4" />
             <line x1="200" y1="200" x2="360" y2="120" stroke="#2b89f5" strokeWidth="2" strokeDasharray="6,4" />
             <line x1="200" y1="200" x2="320" y2="340" stroke="#2b89f5" strokeWidth="2" strokeDasharray="6,4" />
             <line x1="200" y1="200" x2="80" y2="340" stroke="#2b89f5" strokeWidth="2" strokeDasharray="6,4" />
             <line x1="200" y1="200" x2="40" y2="120" stroke="#2b89f5" strokeWidth="2" strokeDasharray="6,4" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function Node({ icon, label, className }: { icon: React.ReactNode; label: string; className: string }) {
  return (
    <div className={cn("absolute z-20 flex flex-col items-center gap-3 animate-pulse duration-[4000ms]", className)}>
      <div className="bg-white p-5 rounded-2xl shadow-xl border border-slate-100 text-[#0d9488] hover:scale-110 hover:shadow-2xl transition-all cursor-pointer">
        {icon}
      </div>
      <span className="text-[13px] font-bold text-[#475569] whitespace-nowrap bg-white/90 px-3 py-1 rounded-full backdrop-blur-md border border-slate-100 shadow-sm">
        {label}
      </span>
    </div>
  );
}