'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowItWorksSection() {
    const { t } = useLanguage();

    return (
        <div id="how-it-works" className="pt-16 pb-16 max-w-4xl mx-auto border-t">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('guide_heading')}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center">{t('guide_text')}</p>

            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl mx-auto max-w-3xl">
                <div style={{ paddingTop: '56.25%' }}>
                    <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="FlowCare Instructional Video Placeholder"></iframe>
                </div>
            </div>

            <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">{t('process_heading')}</h3>
                <ol className="grid md:grid-cols-3 gap-8 text-left">
                    <li className="p-6 bg-white rounded-xl shadow-md border-b-4 border-current flowcare-primary-text">
                        <span className="text-3xl font-extrabold mb-2 block">{t('step1_title')}</span>
                        <p className="text-gray-600 text-sm">{t('step1_text')}</p>
                    </li>
                    <li className="p-6 bg-white rounded-xl shadow-md border-b-4 border-current flowcare-accent-text">
                        <span className="text-3xl font-extrabold mb-2 block">{t('step2_title')}</span>
                        <p className="text-gray-600 text-sm">{t('step2_text')}</p>
                    </li>
                    <li className="p-6 bg-white rounded-xl shadow-md border-b-4 border-current flowcare-primary-text">
                        <span className="text-3xl font-extrabold mb-2 block">{t('step3_title')}</span>
                        <p className="text-gray-600 text-sm">{t('step3_text')}</p>
                    </li>
                </ol>
            </div>
        </div>
    );
}
