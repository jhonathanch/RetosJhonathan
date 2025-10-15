import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxF0Zl9sv8ECCNIEkuK6aUE32GJpCui-c",
  authDomain: "ejemplo-d0e6a.firebaseapp.com",
  projectId: "ejemplo-d0e6a",
  storageBucket: "ejemplo-d0e6a.firebasestorage.app",
  messagingSenderId: "214020926231",
  appId: "1:214020926231:web:0385b1bd803ba18ed3e552",
  measurementId: "G-YWZQGBKX4R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

