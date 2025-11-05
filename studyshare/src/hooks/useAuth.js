// src/hooks/useAuth.js
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../redux/slices/authSlice";

export default function useAuth() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) dispatch(setUser(u));
      else dispatch(clearUser());
    });
    return () => unsub();
  }, [dispatch]);
}
