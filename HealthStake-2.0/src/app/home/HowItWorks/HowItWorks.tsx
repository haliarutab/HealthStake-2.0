import { UserPlus, Tablet, BrainCircuit, HeartPulse } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Patient Enrollment",
      desc: "Healthcare provider enrolls patients into the platform with seamless EHR integration and consent management.",
      icon: <UserPlus className="w-6 h-6 text-white" />,
      color: "bg-[#00A99D]", // Matches Image
      borderColor: "border-b-[#00A99D]",
    },
    {
      id: "02",
      title: "Data Collection",
      desc: "Patients log vitals, connect CGM devices, and track medications through our intuitive mobile app.",
      icon: <Tablet className="w-6 h-6 text-white" />,
      color: "bg-[#2563EB]", // Matches Image
      borderColor: "border-b-[#2563EB]",
    },
    {
      id: "03",
      title: "AI Analysis",
      desc: "Our AI engine continuously processes data, identifies patterns, and generates predictive insights.",
      icon: <BrainCircuit className="w-6 h-6 text-white" />,
      color: "bg-[#6366F1]", // Matches Image
      borderColor: "border-b-[#6366F1]",
    },
    {
      id: "04",
      title: "Care Optimization",
      desc: "Care teams receive actionable alerts and recommendations to deliver proactive, personalized care.",
      icon: <HeartPulse className="w-6 h-6 text-white" />,
      color: "bg-[#EF4444]", // Matches Image
      borderColor: "border-b-[#EF4444]",
    },
  ];

  return (
    <section className="bg-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section with Exact Gradient Effects */}
        <div className="text-center mb-16">
          <span className="bg-[#E0F2FE] text-[#2563EB] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-8">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight">
            Simple to Deploy, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A99D] to-[#2563EB] ml-3">
              Powerful in
            </span> 
            <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#6366F1]">
              Impact
            </span>
          </h2>
          <p className="text-gray-500 text-sm mt-6 max-w-2xl mx-auto font-medium leading-relaxed">
            Get started in days, not months. Our platform integrates seamlessly with existing workflows 
            while delivering immediate value.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Horizontal Connecting Line with Gradient Opacity */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-[#00A99D] via-[#2563EB] to-[#EF4444] opacity-20 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="relative group">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-6 bg-[#E0F2FE] text-[#2563EB] text-[10px] font-black px-3 py-1 rounded-full border-2 border-white shadow-sm z-20">
                  {step.id}
                </div>
                
                {/* Card Content with Subtle Hover Gradient Shadow */}
                <div className={`bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-b-[4px] ${step.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/50 h-full relative overflow-hidden`}>
                  <div className={`${step.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-black text-[#0F172A] mb-4">{step.title}</h4>
                  <p className="text-[13px] text-gray-400 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Footer - Matches Image 13/14 Dark Theme */}
        <div className="mt-20 max-w-4xl mx-auto bg-[#0F172A] rounded-[2.5rem] p-8 md:px-12 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center shadow-2xl">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Average Time to Go-Live</p>
            <p className="text-white text-3xl font-black">2-4 Weeks</p>
          </div>
          <div className="text-center md:border-x border-gray-800/50 px-8">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Integration Support</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A99D] to-[#2dd4bf] text-3xl font-black">
              24/7
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Onboarding Success Rate</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60a5fa] text-3xl font-black">
              100%
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}