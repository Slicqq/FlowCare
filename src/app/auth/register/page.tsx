'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import Header from '@/components/layout/Header';
import { useLanguage } from '@/lib/LanguageContext';

export default function RegisterPage() {
    const router = useRouter();
    const { t } = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [roleMode, setRoleMode] = useState<'patient' | 'provider'>('patient');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                role: roleMode,
                email: email,
                phone: phone,
                createdAt: serverTimestamp()
            });

            router.push(`/dashboard/${roleMode}`);

        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />

            <main className="pt-20 pb-20 px-6 flex justify-center">
                <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">{t('reg_title')}</h2>
                        <p className="text-gray-500 mt-2">{t('login_cta_heading')}</p>
                    </div>

                    <div className="flex bg-gray-100 p-1 mb-8 rounded-xl">
                        <button
                            type="button"
                            onClick={() => setRoleMode('patient')}
                            className={`flex-1 py-2 font-semibold rounded-lg text-sm transition ${roleMode === 'patient' ? 'flowcare-primary text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            {t('reg_option_patient')}
                        </button>
                        <button
                            type="button"
                            onClick={() => setRoleMode('provider')}
                            className={`flex-1 py-2 font-semibold rounded-lg text-sm transition ${roleMode === 'provider' ? 'flowcare-accent text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            {t('reg_option_provider')}
                        </button>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t('reg_email_label')}</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00A389] focus:outline-none transition"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {roleMode === 'patient' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('reg_phone_label')}</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00A389] focus:outline-none transition"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t('reg_password_label')}</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00A389] focus:outline-none transition"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-4 rounded-xl text-white font-bold transition shadow-md mt-6 ${roleMode === 'patient' ? 'flowcare-primary hover:bg-opacity-90' : 'flowcare-accent hover:bg-opacity-90'} ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? '...' : t('reg_button')}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        {t('login_signin')} <Link href="/auth/login" className="font-semibold text-gray-800 hover:underline">{t('login_signin_text')}</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
