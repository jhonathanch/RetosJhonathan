import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Menu from "./components/shared/Menu";
import "./styles/app.module.scss";

export default function App() {
  return (
    <div>
      <Menu />
      <AppRoutes />
    </div>
  );
}

