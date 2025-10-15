import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Header from "./components/Header";
import PostsPanel from "./components/PostsPanel";
import DMPanel from "./components/DMPanel";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./styles/app.css";

function App() {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <div className="auth-container">
        {isRegistering ? (
          <RegisterForm onRegisterSuccess={() => setIsRegistering(false)} />
        ) : (
          <>
            <LoginForm />
            <p className="switch-text">
              ¿No tienes cuenta?
              <button
                onClick={() => setIsRegistering(true)}
                className="switch-btn"
              >
                Registrarte
              </button>
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="main-container">
      <Header />
      <button onClick={() => signOut(auth)} className="logout-btn">
        Cerrar sesión
      </button>
      <PostsPanel />
      <DMPanel />
    </div>
  );
}

export default App;

