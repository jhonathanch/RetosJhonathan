import React from "react";
import Sidebar from "./components/Sidebar";
import menuTree from "./data/menuTree";
import "./App.css";


function App(){
  return (
    <div className="app-wrapper">
      <Sidebar raiz={menuTree} />
      <main className="main-content">
        <div className="card">
          <h1>Panel del reto 15</h1>
          <p>Jhonathan chicaiza herrera.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
