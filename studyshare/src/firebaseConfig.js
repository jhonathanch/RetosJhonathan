import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxF0Zl9sv8ECCNIEkuK6aUE32GJpCui-c",
  authDomain: "ejemplo-d0e6a.firebaseapp.com",
  projectId: "ejemplo-d0e6a",
  storageBucket: "ejemplo-d0e6a.appspot.com",
  messagingSenderId: "214020926231",
  appId: "1:214020926231:web:0385b1bd803ba18ed3e552",
  measurementId: "G-YWZQGBKX4R"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
