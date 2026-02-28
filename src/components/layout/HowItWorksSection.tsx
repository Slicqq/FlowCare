'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowItWorksSection() {
    const { t } = useLanguage();

    return (
        <div id="how-it-works" className="pt-24 pb-20 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white mb-6 text-center tracking-tight">{t('guide_heading')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium mb-12 max-w-3xl mx-auto text-center leading-relaxed">{t('guide_text')}</p>

            <div className="relative w-full overflow-hidden rounded-[2rem] shadow-sm mx-auto max-w-4xl border border-gray-200 dark:border-gray-800">
                <div style={{ paddingTop: '56.25%' }}>
                    <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="FlowCare Instructional Video Placeholder"></iframe>
                </div>
            </div>

            <div className="mt-20">
                <h3 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-12 text-center tracking-tight">{t('process_heading')}</h3>
                <ol className="grid md:grid-cols-3 gap-8 lg:gap-10 text-left relative before:absolute before:inset-0 before:top-12 before:h-px before:bg-gray-200 dark:before:bg-gray-800 before:max-md:hidden">
                    <li className="relative glass-card p-8 rounded-[2rem] shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-primary hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 rounded-full bg-flowcare-primary text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10 mx-auto md:mx-0 shadow-md">1</div>
                        <span className="text-2xl font-bold font-heading mb-3 block text-gray-900 dark:text-white text-center md:text-left tracking-tight">{t('step1_title')}</span>
                        <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-center md:text-left">{t('step1_text')}</p>
                    </li>
                    <li className="relative glass-card p-8 rounded-[2rem] shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-accent hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 rounded-full bg-flowcare-accent text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10 mx-auto md:mx-0 shadow-md">2</div>
                        <span className="text-2xl font-bold font-heading mb-3 block text-gray-900 dark:text-white text-center md:text-left tracking-tight">{t('step2_title')}</span>
                        <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-center md:text-left">{t('step2_text')}</p>
                    </li>
                    <li className="relative glass-card p-8 rounded-[2rem] shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-primary hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white dark:text-gray-900 text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10 mx-auto md:mx-0 shadow-md">3</div>
                        <span className="text-2xl font-bold font-heading mb-3 block text-gray-900 dark:text-white text-center md:text-left tracking-tight">{t('step3_title')}</span>
                        <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-center md:text-left">{t('step3_text')}</p>
                    </li>
                </ol>
            </div>
        </div>
    );
}
