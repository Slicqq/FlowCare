'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/AuthContext';

export default function ProviderQueuePage() {
    const { user } = useAuth();
    const [queue, setQueue] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Walk-in form state
    const [patientName, setPatientName] = useState('');
    const [phone, setPhone] = useState('');
    const [reason, setReason] = useState('');

    // Hardcoded for the prototype based on FlowCare index.html
    const clinicId = 2; // Jehangir Hospital
    const clinicName = "Jehangir Hospital";
    const specialty = "Urgent Care";

    useEffect(() => {
        if (!user) return;

        // Mock data fetch
        setTimeout(() => {
            setQueue([
                { id: '1', patientName: 'Alice Smith', status: 'in_room', time: '09:00 AM', note: 'Follow up' },
                { id: '2', patientName: 'Bob Johnson', status: 'waiting', time: '09:30 AM', note: 'Consultation' }
            ]);
            setLoading(false);
        }, 800);

    }, [user]);

    const handleUpdateStatus = async (appointmentId: string, action: 'move' | 'complete') => {
        const newStatus = action === 'move' ? 'in_room' : 'completed';
        try {
            // Mock update
            if (action === 'complete') {
                setQueue(prev => prev.filter(q => q.id !== appointmentId));
            } else {
                setQueue(prev => prev.map(q => q.id === appointmentId ? { ...q, status: newStatus } : q));
            }
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status.');
        }
    };

    const handleAddWalkIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!patientName.trim()) return;

        try {
            // Mock add doc
            const newAppt = {
                id: 'mock-' + Date.now(),
                patientId: 'walk-in',
                patientName: patientName.trim(),
                phone: phone.trim(),
                clinicId: clinicId,
                clinicName: clinicName,
                specialty: specialty,
                date: 'Today',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                note: reason.trim() || 'Walk-in / General Check-up',
                status: 'waiting',
                timestamp: Date.now()
            };

            setQueue(prev => [...prev, newAppt]);
            setPatientName('');
            setPhone('');
            setReason('');

        } catch (error) {
            console.error('Error adding walk-in:', error);
            alert('Failed to add patient to queue.');
        }
    };

    return (
        <div className="space-y-8">
            <div className="mb-2">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Active Patient Queue</h1>
                <p className="text-gray-500">Manage patients currently in the clinic, add walk-ins, and update traffic flow.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Left Col: Queue Display */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-[#607d8b] p-4 flex justify-between items-center text-white">
                            <h2 className="text-lg font-bold">Current Queue</h2>
                            <span className="font-semibold px-3 py-1 bg-white/20 rounded-full text-sm">
                                {queue.length} Patients
                            </span>
                        </div>

                        {loading ? (
                            <div className="p-8 text-center text-gray-500 animate-pulse">
                                Loading queue...
                            </div>
                        ) : queue.length === 0 ? (
                            <div className="p-10 text-center text-gray-500">
                                The queue is currently empty.
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-100">
                                {queue.map((appt) => {
                                    const inRoom = appt.status === 'in_room';
                                    return (
                                        <div key={appt.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-200">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="text-lg font-bold text-gray-800">{appt.patientName || `Patient ${appt.patientId.substring(0, 6)}`}</h3>
                                                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${inRoom ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                                        {inRoom ? 'In Room' : 'Waiting'}
                                                    </span>
                                                </div>
                                                <p className="text-gray-500 text-sm mb-1">{appt.note || 'Consultation'}</p>
                                                <p className="text-xs text-gray-400 font-medium">Check-in time: {appt.time}</p>
                                            </div>

                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleUpdateStatus(appt.id, inRoom ? 'complete' : 'move')}
                                                    className={`px-5 py-2 text-white text-sm font-bold rounded-lg shadow-sm transition hover:bg-opacity-90 ${inRoom ? 'traffic-low-bg' : 'flowcare-accent'}`}
                                                >
                                                    {inRoom ? 'Complete' : 'Move to Room'}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Col: Add Walk-in & Traffic Controls */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#607d8b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                            Add Walk-In Patient
                        </h2>
                        <form onSubmit={handleAddWalkIn} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Patient Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#607d8b]"
                                    value={patientName}
                                    onChange={e => setPatientName(e.target.value)}
                                    placeholder="e.g. John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#607d8b]"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    placeholder="+91..."
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Reason for Visit</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#607d8b]"
                                    value={reason}
                                    onChange={e => setReason(e.target.value)}
                                    placeholder="General Check-up"
                                />
                            </div>
                            <button type="submit" className="w-full py-2 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition shadow-sm">
                                Add to Queue
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
