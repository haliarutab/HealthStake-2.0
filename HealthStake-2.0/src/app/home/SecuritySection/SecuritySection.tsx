"use client";
import React from "react";
import { 
  Lock, 
  Key, 
  Cloud, 
  Eye, 
  FileCheck, 
  ShieldCheck, 
  ShieldAlert 
} from "lucide-react";
// Import your existing component
import { CrossGridPattern } from "@/components/ui/cross-grid-pattern";

const complianceItems = [
  { label: "HIPAA", status: "Fully Compliant" },
  { label: "SOC 2", status: "Type II Certified" },
  { label: "ISO 27001", status: "Certified" },
  { label: "GDPR", status: "Compliant" },
];

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    desc: "AES-256 encryption for data at rest and TLS 1.3 for data in transit.",
    icon: <Lock className="w-5 h-5 text-[#00A99D]" />,
  },
  {
    title: "Multi-Factor Authentication",
    desc: "Secure access with MFA, SSO integration, and role-based permissions.",
    icon: <Key className="w-5 h-5 text-[#00A99D]" />,
  },
  {
    title: "Secure Cloud Infrastructure",
    desc: "Hosted on HIPAA-compliant cloud infrastructure with 99.99% uptime SLA.",
    icon: <Cloud className="w-5 h-5 text-[#00A99D]" />,
  },
  {
    title: "Audit Logging",
    desc: "Comprehensive audit trails for all data access and system changes.",
    icon: <Eye className="w-5 h-5 text-[#00A99D]" />,
  },
  {
    title: "Regular Penetration Testing",
    desc: "Third-party security assessments and continuous vulnerability scanning.",
    icon: <FileCheck className="w-5 h-5 text-[#00A99D]" />,
  },
  {
    title: "Data Residency Options",
    desc: "Choose where your data is stored to meet regional compliance requirements.",
    icon: <ShieldCheck className="w-5 h-5 text-[#00A99D]" />,
  },
];

export default function SecuritySection() {
  return (
    <section className="relative bg-[#05111d] py-24 overflow-hidden font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <CrossGridPattern />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-[#112a33] text-[#00A99D] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-[#1a3d40] inline-block mb-6">
            Security & Compliance
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Healthcare-Grade <span className="text-[#00A99D]">Security</span>
          </h2>
          <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto font-medium leading-relaxed">
            Built from the ground up with security and compliance at its core. Your patients&apos; data is 
            protected by industry-leading safeguards.
          </p>
        </div>

        {/* Compliance Horizontal Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {complianceItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#0e1e29]/60 border border-[#1a2b36] p-4 rounded-xl flex items-center gap-4 group hover:border-[#00A99D]/50 transition-colors"
            >
              <div className="bg-[#112a33] p-2 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-[#00A99D]" />
              </div>
              <div>
                <p className="text-white text-sm font-black tracking-tight uppercase">{item.label}</p>
                <p className="text-gray-500 text-[10px] font-bold">{item.status}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Security Grid (3x2) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-[#0e1e29] border border-[#1a2b36] p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#122633]"
            >
              <div className="bg-[#112a33] w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-[#1a3d40]">
                {feature.icon}
              </div>
              <h4 className="text-white font-black text-lg mb-4 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-xs font-medium leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Status Pill */}
        <div className="flex justify-center">
          <div className="bg-[#0e1e29] border border-[#1a2b36] rounded-full px-6 py-3 flex items-center gap-3 shadow-2xl">
            <div className="bg-[#112a33] p-1.5 rounded-full">
              <Lock className="w-4 h-4 text-[#00A99D]" />
            </div>
            <p className="text-white text-xs font-bold tracking-tight">
              Zero data breaches since inception • <span className="text-[#00A99D]">100% compliance record</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}