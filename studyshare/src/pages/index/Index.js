// src/pages/index/Index.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Index.module.scss";

export default function Index() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>StudyShare — Compartir, aprender, ayudar</h1>
        <p className={styles.subtitle}>
          Plataforma para que estudiantes y profesores suban tareas, pidan ayuda y colaboren en tiempo real.
        </p>

        <div className={styles.actions}>
          <Link to="/register" className={styles.btnPrimary}>Crear cuenta</Link>
          <Link to="/login" className={styles.btnGhost}>Iniciar sesión</Link>
        </div>

        <section className={styles.features}>
          <div className={styles.card}>
            <h3>Publica tareas</h3>
            <p>Sube tus tareas o dudas y recibe ayuda de la comunidad.</p>
          </div>
          <div className={styles.card}>
            <h3>Chat en tiempo real</h3>
            <p>Comunícate al instante con estudiantes y profesores.</p>
          </div>
          <div className={styles.card}>
            <h3>Filtrado por materia</h3>
            <p>Organiza y busca tareas por asignatura o urgencia.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
