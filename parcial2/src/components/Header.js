import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const notifications = useSelector((state) => state.notifications);

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Red Social UAO</h1>
      <p style={styles.counter}>Notificaciones: {notifications.length}</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#b71c1c",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0",
    borderBottom: "3px solid #880e0e",
  },
  title: {
    margin: "5px 0",
  },
  counter: {
    fontSize: "1rem",
  },
};
