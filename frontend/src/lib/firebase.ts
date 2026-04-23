import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCqXV8MFWkJsvXJKTC9uVexZgVjE5DTB-c",
  authDomain: "softcore-technologies.firebaseapp.com",
  projectId: "softcore-technologies",
  storageBucket: "softcore-technologies.firebasestorage.app",
  messagingSenderId: "249801652933",
  appId: "1:249801652933:web:f3ed022cc4be75616b8eac",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
