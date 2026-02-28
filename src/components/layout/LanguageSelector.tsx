'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageSelector() {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (lang: 'en' | 'hi' | 'mr') => {
        setLanguage(lang);
        setIsOpen(false);
    };

    const getLangLabel = (code: string) => {
        switch (code) {
            case 'hi': return 'हिंदी';
            case 'mr': return 'मराठी';
            case 'en': default: return 'English';
        }
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600/80 focus:border-transparent transition"
            >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
                {getLangLabel(language)}
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
                    <div className="py-1">
                        <button
                            onClick={() => handleSelect('en')}
                            className={`flex items-center w-full px-4 py-2 text-sm text-left ${language === 'en' ? 'bg-gray-100 font-semibold text-gray-900' : 'text-gray-700 hover:bg-gray-50'} transition`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => handleSelect('hi')}
                            className={`flex items-center w-full px-4 py-2 text-sm text-left ${language === 'hi' ? 'bg-gray-100 font-semibold text-gray-900' : 'text-gray-700 hover:bg-gray-50'} transition`}
                        >
                            हिंदी (Hindi)
                        </button>
                        <button
                            onClick={() => handleSelect('mr')}
                            className={`flex items-center w-full px-4 py-2 text-sm text-left ${language === 'mr' ? 'bg-gray-100 font-semibold text-gray-900' : 'text-gray-700 hover:bg-gray-50'} transition`}
                        >
                            मराठी (Marathi)
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
