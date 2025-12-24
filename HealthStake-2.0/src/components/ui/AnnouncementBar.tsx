import React, { useState } from 'react';
import { X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-teal-600 text-white overflow-hidden z-50 h-10 flex items-center shadow-md">
      {/* Background Pattern (Optional subtle texture) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute transform -rotate-45 bg-white h-full w-10 -left-10" />
      </div>

      {/* Marquee Container */}
      <div className="w-full flex overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center space-x-8 px-4 font-medium tracking-wide text-sm md:text-base py-2">
          {/* Content Block 1 */}
          <span>🎉 7 Days Free Trial Available Now!</span>
          <span className="text-teal-200">•</span>
          <span>Health Stake: Transform your lifestyle today</span>
          <span className="text-teal-200">•</span>
          <span>Join the revolution</span>
          <span className="text-teal-200">•</span>
          <span>Get 7 Days Free Trial</span>
          <span className="text-teal-200">•</span>
          <span>Health Stake</span>
          
          {/* Duplicate Block for seamless loop */}
          <span className="ml-8">🎉 7 Days Free Trial Available Now!</span>
          <span className="text-teal-200">•</span>
          <span>Health Stake: Transform your lifestyle today</span>
          <span className="text-teal-200">•</span>
          <span>Join the revolution</span>
          <span className="text-teal-200">•</span>
          <span>Get 7 Days Free Trial</span>
          <span className="text-teal-200">•</span>
          <span>Health Stake</span>
        </div>
      </div>

      {/* Close Button */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-teal-700 rounded-full transition-colors z-20"
        aria-label="Close announcement"
      >
        <X size={16} />
      </button>

      {/* Custom Styles for the Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        /* Pause animation on hover so users can read */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;