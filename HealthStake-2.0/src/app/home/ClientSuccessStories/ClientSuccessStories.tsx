"use client";
import React, { useState } from "react";

// --- TYPES TO RESOLVE ERRORS ---
interface Stat {
  val: string;
  label: string;
  sub?: string;
  subCol?: string;
  border?: boolean;
  valCol?: string;
}

interface Module {
  id: string;
  label: string;
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  features: string[];
  dashboardTitle: string;
  stats: Stat[];
  chart: number[];
}

// Icons specifically matched to the new images
const IconMap: any = {
  "📱": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  "👥": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  "⚠️": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  "📅": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  "💬": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
  "📄": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  "🧠": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  "🩺": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.828 17.586L14.382 8.032a2 2 0 012.828 0l2.828 2.828a2 2 0 010 2.828l-9.554 9.554a2 2 0 01-2.828 0l-2.828-2.828a2 2 0 010-2.828z" /></svg>,
  "🧪": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
};

const modules: Module[] = [
  {
    id: "patient",
    label: "Patient App",
    icon: "📱",
    color: "#00a389",
    title: "Patient App",
    subtitle: "Empower self-management",
    features: ["Glucose Logging & CGM Sync", "Personalized Goals", "Medication Reminders", "Smart Alerts", "Progress Tracking"],
    dashboardTitle: "Your Health at a Glance",
    stats: [
      { val: "6", label: "Today's Readings", sub: "+2", subCol: "text-green-400" },
      { val: "84%", label: "In Range", sub: "+5%", subCol: "text-green-400", border: true },
      { val: "14 days", label: "Streak" }
    ],
    chart: [40, 70, 45, 90, 65, 80, 50, 95, 60, 40]
  },
  {
    id: "nursing",
    label: "Nursing Portal",
    icon: "👥",
    color: "#3b82f6",
    title: "Nursing Portal",
    subtitle: "Streamline care coordination",
    features: ["Patient Panel Management", "Priority Alerts Dashboard", "Appointment Scheduling", "Secure Messaging", "Care Plan Documentation"],
    dashboardTitle: "Care Team Dashboard",
    stats: [
      { val: "248", label: "Active Patients" },
      { val: "12", label: "Pending Alerts", valCol: "text-red-500" },
      { val: "34", label: "Tasks Today" }
    ],
    chart: [30, 40, 35, 75, 55, 65, 85, 90, 75, 30, 45]
  },
  {
    id: "doctor",
    label: "Doctor Module",
    icon: "🩺",
    color: "#6366f1",
    title: "Doctor Module",
    subtitle: "Clinical decision support",
    features: ["Comprehensive Patient Analytics", "AI Treatment Recommendations", "Clinical Notes & Reports", "Outcome Tracking", "Risk Stratification"],
    dashboardTitle: "Clinical Intelligence",
    stats: [
      { val: "8", label: "High Risk", valCol: "text-pink-500" },
      { val: "23", label: "Reviews Due" },
      { val: "6.8%", label: "Avg. HbA1c", sub: "-0.3", subCol: "text-green-400" }
    ],
    chart: [60, 40, 30, 65, 45, 85, 70, 95, 80, 55]
  },
  {
    id: "lab",
    label: "Lab Integration",
    icon: "🧪",
    color: "#a855f7",
    title: "Lab Integration",
    subtitle: "Seamless diagnostics",
    features: ["Auto-Import Lab Results", "Critical Value Alerts", "Trend Analysis", "Test Scheduling", "Result Visualization"],
    dashboardTitle: "Lab Results Hub",
    stats: [
      { val: "18", label: "New Results" },
      { val: "2", label: "Critical", valCol: "text-pink-500" },
      { val: "45", label: "Pending" }
    ],
    chart: [50, 80, 60, 90, 40, 65, 55, 75, 85, 45]
  },
  {
    id: "ai",
    label: "AI Intelligence",
    icon: "🧠",
    color: "#ef4444",
    title: "AI Intelligence",
    subtitle: "Predictive analytics engine",
    features: ["Hypo/Hyperglycemia Prediction", "Complication Risk Scoring", "Personalized Recommendations", "Population Health Insights", "Outcome Predictions"],
    dashboardTitle: "AI Predictions",
    stats: [
      { val: "94%", label: "Accuracy" },
      { val: "1.2M", label: "Predictions" },
      { val: "856", label: "Prevented" }
    ],
    chart: [65, 45, 60, 55, 85, 35, 40, 62, 75, 68, 82]
  }
];

