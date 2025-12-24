import Link from "next/link";
import { CheckCircle2, ArrowRight, Laptop, BrainCircuit, Beaker, Stethoscope, Smartphone } from "lucide-react";
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
        <div className="space-y-8 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#ccfbf1] text-[#0d9488] text-[12px] font-bold uppercase tracking-[0.1em]">
            Our Solution
          </span>
          
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-[#0f172a]">One Platform,</span> <br />
              <span className="bg-gradient-to-r from-[#21c6ba] to-[#2b89f5] bg-clip-text text-transparent">
                Complete Care
              </span>
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed max-w-xl">
              Healthstake brings together every stakeholder in the diabetes care journey into a unified, intelligent ecosystem. From patient self-monitoring to physician decision support—all powered by predictive AI.
            </p>
          </div>

          <ul className="space-y-4">
            {solutionFeatures.map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="bg-[#ccfbf1] p-1 rounded-full shrink-0">
                  <CheckCircle2 size={16} className="text-[#0d9488]" strokeWidth={3} />
                </div>
                <span className="text-[#475569] font-medium text-[16px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Link href="#" className="inline-flex items-center gap-2 text-[#0d9488] font-bold text-lg hover:gap-4 transition-all group">
            Explore the Platform <ArrowRight size={20} className="transition-transform" />
          </Link>
        </div>

        {/* RIGHT SIDE: CENTRAL HUB VISUALIZATION (EXACT MATCH) */}
        <div className="relative flex justify-center items-center h-[500px] lg:h-[550px]">
          
          {/* SVG CONNECTING LINES (Positioned behind nodes) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
             {/* Lines radiating from center 250,250 to node positions */}
             <line x1="250" y1="250" x2="380" y2="150" stroke="#36b7ff" strokeWidth="1.5" /> {/* Patient App */}
             <line x1="250" y1="250" x2="420" y2="300" stroke="#36b7ff" strokeWidth="1.5" /> {/* Nursing Portal */}
             <line x1="250" y1="250" x2="380" y2="440" stroke="#36b7ff" strokeWidth="1.5" /> {/* Doctor Module */}
             <line x1="250" y1="250" x2="160" y2="440" stroke="#36b7ff" strokeWidth="1.5" /> {/* Lab Integration */}
             <line x1="250" y1="250" x2="80" y2="250" stroke="#36b7ff" strokeWidth="1.5" />  {/* AI Engine */}
          </svg>
          
          {/* CENTER LOGO HUB */}
          <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-b from-[#21c6ba] to-[#2b89f5] flex items-center justify-center text-white shadow-2xl">
            <span className="text-xl md:text-2xl font-bold">Healthstake</span>
          </div>

          {/* CONNECTING NODES */}
          <Node icon={<Smartphone size={24} />} label="Patient App" className="top-12 right-12 md:right-16" />
          <Node icon={<Laptop size={24} />} label="Nursing Portal" className="top-1/2 -right-4 md:-right-8 -translate-y-1/2" />
          <Node icon={<Stethoscope size={24} />} label="Doctor Module" className="bottom-8 right-12 md:right-20" />
          <Node icon={<Beaker size={24} />} label="Lab Integration" className="bottom-8 left-12 md:left-20" />
          <Node icon={<BrainCircuit size={24} />} label="AI Engine" className="top-1/2 -left-4 md:-left-8 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}

function Node({ icon, label, className }: { icon: React.ReactNode; label: string; className: string }) {
  return (
    <div className={cn("absolute z-20 flex flex-col items-center gap-2", className)}>
      <div className="bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 text-[#0d9488] hover:scale-105 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-[12px] font-bold text-[#475569] whitespace-nowrap px-2">
        {label}
      </span>
    </div>
  );
}