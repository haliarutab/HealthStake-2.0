import React from "react";
import { Brain, Zap } from "lucide-react";

export default function PredictiveAnalytics() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Revolving Animation */}
        <div className="relative flex justify-center items-center h-[500px]">
          {/* Orbital Path */}
          <div className="absolute w-80 h-80 border border-dashed border-gray-200 rounded-full animate-[spin_25s_linear_infinite]" />
          
          {/* Main Brain Sphere */}
          <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] flex items-center justify-center shadow-[0_20px_50px_rgba(37,99,235,0.3)] z-10">
            <div className="absolute inset-0 rounded-full bg-white opacity-10 animate-pulse" />
            <Brain className="w-24 h-24 text-white z-20" />
            
            {/* Tiny Revolving Orbs */}
            <div className="absolute w-[140%] h-[140%] animate-[spin_8s_linear_infinite]">
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#22d3ee] rounded-full blur-[1px] shadow-lg shadow-cyan-400" />
            </div>
            <div className="absolute w-[120%] h-[120%] animate-[spin_12s_linear_infinite_reverse]">
              <div className="absolute bottom-10 right-0 w-3 h-3 bg-blue-300 rounded-full" />
            </div>
          </div>

          {/* Floating Accuracy Badge */}
          <div className="absolute left-4 bottom-20 bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] text-white p-5 rounded-3xl shadow-2xl z-20">
            <p className="text-[10px] uppercase font-black tracking-widest opacity-80">Model Accuracy</p>
            <p className="text-3xl font-bold">99.2%</p>
          </div>

          {/* Floating Processing Badge */}
          <div className="absolute right-0 top-20 bg-white shadow-2xl p-4 rounded-2xl flex items-center gap-3 border border-gray-50 z-20">
            <div className="bg-orange-50 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-orange-400 fill-orange-400" />
            </div>
            <span className="text-sm font-bold text-gray-800">Real-time Processing</span>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="max-w-xl">
          <span className="bg-[#e0f2fe] text-[#0ea5e9] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest">
            AI-Powered Intelligence
          </span>
          <h2 className="text-6xl font-black text-[#0f172a] mt-8 leading-[1.1]">
            Predictive Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#2563eb]">That Saves Lives</span>
          </h2>
          <p className="text-gray-500 text-xl mt-8 leading-relaxed font-medium">
            Our proprietary AI engine analyzes continuous streams of patient data to detect patterns, predict events, and deliver actionable insights—before problems occur.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
                <p className="text-4xl font-black text-[#0d9488]">60 min</p>
                <p className="text-xs font-bold text-gray-400 uppercase mt-2">advance warning</p>
            </div>
            <div>
                <p className="text-4xl font-black text-[#2563eb]">94%</p>
                <p className="text-xs font-bold text-gray-400 uppercase mt-2">accuracy rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}