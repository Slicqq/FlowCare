'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/AuthContext';

export default function MyAppointmentsPage() {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        // Mock data fetch
        setTimeout(() => {
            setAppointments([
                { id: '1', clinicName: 'City Central Clinic', specialty: 'General Practice', date: 'Oct 24, 2024', time: '14:30 PM', status: 'approved' },
                { id: '2', clinicName: 'Valley Health Center', specialty: 'Dermatology', date: 'Sep 15, 2024', time: '10:00 AM', status: 'completed' }
            ]);
            setLoading(false);
        }, 800);

    }, [user]);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'approved':
            case 'in_room':
            case 'waiting':
                return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase tracking-wide">Approved</span>;
            case 'pending':
                return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wide">Pending</span>;
            case 'completed':
                return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wide">Completed</span>;
            case 'denied':
                return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold uppercase tracking-wide">Denied</span>;
            default:
                return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-bold uppercase tracking-wide">{status}</span>;
        }
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">My Appointments History</h1>
                <p className="text-gray-500">Track and manage your past and upcoming clinic visits.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-gray-500 animate-pulse">
                        Loading appointment history...
                    </div>
                ) : appointments.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        You don't have any appointments yet. Head over to <strong>Find Clinics</strong> to book one.
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {appointments.map((appt) => (
                            <div key={appt.id} className="p-6 transition hover:bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-lg font-bold text-gray-800">{appt.clinicName}</h3>
                                        {getStatusBadge(appt.status)}
                                    </div>
                                    <p className="text-gray-600 font-medium mb-1">{appt.specialty}</p>
                                    <div className="text-sm text-gray-500 flex items-center gap-4">
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            {appt.date}
                                        </span>
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            {appt.time}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                                    {(appt.status === 'pending' || appt.status === 'waiting' || appt.status === 'approved') && (
                                        <button className="flex-1 md:flex-none px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 text-sm font-medium transition">
                                            Cancel
                                        </button>
                                    )}
                                    <button className="flex-1 md:flex-none px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium transition">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
