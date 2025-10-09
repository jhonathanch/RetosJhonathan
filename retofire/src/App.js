import React from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { Login } from "./components/login.js";
import { Register } from "./components/Register.js";
import { LogoutButton } from "./components/logout.js";

const Profile = () => {
  const { status, email, displayName, photoURL } = useSelector((state) => state.auth);

  if (status !== 'authenticated') return null;

  return (
    <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
      <h4>Perfil</h4>
      <p><strong>Nombre:</strong> {displayName}</p>
      <p><strong>Email:</strong> {email}</p>
      {photoURL && <img src={photoURL} alt="user" width={80} />}
    </div>
  );
};

function AppContent() {
  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20, display: 'grid', gap: 12 }}>
      <h2>Firebase Login + Redux (ejemplo)</h2>
      <div style={{ display: 'flex', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <Login />
          <Register />
        </div>
        <div style={{ width: 300 }}>
          <Profile />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}