import React, { useState } from "react";

/**
 * TreeNode.jsx
 * Props:
 *  - nodo: instancia de Nodo con nodo.valor.title, nodo.valor.link, nodo.hijos[]
 */
function TreeNode({ nodo }) {
  const [open, setOpen] = useState(false);
  const hasKids = nodo.hijos && nodo.hijos.length > 0;

  return (
    <li className="menu-item">
      <div
        className={`menu-link ${open ? "active" : ""}`}
        onClick={() => hasKids ? setOpen(!open) : null}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" && hasKids) setOpen(!open); }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* icono simple tipo bullet */}
          <span style={{
            width: 8,
            height: 8,
            borderRadius: 2,
            background: "rgba(255,255,255,0.95)",
            display: "inline-block",
            marginRight: 6
          }} />
          <span>{nodo.valor.title}</span>
        </div>

        <div className="meta">
          {hasKids ? (
            <span className={`chev ${open ? "open" : ""}`} aria-hidden>
              ▶
            </span>
          ) : (
            <a href={nodo.valor.link} style={{ color: "rgba(255,255,255,0.95)", textDecoration: "none" }}>
              ver
            </a>
          )}
        </div>
      </div>

      {/* Submenu: controlamos la altura para animación */}
      {hasKids && (
        <ul
          className="submenu"
          style={{
            maxHeight: open ? `${nodo.hijos.length * 56}px` : "0px",
            opacity: open ? 1 : 0.0
          }}
        >
          {nodo.hijos.map((h, idx) => (
            <TreeNode key={idx} nodo={h} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default TreeNode;
