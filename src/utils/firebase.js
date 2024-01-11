// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnJQZjg_o7pttNVRsvJF6aBhvonV5V6n8",
  authDomain: "netflixgpt89.firebaseapp.com",
  projectId: "netflixgpt89",
  storageBucket: "netflixgpt89.appspot.com",
  messagingSenderId: "101493628877",
  appId: "1:101493628877:web:251774b7115a7d5194ae84",
  measurementId: "G-SV6YSGYDHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();