'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FeaturesSection() {
    const { t } = useLanguage();

    return (
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#00A389] hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-bold flowcare-primary-text mb-3">{t('card_patient_heading')}</h2>
                <p className="text-gray-500">{t('card_patient_text')}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#607d8b] hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-bold flowcare-accent-text mb-3">{t('card_provider_heading')}</h2>
                <p className="text-gray-500">{t('card_provider_text')}</p>
            </div>
        </div>
    );
}
