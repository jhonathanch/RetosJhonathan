// src/pages/Dashboard/Dashboard.jsx
import React from "react";
import PostsPanel from "../../components/posts/PostsPanel";
import DMPanel from "../../components/chat/DMPanel";
import NotificationsPanel from "../../components/shared/NotificationsPanel";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <aside className={styles.left}>
          <NotificationsPanel />
        </aside>

        <main className={styles.main}>
          <PostsPanel />
        </main>

        <aside className={styles.right}>
          <DMPanel />
        </aside>
      </div>
    </div>
  );
}
