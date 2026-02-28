'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';

const mockClinics = [
    { id: 1, name: "Sahyadri Super Speciality Hospital", specialty: "General Practice", address: "Deccan Gymkhana, Pune", distance: "1.5 km", rating: 4.8, traffic: "LOW", waitTime: "< 10 mins" },
    { id: 2, name: "Jehangir Hospital", specialty: "Urgent Care", address: "Sasoon Road, Pune", distance: "3.2 km", rating: 4.7, traffic: "MODERATE", waitTime: "20 - 30 mins" },
    { id: 3, name: "KEM Hospital", specialty: "Pediatrics", address: "Rasta Peth, Pune", distance: "4.0 km", rating: 4.5, traffic: "HIGH", waitTime: "> 45 mins" },
    { id: 4, name: "Deenanath Mangeshkar Hospital", specialty: "Dermatology", address: "Erandwane, Pune", distance: "2.5 km", rating: 4.9, traffic: "LOW", waitTime: "< 15 mins" },
    { id: 5, name: "Ruby Hall Clinic", specialty: "General Practice", address: "Dhole Patil Road, Pune", distance: "5.1 km", rating: 4.6, traffic: "LOW", waitTime: "< 10 mins" },
    { id: 6, name: "Aditya Birla Memorial Hospital", specialty: "Cardiology", address: "Chinchwad, Pune", distance: "15.0 km", rating: 4.8, traffic: "MODERATE", waitTime: "15 - 25 mins" }
];

export default function FindClinicsPage() {
    const { user } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [specialtyFilter, setSpecialtyFilter] = useState('All Specialties');
    const [bookingClinic, setBookingClinic] = useState<any | null>(null);
    const [bookingSuccess, setBookingSuccess] = useState('');
    const [bookingLoading, setBookingLoading] = useState(false);

    const filteredClinics = mockClinics.filter(clinic => {
        const matchesSearch = clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            clinic.address.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = specialtyFilter === 'All Specialties' || clinic.specialty === specialtyFilter;
        return matchesSearch && matchesSpecialty;
    });

    const getTrafficStyles = (level: string) => {
        if (level === 'LOW') return { bg: 'bg-green-100', text: 'text-green-800' };
        if (level === 'MODERATE') return { bg: 'bg-yellow-100', text: 'text-yellow-800' };
        return { bg: 'bg-red-100', text: 'text-red-800' };
    };

    const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!user || !bookingClinic) return;

        setBookingLoading(true);
        setBookingSuccess('');

        try {
            // Mock delayed booking
            await new Promise(resolve => setTimeout(resolve, 800));

            setBookingSuccess(`Your appointment at ${bookingClinic.name} has been requested.`);
            setTimeout(() => {
                setBookingClinic(null);
                setBookingSuccess('');
            }, 3000);
        } catch (error) {
            console.error('Error booking appointment', error);
            alert('Failed to book appointment. Please try again.');
        } finally {
            setBookingLoading(false);
        }
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Clinics: Live Traffic</h1>
                <p className="text-gray-500">Search for nearby medical facilities and book your visit intelligently.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <input
                    type="text"
                    placeholder="Search clinic name or location..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600/80 focus:outline-none"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600/80 focus:outline-none bg-white"
                    value={specialtyFilter}
                    onChange={e => setSpecialtyFilter(e.target.value)}
                >
                    <option>All Specialties</option>
                    <option>General Practice</option>
                    <option>Urgent Care</option>
                    <option>Pediatrics</option>
                    <option>Dermatology</option>
                    <option>Cardiology</option>
                </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClinics.map(clinic => {
                    const trafficStyle = getTrafficStyles(clinic.traffic);
                    return (
                        <div key={clinic.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-gray-800">{clinic.name}</h3>
                                    <span className="flex items-center text-sm font-semibold text-yellow-500">
                                        <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        {clinic.rating}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-1">{clinic.specialty}</p>
                                <p className="text-gray-500 text-sm mb-4">{clinic.address} • {clinic.distance}</p>

                                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border mb-4">
                                    <div className="text-center">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Traffic</p>
                                        <span className={`px-2 py-1 text-xs font-bold rounded-md ${trafficStyle.bg} ${trafficStyle.text}`}>{clinic.traffic}</span>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Est. Wait</p>
                                        <span className="font-bold text-gray-800">{clinic.waitTime}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setBookingClinic(clinic)}
                                    className="w-full py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Booking Modal */}
            {bookingClinic && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
                        <button
                            onClick={() => setBookingClinic(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Appointment</h2>
                        <p className="text-gray-600 mb-6 font-medium">{bookingClinic.name}</p>

                        {bookingSuccess && (
                            <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-6 border border-green-200">
                                {bookingSuccess}
                            </div>
                        )}

                        {!bookingSuccess && (
                            <form onSubmit={handleBooking} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                    <input type="date" name="date" required className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600/80 outline-none" defaultValue={new Date().toISOString().split('T')[0]} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Time Slot</label>
                                    <select name="time" required className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600/80 outline-none bg-white">
                                        <option>10:00 AM - 10:30 AM</option>
                                        <option>11:30 AM - 12:00 PM</option>
                                        <option>02:00 PM - 02:30 PM</option>
                                        <option>04:30 PM - 05:00 PM</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Reason (Optional)</label>
                                    <input type="text" name="note" placeholder="E.g. Fever, Follow-up" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600/80 outline-none" />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={bookingLoading}
                                        className={`w-full py-3 flowcare-primary text-white font-bold rounded-lg shadow hover:bg-opacity-90 transition ${bookingLoading ? 'opacity-70' : ''}`}
                                    >
                                        {bookingLoading ? 'Requesting...' : 'Confirm Request'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
