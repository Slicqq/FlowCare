'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import Image from 'next/image';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user, role, loading, logoutMock } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/auth/login');
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <p className="text-gray-500 font-medium">Loading Dashboard...</p>
            </div>
        );
    }

    if (!user) {
        return null; // Will redirect in useEffect
    }

    const handleLogout = async () => {
        logoutMock();
        router.push('/');
    };

    const isPatient = role === 'patient';
    const primaryColorClass = isPatient ? 'flowcare-primary' : 'bg-[#607d8b]';
    const activeClass = isPatient ? 'sidebar-active-patient' : 'sidebar-active-provider';

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <aside className={`w-64 bg-white shadow-lg flex flex-col ${isPatient ? 'border-t-4 border-blue-600' : 'border-t-4 border-[#607d8b]'}`}>
                <div className="p-6 pb-2 border-b">
                    <Link href={`/dashboard/${role}`} className="flex items-center gap-2">
                        <Image src="/Logo.png" alt="FlowCare Logo" width={32} height={32} />
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 tracking-tight">FlowCare</h1>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {isPatient ? (
                        <>
                            <Link href="/dashboard/patient" className={`block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition border border-transparent`}>
                                Dashboard Home
                            </Link>
                            <Link href="/dashboard/patient/find-clinics" className={`block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition border border-transparent`}>
                                Find Clinics
                            </Link>
                            <Link href="/dashboard/patient/my-appointments" className={`block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition border border-transparent`}>
                                My Appointments
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/dashboard/provider" className={`block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition border border-transparent`}>
                                Dashboard Home
                            </Link>
                            <Link href="/dashboard/provider/queue" className={`block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition border border-transparent`}>
                                Active Queue
                            </Link>
                            <Link href="/dashboard/provider/analytics" className={`block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition border border-transparent`}>
                                Flow Analytics
                            </Link>
                        </>
                    )}
                </nav>

                <div className="p-4 border-t">
                    <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-red-600 font-medium hover:bg-red-50 rounded-lg transition flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto relative">
                {/* Top Header */}
                <header className="bg-white shadow-sm sticky top-0 z-10 p-4 border-b flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800 capitalize">{role} Portal</h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full border">
                            {user.email}
                        </span>
                    </div>
                </header>

                <div className="p-6 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
