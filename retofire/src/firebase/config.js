// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import authReducer from "./slices/authSlice";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxF0Zl9sv8ECCNIEkuK6aUE32GJpCui-c",
  authDomain: "ejemplo-d0e6a.firebaseapp.com",
  projectId: "ejemplo-d0e6a",
  storageBucket: "ejemplo-d0e6a.firebasestorage.app",
  messagingSenderId: "214020926231",
  appId: "1:214020926231:web:0385b1bd803ba18ed3e552",
  measurementId: "G-YWZQGBKX4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };