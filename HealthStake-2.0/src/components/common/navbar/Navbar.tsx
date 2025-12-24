"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; 
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solution", href: "#" },
    { name: "Platform", href: "#" },
    { name: "AI Features", href: "#" },
    { name: "Security", href: "#" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white border-gray-200 py-3 shadow-sm" 
          : "bg-transparent border-white/5 py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* LOGO AREA */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#21c6ba] to-[#2b89f5] rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-black text-xl">H</span>
              </div>
              <span className={cn(
                "text-xl font-bold tracking-tight transition-colors",
                scrolled ? "text-slate-900" : "text-white"
              )}>
                Healthstake
              </span>
            </Link>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-all hover:opacity-100",
                  scrolled 
                    ? "text-slate-600 hover:text-[#21c6ba]" 
                    : "text-white/70 hover:text-[#21c6ba]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/login" 
              className={cn(
                "text-sm font-bold transition-colors",
                scrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-[#21c6ba]"
              )}
            >
              Sign In
            </Link>
            
            <Button
              asChild
              className="bg-gradient-to-r from-[#21c6ba] to-[#2b89f5] hover:opacity-90 text-white rounded-full px-7 h-11 font-bold shadow-lg shadow-blue-500/20 transition-transform active:scale-95"
            >
              <Link href="/demo">Contact Us</Link>
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                scrolled ? "text-slate-900" : "text-white"
              )}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#08121d] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-white/80 font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-white/10" />
            <div className="flex flex-col gap-4">
              <Link href="/login" className="text-white font-bold text-center">Sign In</Link>
              <Button className="bg-gradient-to-r from-[#21c6ba] to-[#2b89f5] rounded-full py-6 text-white font-bold">
               Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}