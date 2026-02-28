import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/layout/HeroSection';
import FeaturesSection from '@/components/layout/FeaturesSection';
import HowItWorksSection from '@/components/layout/HowItWorksSection';
import PricingSection from '@/components/layout/PricingSection';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-transparent font-sans text-gray-900 dark:text-gray-100 selection:bg-flowcare-primary/30 selection:text-flowcare-primary-dark dark:selection:text-flowcare-primary-light relative overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-slate-50 dark:bg-slate-900 -z-50"></div>
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay pointer-events-none -z-40"></div>

      <Header />

      <main className="pt-16 pb-20 px-6 max-w-7xl mx-auto">
        <HeroSection />

        <div className="mb-32 mt-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">Our Services</h2>
            <div className="w-20 h-1.5 bg-flowcare-primary mx-auto mt-6 rounded-full opacity-80"></div>
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
