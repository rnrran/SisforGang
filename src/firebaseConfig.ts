// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDVbEZKcjuLbSHvaRedSEk4cjVUgmxm9VU",
  authDomain: "sisforgang.firebaseapp.com",
  projectId: "sisforgang",
  storageBucket: "sisforgang.firebasestorage.app",
  messagingSenderId: "1045575650361",
  appId: "1:1045575650361:web:3fae69dfb99e44094e91e8"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider()