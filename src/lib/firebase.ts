import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBqvj-n3rXNc9X_nxcD0IUa7zZAiLW_jI",
    authDomain: "flowcare-prototype.firebaseapp.com",
    projectId: "flowcare-prototype",
    storageBucket: "flowcare-prototype.firebasestorage.app",
    messagingSenderId: "359161389605",
    appId: "1:359161389605:web:b0a084612b538ae28255cc",
    measurementId: "G-793Q1XF5WG"
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
