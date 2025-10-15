import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/app.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Registrarse" : "Iniciar sesión"}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Correo UAO"
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
        <button type="submit">
          {isRegistering ? "Registrar cuenta" : "Entrar"}
        </button>
      </form>
      <p className="toggle-text">
        {isRegistering ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
        <span onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Inicia sesión aquí" : "Regístrate aquí"}
        </span>
      </p>
    </div>
  );
}

