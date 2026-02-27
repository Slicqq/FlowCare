'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="flex justify-between items-center py-5 px-6 md:px-12 lg:px-20 sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <div className="text-2xl font-bold flowcare-primary-text flex items-center gap-2">
          <Image src="/Logo.png" alt="FlowCare Logo" width={32} height={32} />
          FlowCare
        </div>
      </Link>

      <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <Link href="#about" className="hover:text-gray-900 transition">{t('nav_about')}</Link>
        <Link href="#how-it-works" className="hover:text-gray-900 transition">{t('nav_howitworks')}</Link>
        <Link href="#pricing" className="hover:text-gray-900 transition">{t('nav_pricing')}</Link>
        <Link href="#contact" className="hover:text-gray-900 transition">{t('nav_contact')}</Link>
      </nav>

      <div className="flex items-center space-x-4">
        <LanguageSelector />

        <Link href="/auth/register" className="hidden md:block px-4 py-2 text-white flowcare-primary rounded-lg font-semibold hover:bg-opacity-90 transition shadow-md">
          {t('nav_signup')}
        </Link>
      </div>
    </header>
  );
}
