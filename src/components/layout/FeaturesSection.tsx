'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { HeartPulse, Stethoscope } from 'lucide-react';

export default function FeaturesSection() {
    const { t } = useLanguage();

    return (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative glass-card p-10 rounded-[2rem] shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-primary hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-flowcare-primary/5 rounded-bl-full flex items-start justify-end p-6 -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-300">
                    <HeartPulse className="w-12 h-12 text-flowcare-primary opacity-40" strokeWidth={1.5} />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-flowcare-primary/10 dark:bg-flowcare-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-flowcare-primary transition-all duration-300">
                    <HeartPulse className="w-8 h-8 text-flowcare-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4 tracking-tight">{t('card_patient_heading')}</h2>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-lg leading-relaxed relative z-10">{t('card_patient_text')}</p>
            </div>

            <div className="relative glass-card p-10 rounded-[2rem] shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-accent hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-flowcare-accent/5 rounded-bl-full flex items-start justify-end p-6 -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-300">
                    <Stethoscope className="w-12 h-12 text-flowcare-accent opacity-40" strokeWidth={1.5} />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-flowcare-accent/10 dark:bg-flowcare-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-flowcare-accent transition-all duration-300">
                    <Stethoscope className="w-8 h-8 text-flowcare-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4 tracking-tight">{t('card_provider_heading')}</h2>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-lg leading-relaxed relative z-10">{t('card_provider_text')}</p>
            </div>
        </div>
    );
}
