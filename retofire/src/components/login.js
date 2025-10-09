import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmailPassword, loginWithGoogle } from "../store/slices/thunks";

export const Login = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const [formState, setFormState] = useState({ email: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginWithEmailPassword(formState.email, formState.password));
  };

  const onGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8 }}>
      <h3>Iniciar sesión</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input name="email" type="email" placeholder="Correo" onChange={onChange} value={formState.email} required />
        </div>
        <div style={{ marginTop: 8 }}>
          <input name="password" type="password" placeholder="Contraseña" onChange={onChange} value={formState.password} required />
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit" disabled={status === 'checking'}>Login</button>
          <button type="button" onClick={onGoogleLogin} style={{ marginLeft: 8 }}>Login con Google</button>
        </div>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};
