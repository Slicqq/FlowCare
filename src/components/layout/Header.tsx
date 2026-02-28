'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-20 sticky top-0 z-50 glass-header transition-all duration-300">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="text-2xl font-bold font-heading text-gray-900 dark:text-white flex items-center gap-2 group-hover:opacity-80 transition-opacity">
          <Image src="/Logo.png" alt="FlowCare Logo" width={32} height={32} />
          FlowCare
        </div>
      </Link>

      <nav className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200 font-medium tracking-wide">
        <Link href="#about" className="relative group px-1 py-2">
          <span className="text-sm uppercase tracking-wider font-semibold group-hover:text-flowcare-primary dark:group-hover:text-flowcare-primary-light transition-colors duration-300">{t('nav_about')}</span>
        </Link>
        <Link href="#how-it-works" className="relative group px-1 py-2">
          <span className="text-sm uppercase tracking-wider font-semibold group-hover:text-flowcare-primary dark:group-hover:text-flowcare-primary-light transition-colors duration-300">{t('nav_howitworks')}</span>
        </Link>
        <Link href="#pricing" className="relative group px-1 py-2">
          <span className="text-sm uppercase tracking-wider font-semibold group-hover:text-flowcare-primary dark:group-hover:text-flowcare-primary-light transition-colors duration-300">{t('nav_pricing')}</span>
        </Link>
        <Link href="#contact" className="relative group px-1 py-2">
          <span className="text-sm uppercase tracking-wider font-semibold group-hover:text-flowcare-primary dark:group-hover:text-flowcare-primary-light transition-colors duration-300">{t('nav_contact')}</span>
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <LanguageSelector />

        <Link href="/auth/register" className="hidden md:block px-6 py-2.5 text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full text-sm uppercase tracking-wider font-bold hover:scale-105 transition-transform duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] dark:shadow-[0_4px_14px_0_rgba(255,255,255,0.1)]">
          {t('nav_signup')}
        </Link>
      </div>
    </header>
  );
}