export default function StakeholderModules() {
  const [activeTab, setActiveTab] = useState("patient");
  const activeData = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <section className="bg-[#05111d] py-20 px-6 text-white font-sans min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="bg-[#112a33] text-[#2cc1a7] text-xs font-bold px-3 py-1 rounded-full border border-[#1a3d40]">Platform Modules</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Built for Every <span className="text-[#56c1e3]">Stakeholder</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Purpose-built modules designed for each role in the diabetes care continuum, all seamlessly connected through our intelligent platform.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(mod.id)}
              style={{ 
                backgroundColor: activeTab === mod.id ? mod.color : "#16252e", 
                borderColor: activeTab === mod.id ? mod.color : "#24343d" 
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all text-sm border font-medium ${
                activeTab === mod.id ? "text-white shadow-[0_0_15px_rgba(0,0,0,0.4)]" : "text-gray-400 hover:border-gray-500"
              }`}
            >
              <span>{mod.icon}</span> {mod.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-8">
              <div style={{ backgroundColor: activeData.color }} className="p-3 rounded-xl shadow-lg">
                <span className="text-xl">{activeData.icon}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeData.title}</h3>
                <p className="text-gray-400 text-sm">{activeData.subtitle}</p>
              </div>
            </div>

            {activeData.features.map((feature, idx) => (
              <div key={idx} className="bg-[#0e1e29] border border-[#1a2b36] p-4 rounded-xl flex items-center gap-4 hover:bg-[#122633] transition-colors cursor-pointer group">
                <div style={{ color: activeData.color }} className="group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm font-medium">{feature}</span>
              </div>
            ))}

            <button style={{ backgroundColor: activeData.color }} className="mt-6 text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-lg hover:brightness-110 transition-all">
              Learn More
            </button>
          </div>

          <div className="bg-[#0e1e29] border border-[#1a2b36] rounded-[2.5rem] p-8 shadow-2xl relative">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-bold text-sm tracking-tight">{activeData.dashboardTitle}</h4>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {activeData.stats.map((s, i) => (
                <div 
                  key={i} 
                  className={`bg-[#16252e] p-5 rounded-2xl text-center ${s.border ? 'border-b-2' : ''}`} 
                  style={{ borderBottomColor: s.border ? activeData.color : 'transparent' }}
                >
                  <p className={`text-2xl font-bold ${s.valCol || 'text-white'}`}>{s.val}</p>
                  <p className="text-[10px] text-gray-500 uppercase mt-1 tracking-widest font-semibold">{s.label}</p>
                  {s.sub && <p className={`text-[10px] font-bold mt-0.5 ${s.subCol}`}>{s.sub}</p>}
                </div>
              ))}
            </div>

            <div className="flex items-end gap-2.5 h-28 mb-10 px-2 bg-[#0e1e29]">
              {activeData.chart.map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm relative group" style={{ backgroundColor: `${activeData.color}15` }}>
                  <div 
                    style={{ height: `${h}%`, backgroundColor: activeData.color }} 
                    className="w-full rounded-t-md shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-all duration-700 ease-out"
                  ></div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#16252e]"></div>
                  <div className="h-2 bg-[#16252e] rounded-full w-full max-w-[200px]"></div>
                  <div className="ml-auto w-12 h-5 rounded-full bg-[#16252e]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}