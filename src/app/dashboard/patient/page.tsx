'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import Link from 'next/link';

export default function PatientDashboardHome() {
    const { user } = useAuth();
    const [nextAppt, setNextAppt] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        // Mock data fetch
        setTimeout(() => {
            setNextAppt({
                clinicName: 'City Central Clinic',
                specialty: 'General Practice',
                date: 'Oct 24, 2024',
                time: '14:30 PM'
            });
            setLoading(false);
        }, 800);

    }, [user]);

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                <p className="text-gray-500">Manage your healthcare flow from one place.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-sm p-6 border-t-4 border-blue-600 hover:shadow-md transition">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Next Appointment</h2>

                    {loading ? (
                        <p className="text-gray-500 animate-pulse">Checking appointments...</p>
                    ) : nextAppt ? (
                        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                            <div>
                                <p className="text-lg font-bold text-gray-800">{nextAppt.clinicName}</p>
                                <p className="text-gray-600 font-medium">Dr. | {nextAppt.specialty}</p>
                                <p className="text-sm text-gray-500 mt-2">{nextAppt.date} at {nextAppt.time}</p>
                            </div>
                            <span className="px-4 py-1 text-sm font-bold flowcare-primary-text flowcare-primary-light rounded-full shadow-sm">
                                Confirmed
                            </span>
                        </div>
                    ) : (
                        <div className="text-center py-6">
                            <p className="text-gray-500 mb-4">You have no upcoming confirmed appointments.</p>
                            <Link href="/dashboard/patient/find-clinics" className="px-5 py-2 flowcare-primary text-white rounded-lg font-medium inline-block hover:bg-opacity-90 transition shadow-md">
                                Book an Appointment
                            </Link>
                        </div>
                    )}
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col justify-center items-center text-center hover:shadow-md transition">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-[#607d8b]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Need to see a doctor?</h2>
                    <p className="text-gray-500 mb-6 text-sm">Check live wait times and book smart.</p>
                    <Link href="/dashboard/patient/find-clinics" className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-bold hover:bg-gray-200 transition">
                        Find Clinics Nearby
                    </Link>
                </div>
            </div>
        </div>
    );
}
