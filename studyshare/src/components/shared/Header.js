// src/components/shared/Header.jsx
import React from "react";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

export default function Header() {
  const notifCount = useSelector((s) => s.notifications.stack?.length || 0);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>StudyShare</div>
        <div className={styles.right}>
          <div className={styles.search}>
            <input placeholder="Buscar tareas, materias..." />
          </div>
          <div className={styles.badge}>Notificaciones: <strong>{notifCount}</strong></div>
        </div>
      </div>
    </header>
  );
}
