import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
// Using environment variables for security
const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyCqXV8MFWkJsvXJKTC9uVexZgVjE5DTB-c",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "softcore-technologies.firebaseapp.com",
  projectId:
    import.meta.env.VITE_FIREBASE_PROJECT_ID || "softcore-technologies",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "softcore-technologies.firebasestorage.app",
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "249801652933",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:249801652933:web:f3ed022cc4be75616b8eac",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
