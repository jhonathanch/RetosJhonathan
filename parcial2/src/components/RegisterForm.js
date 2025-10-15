import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/app.css";

const RegisterForm = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onRegisterSuccess?.();
    } catch (err) {
      console.error("Error al registrar:", err);
      if (err.code === "auth/email-already-in-use") {
        setError("El correo ya está en uso. Intenta iniciar sesión.");
      } else if (err.code === "auth/invalid-email") {
        setError("Correo electrónico no válido.");
      } else if (err.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres.");
      } else {
        setError("Error al registrar el usuario.");
      }
    }
  };

  return (
    <div className="container">
      <h2>Registro Institucional</h2>
      <form onSubmit={handleRegister} className="form">
        <input
          type="email"
          placeholder="Correo institucional"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default RegisterForm;
