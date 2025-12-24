"use client";
import React from "react";
import { Calendar, PlayCircle } from "lucide-react";
// Import your existing component
import { CrossGridPattern } from "@/components/ui/cross-grid-pattern";

const stats = [
  { value: "500K+", label: "Patients Managed" },
  { value: "50+", label: "Healthcare Partners" },
  { value: "94%", label: "Prediction Accuracy" },
  { value: "32%", label: "Reduction in Events" },
];

export default function CTASection() {
  return (
    <section className="relative bg-[#05111d] py-24 overflow-hidden font-sans">
      {/* Background Pattern and Gradient Orbs */}
      <div className="absolute inset-0 z-0 opacity-20">
        <CrossGridPattern />
      </div>
      
      {/* Radial Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#00A99D] opacity-[0.07] blur-[120px] rounded-full z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#2563EB] opacity-[0.07] blur-[120px] rounded-full z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-[#112a33] border border-[#1a3d40] px-4 py-1.5 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse" />
          <span className="text-[#00A99D] text-[10px] font-black uppercase tracking-widest">
            Limited Early Access Available
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
          Ready to Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A99D] to-[#2563EB]">Diabetes Care?</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-12">
          Join healthcare organizations worldwide who are improving patient outcomes 
          and reducing costs with Healthstake&apos;s intelligent platform.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#00A99D] to-[#2563EB] text-white px-8 py-4 rounded-full font-black text-sm shadow-xl shadow-blue-900/20 hover:scale-105 transition-transform">
            <Calendar className="w-5 h-5" />
            Schedule a Demo
          </button>
          
          <button className="flex items-center gap-2 bg-[#16252e] border border-[#24343d] text-white px-8 py-4 rounded-full font-black text-sm hover:bg-[#1c2e3a] transition-colors">
            <PlayCircle className="w-5 h-5 text-gray-400" />
            Watch Overview
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800/50 pt-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <p className="text-4xl font-black text-[#00A99D] mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}