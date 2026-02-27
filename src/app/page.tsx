import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/layout/HeroSection';
import FeaturesSection from '@/components/layout/FeaturesSection';
import HowItWorksSection from '@/components/layout/HowItWorksSection';
import PricingSection from '@/components/layout/PricingSection';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />

      <main className="pt-16 pb-20 px-6 max-w-7xl mx-auto">
        <HeroSection />

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <div className="w-16 h-1 flowcare-primary mx-auto mt-4 rounded"></div>
          </div>
          <FeaturesSection />
        </div>

        <HowItWorksSection />
      </main>

      <PricingSection />

      <Footer />
    </div>
  );
}
