'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function PricingSection() {
    const { t } = useLanguage();

    return (
        <div id="pricing" className="py-20 bg-gray-50 border-t">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">{t('pricing_heading')}</h2>

                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {/* Patient Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
                        <div className="p-8 border-b border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Patients</h3>
                            <p className="text-gray-500 mb-6">{t('pricing_text', true)}</p>
                            <div className="text-5xl font-extrabold text-gray-900 mb-2">Free</div>
                        </div>
                        <div className="p-8 bg-gray-50">
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-600">
                                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Real-time Clinic Traffic Data
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Smart Booking System
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    In-App Navigation & Wait Times
                                </li>
                            </ul>
                            <button className="w-full mt-8 py-3 px-4 flowcare-primary text-white rounded-xl font-bold hover:bg-opacity-90 transition">{t('nav_signup')}</button>
                        </div>
                    </div>

                    {/* Provider Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#607d8b] hover:shadow-2xl transition duration-300 relative">
                        <div className="absolute top-0 inset-x-0 h-2 bg-[#607d8b]"></div>
                        <div className="p-8 border-b border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Providers & Clinics</h3>
                            <p className="text-gray-500 mb-6">Complete queue management and analytics suite.</p>
                            <div className="text-5xl font-extrabold text-gray-900 mb-2">$99<span className="text-xl text-gray-500 font-medium">/mo</span></div>
                        </div>
                        <div className="p-8 bg-gray-50">
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-600">
                                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Interactive Queue Management
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Patient Flow Analytics Dashboards
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Staff Optimization Tools
                                </li>
                            </ul>
                            <button className="w-full mt-8 py-3 px-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition">Start Free Trial</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
