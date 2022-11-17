// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBv5gauhs5MrwNdA9LV-hBDGDn7JYZGKfE",
  authDomain: "choices-dev.firebaseapp.com",
  projectId: "choices-dev",
  storageBucket: "choices-dev.appspot.com",
  messagingSenderId: "348255057823",
  appId: "1:348255057823:web:ee41d84d407d8e1b06afaa",
  measurementId: "G-M8VZKHT6C9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

export default app;
