'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export default function PricingSection() {
    const { t } = useLanguage();

    return (
        <div id="pricing" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-center text-gray-900 dark:text-white mb-16 tracking-tight">{t('pricing_heading')}</h2>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Patient Card */}
                    <div className="glass-card rounded-[2.5rem] shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-primary hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col group relative">
                        <div className="p-10 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-2 tracking-tight">Patients</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">{t('pricing_text', true)}</p>
                            <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:scale-105 origin-left transition-transform duration-300 tracking-tight">Free</div>
                        </div>
                        <div className="p-10 bg-white/50 dark:bg-gray-900/50 flex-grow flex flex-col justify-between">
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-800 dark:text-gray-200 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-flowcare-primary mr-3 shrink-0" />
                                    Real-time Clinic Traffic Data
                                </li>
                                <li className="flex items-center text-gray-800 dark:text-gray-200 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-flowcare-primary mr-3 shrink-0" />
                                    Smart Booking System
                                </li>
                                <li className="flex items-center text-gray-800 dark:text-gray-200 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-flowcare-primary mr-3 shrink-0" />
                                    In-App Navigation & Wait Times
                                </li>
                            </ul>
                            <button className="w-full mt-10 py-4 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-2xl font-bold transition-colors duration-200">{t('nav_signup')}</button>
                        </div>
                    </div>

                    {/* Provider Card */}
                    <div className="glass-card rounded-[2.5rem] shadow-xl overflow-hidden border border-flowcare-primary/30 dark:border-flowcare-primary/50 relative flex flex-col group transform md:scale-105 z-10 bg-white dark:bg-gray-900">
                        <div className="absolute top-0 inset-x-0 h-2 bg-flowcare-primary"></div>
                        <div className="absolute top-8 right-8 bg-flowcare-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm uppercase tracking-wider">Popular</div>

                        <div className="p-10 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-2 tracking-tight">Providers & Clinics</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Complete queue management and analytics suite.</p>
                            <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">$99<span className="text-xl text-gray-500 dark:text-gray-400 font-medium tracking-normal">/mo</span></div>
                        </div>
                        <div className="p-10 bg-gray-50/30 dark:bg-gray-800/30 flex-grow flex flex-col justify-between">
                            <ul className="space-y-5">
                                <li className="flex items-center text-gray-800 dark:text-gray-200 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-flowcare-accent mr-3 shrink-0" />
                                    Interactive Queue Management
                                </li>
                                <li className="flex items-center text-gray-800 dark:text-gray-200 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-flowcare-accent mr-3 shrink-0" />
                                    Patient Flow Analytics Dashboards
                                </li>
                                <li className="flex items-center text-gray-800 dark:text-gray-200 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-flowcare-accent mr-3 shrink-0" />
                                    Staff Optimization Tools
                                </li>
                            </ul>
                            <button className="w-full mt-10 py-4 px-4 bg-flowcare-primary hover:bg-flowcare-primary-dark text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">Start Free Trial</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
