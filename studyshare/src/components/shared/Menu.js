// src/components/shared/Menu.jsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Menu.module.scss";

export default function Menu() {
  return (
    <>
      <Header />
      <nav style={{ background: "var(--primary)", padding: "8px 0" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", display:"flex", gap:20, alignItems:"center", padding:"0 16px" }}>
          <Link to="/" style={{ color: "white", fontWeight:700 }}>Inicio</Link>
          <Link to="/dashboard" style={{ color: "white" }}>Tareas</Link>
          <Link to="/chat" style={{ color: "white" }}>Chat</Link>
          <Link to="/profile" style={{ color: "white" }}>Perfil</Link>
        </div>
      </nav>
    </>
  );
}

