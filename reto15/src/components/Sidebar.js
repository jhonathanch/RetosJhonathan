import React from "react";
import TreeNode from "./TreeNode";

function Sidebar({ raiz }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div>
          <h2>Portal Universitario</h2>
          <div style={{ fontSize: 12, opacity: 0.9 }}>Menú académico</div>
        </div>
      </div>

      <nav>
        <ul className="menu-root">
          {/* mostramos los hijos directos del root, asumiendo root es un contenedor */}
          {raiz.hijos.map((n, i) => (
            <TreeNode key={i} nodo={n} />
          ))}
        </ul>
      </nav>

      <div style={{ marginTop: 18, fontSize: 12, opacity: 0.95 }}>
        <div style={{ marginBottom: 6 }}>Usuario: Jhonathan C.</div>
        <div style={{ fontSize: 11, opacity: 0.8 }}>Sesión activa</div>
      </div>
    </aside>
  );
}

export default Sidebar;
