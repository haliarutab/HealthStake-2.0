import React from "react";
import { Building2, Stethoscope, Beaker, Users, ArrowRight } from "lucide-react";

const sectors = [
  {
    title: "Healthcare Systems",
    desc: "Reduce readmissions, improve outcomes, and demonstrate value-based care metrics.",
    icon: <Building2 className="w-6 h-6 text-white" />,
    iconBg: "bg-[#00A99D]",
    tags: ["Population health management", "Cost reduction", "Quality reporting"],
    tagBg: "bg-[#E0F7F6]",
    tagText: "text-[#00A99D]",
    linkText: "Enterprise Solutions",
  },
  {
    title: "Physician Practices",
    desc: "Enhance patient care with AI-powered insights and streamlined workflows.",
    icon: <Stethoscope className="w-6 h-6 text-white" />,
    iconBg: "bg-[#2563EB]",
    tags: ["Clinical decision support", "Time savings", "Patient engagement"],
    tagBg: "bg-[#E0F2FE]",
    tagText: "text-[#2563EB]",
    linkText: "Practice Solutions",
  },
  {
    title: "Diagnostic Labs",
    desc: "Integrate seamlessly and become a valued partner in the care continuum.",
    icon: <Beaker className="w-6 h-6 text-white" />,
    iconBg: "bg-[#8B5CF6]",
    tags: ["API integration", "Result automation", "Care coordination"],
    tagBg: "bg-[#F3E8FF]",
    tagText: "text-[#8B5CF6]",
    linkText: "Lab Partnerships",
  },
  {
    title: "Investors & Partners",
    desc: "Join us in transforming diabetes care at scale with proven technology.",
    icon: <Users className="w-6 h-6 text-white" />,
    iconBg: "bg-[#6366F1]",
    tags: ["Market leadership", "Proven traction", "Growth potential"],
    tagBg: "bg-[#EEF2FF]",
    tagText: "text-[#6366F1]",
    linkText: "Partner With Us",
  },
];

export default function HealthcareLeaders() {
  return (
    <section className="bg-[#F8FBFF] py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="bg-[#E0F2FE] text-[#2563EB] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-8">
            Who We Serve
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A99D] to-[#2563EB]">Healthcare Leaders</span>
          </h2>
          <p className="text-gray-500 text-sm mt-6 max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you&apos;re a hospital system, private practice, laboratory, or investor—Healthstake delivers tailored solutions for your unique needs.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((sector, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className={`${sector.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                {sector.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-black text-[#0F172A] mb-4">{sector.title}</h3>
              <p className="text-gray-400 text-[15px] font-medium leading-relaxed mb-8">
                {sector.desc}
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-3 mb-10">
                {sector.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className={`${sector.tagBg} ${sector.tagText} text-[11px] font-bold px-4 py-1.5 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <button className="flex items-center gap-2 text-[#0F172A] text-sm font-black hover:gap-3 transition-all mt-auto group">
                {sector.linkText} 
                <ArrowRight className={`w-4 h-4 ${sector.tagText} group-hover:translate-x-1 transition-transform`} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}