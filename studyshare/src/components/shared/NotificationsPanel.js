// src/components/shared/NotificationsPanel.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { popNotification, clearNotifications } from "../../redux/slices/notificationsSlice";

export default function NotificationsPanel() {
  const stack = useSelector((s) => s.notifications.stack || []);
  const dispatch = useDispatch();

  return (
    <div style={{background:'var(--card-bg)', padding:16, borderRadius:10, boxShadow: 'var(--shadow)'}}>
      <h4>Notificaciones (pila)</h4>
      <button onClick={() => dispatch(popNotification())} style={{marginRight:8}}>Sacar última</button>
      <button onClick={() => dispatch(clearNotifications())}>Limpiar</button>

      <ul style={{marginTop:12}}>
        {stack.slice().reverse().map((n, i) => (
          <li key={i} style={{padding:8, borderBottom:'1px solid #eee'}}>{n.message || n}</li>
        ))}
      </ul>
    </div>
  );
}
