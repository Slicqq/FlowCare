'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import Header from '@/components/layout/Header';
import { useLanguage } from '@/lib/LanguageContext';

export default function LoginPage() {
    const router = useRouter();
    const { t } = useLanguage();
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
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDoc = await getDoc(doc(db, 'users', user.uid));

            if (userDoc.exists()) {
                const actualRole = userDoc.data().role;
                if (actualRole === roleMode) {
                    router.push(`/dashboard/${actualRole}`);
                } else {
                    await auth.signOut();
                    setError(`Access denied. Please login via the ${actualRole === 'patient' ? 'Patient' : 'Provider'} portal instead.`);
                }
            } else {
                await auth.signOut();
                setError('User record not found. Please contact support.');
            }
        } catch (err: any) {
            console.error(err);
            setError('Login failed. Please check your email and password.');
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
                        <h2 className="text-3xl font-bold text-gray-800">{roleMode === 'patient' ? t('login_patient_title') : t('login_provider_title')}</h2>
                        <p className="text-gray-500 mt-2">{t('login_choice_title')}</p>
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

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{roleMode === 'patient' ? t('reg_email_label') : t('login_provider_id')}</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00A389] focus:outline-none transition"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
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
                            className={`w-full py-3 px-4 rounded-xl text-white font-bold transition shadow-md ${roleMode === 'patient' ? 'flowcare-primary hover:bg-opacity-90' : 'flowcare-accent hover:bg-opacity-90'} ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? '...' : (roleMode === 'patient' ? t('login_button') : t('login_button_provider'))}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        {roleMode === 'patient' ? t('login_new_patient') : t('login_new_provider')} <Link href="/auth/register" className="font-semibold text-gray-800 hover:underline">{roleMode === 'patient' ? t('login_signup_here') : t('login_register_clinic')}</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
