'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useLanguage } from '@/lib/LanguageContext';

export default function LoginPage() {
    const router = useRouter();
    const { t } = useLanguage();
    const { loginMock } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roleMode, setRoleMode] = useState<'patient' | 'provider'>('patient');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Mock login
            await new Promise(resolve => setTimeout(resolve, 800)); // Simulate delay

            const mockUser = {
                uid: 'mock-user-id-' + Date.now(),
                email: email
            };

            loginMock(mockUser, roleMode);
            router.push(`/dashboard/${roleMode}`);

        } catch (err: any) {
            console.error(err);
            setError('Login failed. Please check your email and password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-transparent font-sans text-gray-900 dark:text-gray-100 selection:bg-flowcare-primary/30 selection:text-flowcare-primary-dark dark:selection:text-flowcare-primary-light relative flex flex-col overflow-x-clip">
            {/* Global Background Elements */}
            <div className="fixed inset-0 bg-slate-50 dark:bg-slate-900 -z-50"></div>

            <main className="flex-grow flex items-center justify-center py-12 px-6 relative z-10">
                <div className="glass-card p-10 rounded-[2.5rem] shadow-sm border border-gray-200 dark:border-gray-800 w-full max-w-md animate-fade-up">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white tracking-tight">{roleMode === 'patient' ? t('login_patient_title') : t('login_provider_title')}</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 font-medium">{t('login_choice_title')}</p>
                    </div>

                    <div className="flex bg-gray-100/80 dark:bg-gray-800/80 p-1.5 mb-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <button
                            type="button"
                            onClick={() => setRoleMode('patient')}
                            className={`flex-1 py-2.5 font-bold rounded-xl text-sm transition-all duration-300 ${roleMode === 'patient' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            {t('reg_option_patient')}
                        </button>
                        <button
                            type="button"
                            onClick={() => setRoleMode('provider')}
                            className={`flex-1 py-2.5 font-bold rounded-xl text-sm transition-all duration-300 ${roleMode === 'provider' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            {t('reg_option_provider')}
                        </button>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{roleMode === 'patient' ? t('reg_email_label') : t('login_provider_id')}</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600/50 focus:border-flowcare-primary outline-none transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('reg_password_label')}</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600/50 focus:border-flowcare-primary outline-none transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 px-4 rounded-2xl text-white font-bold transition-all duration-300 shadow-md mt-8 ${roleMode === 'patient' ? 'bg-flowcare-primary hover:bg-flowcare-primary-dark hover:shadow-lg hover:-translate-y-0.5' : 'bg-flowcare-accent hover:bg-flowcare-accent-dark hover:shadow-lg hover:-translate-y-0.5'} ${loading ? 'opacity-70 cursor-not-allowed scale-100' : ''}`}
                        >
                            {loading ? '...' : (roleMode === 'patient' ? t('login_button') : t('login_button_provider'))}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8 font-medium">
                        {roleMode === 'patient' ? t('login_new_patient') : t('login_new_provider')} <Link href="/auth/register" className="font-bold text-flowcare-primary hover:text-flowcare-primary-dark transition-colors">{roleMode === 'patient' ? t('login_signup_here') : t('login_register_clinic')}</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
