import Link from "next/link";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05111d] pt-20 pb-10 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand & Description */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#21c6ba] to-[#2b89f5] rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-black text-xl">H</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Healthstake</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              Transforming diabetes care through intelligent technology and connected ecosystems.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-[#16252e] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1c2e3a] transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#16252e] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1c2e3a] transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#16252e] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1c2e3a] transition-all">
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:col-span-8 gap-8">
            {/* Product */}
            <div>
              <h3 className="font-bold text-sm mb-6 uppercase tracking-wider">Product</h3>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">Platform Overview</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Patient App</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Provider Portal</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">AI Analytics</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-sm mb-6 uppercase tracking-wider">Company</h3>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Leadership</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">News & Press</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-sm mb-6 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Whitepapers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Webinars</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-sm mb-6 uppercase tracking-wider">Legal</h3>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">HIPAA Compliance</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="mt-20 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#00A99D]" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#00A99D]" />
              <span>hello@healthstake.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#00A99D]" />
              <span>1-800-HEALTH</span>
            </div>
          </div>
        </div>

        {/* Copyright & Legal Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs font-medium">
          <p>© 2025 Healthstake, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}