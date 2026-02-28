'use client';

import React from 'react';

export default function ProviderAnalyticsPage() {
    return (
        <div className="space-y-8">
            <div className="mb-2">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Flow Analytics & Performance</h1>
                <p className="text-gray-500">Overview of patient flow, wait times, and clinic efficiency.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Avg Wait Time</p>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-bold text-gray-800">18</h3>
                        <span className="text-sm text-gray-500 font-medium">mins</span>
                    </div>
                    <p className="text-xs text-green-600 font-medium mt-2 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                        12% decrease this week
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Appts Booked</p>
                    <h3 className="text-3xl font-bold text-gray-800">142</h3>
                    <p className="text-xs text-gray-500 font-medium mt-2">Past 7 days</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Peak Hour</p>
                    <h3 className="text-3xl font-bold text-gray-800">11 AM</h3>
                    <p className="text-xs text-gray-500 font-medium mt-2">Highest avg volume</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Flow Score</p>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-bold text-blue-600">92</h3>
                        <span className="text-sm text-gray-500 font-medium">/100</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium mt-2">Excellent flow</p>
                </div>
            </div>

            {/* Mock Chart Area */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hidden md:block">
                <h2 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">Average Daily Wait Time (Past 7 Days)</h2>

                <div className="h-64 flex items-end gap-6 justify-between px-4 pb-4 border-b border-gray-200">
                    {/* Mock Bars */}
                    {[15, 22, 18, 30, 25, 12, 18].map((val, idx) => {
                        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                        const height = `${(val / 30) * 100}%`;
                        const isPeak = val >= 25;
                        return (
                            <div key={idx} className="flex flex-col items-center flex-1 group">
                                <div className="text-xs text-gray-400 font-medium mb-2 opacity-0 group-hover:opacity-100 transition">{val}m</div>
                                <div
                                    style={{ height }}
                                    className={`w-full rounded-t-sm transition-all duration-500 ease-out ${isPeak ? 'bg-[#FFC107] hover:bg-yellow-500' : 'bg-[#607d8b] hover:bg-opacity-90'}`}
                                ></div>
                                <div className="text-sm text-gray-500 font-medium mt-3">{days[idx]}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
