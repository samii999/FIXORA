// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_cA4gbFrQeqPpmYQUOy09SoCASAav_bU",
  authDomain: "fixora-6e85b.firebaseapp.com",
  projectId: "fixora-6e85b",
  storageBucket: "fixora-6e85b.firebasestorage.app",
  messagingSenderId: "477321569879",
  appId: "1:477321569879:web:7dde80c83b9f1977252512",
  measurementId: "G-XXNLKQREBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);