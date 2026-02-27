'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import Link from 'next/link';

export default function ProviderDashboardHome() {
    const { user } = useAuth();
    const [requests, setRequests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Hardcoded for the prototype based on FlowCare index.html
    const clinicId = 2; // Jehangir Hospital

    useEffect(() => {
        if (!user) return;

        const q = query(
            collection(db, 'appointments'),
            where('clinicId', '==', clinicId),
            where('status', '==', 'pending'),
            orderBy('timestamp', 'asc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const requestsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setRequests(requestsData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user]);

    const handleUpdateStatus = async (appointmentId: string, newStatus: string) => {
        try {
            const apptRef = doc(db, 'appointments', appointmentId);
            await updateDoc(apptRef, { status: newStatus });
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status.');
        }
    };

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 border-t-4 border-[#607d8b]">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Provider Dashboard</h1>
                <p className="text-gray-500">Manage incoming requests and clinic flow.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase">Pending Requests</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">{requests.length}</h3>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">Incoming Appointment Requests</h2>
                    <Link href="/dashboard/provider/queue" className="text-sm font-semibold flowcare-accent-text hover:underline">
                        Go to Active Queue &rarr;
                    </Link>
                </div>

                {loading ? (
                    <div className="p-8 text-center text-gray-500 animate-pulse">
                        Loading requests...
                    </div>
                ) : requests.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        No new appointment requests waiting for approval.
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {requests.map((req) => (
                            <div key={req.id} className="p-6 transition hover:bg-gray-50">
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">{req.patientName || 'Patient'}</h3>
                                        <div className="flex items-center text-sm text-gray-600 space-x-4">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                {req.date} at {req.time}
                                            </span>
                                            {req.note && (
                                                <span className="flex items-center text-gray-500 italic">
                                                    "{req.note}"
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => handleUpdateStatus(req.id, 'waiting')}
                                            className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 shadow-sm transition"
                                        >
                                            Approve to Queue
                                        </button>
                                        <button
                                            onClick={() => handleUpdateStatus(req.id, 'denied')}
                                            className="px-4 py-2 bg-red-100 text-red-700 font-medium rounded-lg hover:bg-red-200 transition"
                                        >
                                            Deny
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
