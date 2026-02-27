'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                {t('main_heading', true)}
            </h1>
            <p className="text-lg text-gray-600 mb-10">
                {t('landing_tagline')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                    href="/auth/register"
                    className="px-8 py-4 text-lg font-bold text-white flowcare-primary rounded-xl shadow-md hover:shadow-lg hover:bg-opacity-90 transition duration-300"
                >
                    {t('login_create')}
                </Link>
                <Link
                    href="/auth/login"
                    className="px-8 py-4 text-lg font-bold text-gray-700 bg-gray-200 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-300 transition duration-300"
                >
                    {t('login_signin')}
                </Link>
            </div>
        </div>
    );
}
