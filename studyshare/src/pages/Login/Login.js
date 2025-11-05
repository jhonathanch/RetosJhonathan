// src/pages/Login/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(cred.user));
      navigate("/dashboard");
    } catch (err) {
      setMsg("Error al iniciar sesión. Revisa tus credenciales.");
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="email"
            placeholder="Correo institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className={styles.btnPrimary} type="submit">Entrar</button>
        </form>
        {msg && <p className={styles.error}>{msg}</p>}
        <p className={styles.linkRow}>
          ¿No tienes cuenta? <Link to="/register">Crear cuenta</Link>
        </p>
      </div>
    </div>
  );
}
