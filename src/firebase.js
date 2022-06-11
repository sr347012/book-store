// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPNdvGT6dsaBJOvNsik5fPjLFLcagcig8",
  authDomain: "react-book-store-b36d4.firebaseapp.com",
  projectId: "react-book-store-b36d4",
  storageBucket: "react-book-store-b36d4.appspot.com",
  messagingSenderId: "102742690870",
  appId: "1:102742690870:web:69bbf8e072da216deedc97",
  measurementId: "G-MHDL5V7J8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;