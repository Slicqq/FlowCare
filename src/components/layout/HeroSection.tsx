'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full overflow-visible py-16 md:py-24">
            {/* Elegant Background Glows */}
            <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-flowcare-primary/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-glow pointer-events-none"></div>
            <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-flowcare-accent/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-glow pointer-events-none" style={{ animationDelay: '3s' }}></div>
            <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-blue-300/10 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-glow pointer-events-none" style={{ animationDelay: '5s' }}></div>

            <div className="relative text-center max-w-5xl mx-auto px-4 z-10 animate-fade-up">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-gray-900 dark:text-white mb-6 leading-[1.1] pb-2 tracking-tight">
                    {t('main_heading', true)}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                    {t('landing_tagline')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <Link
                        href="/auth/register"
                        className="px-8 py-4 text-lg font-bold text-white bg-flowcare-primary rounded-2xl hover:bg-flowcare-primary-dark hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                    >
                        {t('login_create')}
                    </Link>
                    <Link
                        href="/auth/login"
                        className="px-8 py-4 text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 w-full sm:w-auto flex items-center justify-center gap-2 group"
                    >
                        {t('login_signin')}
                        <span className="text-xl leading-none group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
