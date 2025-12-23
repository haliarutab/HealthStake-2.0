import { AlertCircle, Users, Clock, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ChallengeSection() {
  const stats = [
    {
      icon: <AlertCircle className="text-[#ef4444]" size={20} />,
      value: "463M+",
      label: "People with Diabetes",
      description: "Diabetes is reaching epidemic proportions globally, demanding scalable care solutions.",
      iconBg: "bg-[#fef2f2]",
    },
    {
      icon: <Users className="text-[#334155]" size={20} />,
      value: "50%",
      label: "Undiagnosed Cases",
      description: "Half of all cases go undiagnosed until complications arise, increasing treatment costs.",
      iconBg: "bg-[#f1f5f9]",
    },
    {
      icon: <Clock className="text-[#f87171]" size={20} />,
      value: "4.2M",
      label: "Deaths Annually",
      description: "Preventable deaths occur due to late intervention and fragmented care pathways.",
      iconBg: "bg-[#fef2f2]",
    },
    {
      icon: <TrendingDown className="text-[#fb923c]" size={20} />,
      value: "$760B",
      label: "Global Healthcare Cost",
      description: "Diabetes-related expenditure is straining healthcare systems worldwide.",
      iconBg: "bg-[#fff7ed]",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Main White Container */}
       
          
          {/* Exact Decorative Corner Accents from Image */}
          <div className="absolute top-10 left-10 w-24 h-24 border-l-[3px] border-t-[3px] border-[#cbd5e1] rounded-tl-[30px] opacity-60" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border-r-[3px] border-b-[3px] border-[#1e293b] rounded-br-[30px] opacity-80" />

          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <span className="inline-block px-5 py-1.5 rounded-full bg-[#fee2e2] text-[#e11d48] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              The Challenge
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight">
              Diabetes Care is <span className="text-[#e11d48]">Broken</span>
            </h2>
            <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
              Traditional diabetes management is fragmented, reactive, and fails to leverage the power of real-time data and predictive intelligence.
            </p>
          </div>

          {/* Grid of Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white border border-[#f1f5f9] rounded-[24px] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className={cn(stat.iconBg, "w-11 h-11 rounded-xl flex items-center justify-center mb-8")}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#e11d48] mb-1">{stat.value}</div>
                <div className="text-[15px] font-bold text-[#1e293b] mb-3">{stat.label}</div>
                <p className="text-[#94a3b8] text-[13px] leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Button */}
          <div className="flex justify-center mt-16 relative z-10">
            <button className="bg-[#0f172a] text-white px-8 py-4 rounded-full flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg group">
              <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981] group-hover:scale-125 transition-transform" />
              There's a better way forward
            </button>
          </div>
        
      </div>
    </section>
  );
}