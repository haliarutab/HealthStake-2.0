"use client";

import Navbar from "@/components/common/navbar/Navbar";
import Hero from "@/components/common/herosection/herosection";
import WhyChooseUs from "@/app/home/DiabetesCare/DaibetesCare";
import HowPlatformWorks from "@/app/home/OnePlatform/OnePlatform";
import ClientSuccessStories from "./StakeholderModules/StakeholderModules";
import SubscribeSection from "./PredictiveAnalysis/PredictiveAnalysis";
import HowItWorks from "./HowItWorks/HowItWorks";
import SecuritySection from "./SecuritySection/SecuritySection";
import Footer from "@/components/common/footer/Footer";
import HealthcareLeaders from "./HealthcareLeaders/HealthcareLeaders";
import CTASection from "./CTASection/CTASection";
import DownloadApp from "./DownloadApp/DownloadApp";
export default function HomePage() {
  return (
    <>

      <Navbar />
     <Hero />
      <WhyChooseUs />
      <HowPlatformWorks />
      <ClientSuccessStories />
      <SubscribeSection />
      <HowItWorks />
      <SecuritySection />
      <HealthcareLeaders />
      <CTASection />
      <DownloadApp />
      <Footer />
      // {/* Add more sections later */}
    </>
    
  );
}
