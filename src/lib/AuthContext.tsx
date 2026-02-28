'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface User {
    uid: string;
    email: string | null;
}

interface AuthContextType {
    user: User | null;
    role: 'patient' | 'provider' | null;
    loading: boolean;
    loginMock: (user: User, role: 'patient' | 'provider') => void;
    logoutMock: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    role: null,
    loading: true,
    loginMock: () => { },
    logoutMock: () => { },
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [role, setRole] = useState<'patient' | 'provider' | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock auth state check
        const storedUser = localStorage.getItem('mock_user');
        const storedRole = localStorage.getItem('mock_role');

        if (storedUser && (storedRole === 'patient' || storedRole === 'provider')) {
            try {
                setUser(JSON.parse(storedUser));
                setRole(storedRole);
            } catch (e) {
                console.error("Failed to parse stored user", e);
            }
        }
        setLoading(false);
    }, []);

    const loginMock = (newUser: User, newRole: 'patient' | 'provider') => {
        setUser(newUser);
        setRole(newRole);
        localStorage.setItem('mock_user', JSON.stringify(newUser));
        localStorage.setItem('mock_role', newRole);
    };

    const logoutMock = () => {
        setUser(null);
        setRole(null);
        localStorage.removeItem('mock_user');
        localStorage.removeItem('mock_role');
    };

    return (
        <AuthContext.Provider value={{ user, role, loading, loginMock, logoutMock }}>
            {children}
        </AuthContext.Provider>
    );
}
