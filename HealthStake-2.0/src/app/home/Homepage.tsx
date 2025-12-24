"use client";

import Navbar from "@/components/common/navbar/Navbar";
import Hero from "@/components/common/herosection/herosection";
import WhyChooseUs from "@/app/home/DiabetesCare/DaibetesCare";
import HowPlatformWorks from "@/app/home/OnePlatform/OnePlatform";
import ClientSuccessStories from "./StakeholderModules/StakeholderModules";
import SubscribeSection from "./PredictiveAnalysis/PredictiveAnalysis";
import DownloadApp from "./HowItWorks/HowItWorks";
import SecuritySection from "./SecuritySection/SecuritySection";
import Footer from "@/components/common/footer/Footer";
import HealthcareLeaders from "./HealthcareLeaders/HealthcareLeaders";
import CTASection from "./CTASection/CTASection";
export default function HomePage() {
  return (
    <>

      <Navbar />
     <Hero />
      <WhyChooseUs />
      <HowPlatformWorks />
      <ClientSuccessStories />
      <SubscribeSection />
      <DownloadApp />
      <SecuritySection />
      <HealthcareLeaders />
      <CTASection />
      <Footer />
      // {/* Add more sections later */}
    </>
    
  );
}
