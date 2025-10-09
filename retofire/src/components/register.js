import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAuth } from "../store/slices/thunks";

export const Register = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const [formState, setFormState] = useState({ email: "", password: "", displayName: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAuth(formState.email, formState.password, formState.displayName));
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8 }}>
      <h3>Registro</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input name="displayName" placeholder="Nombre" onChange={onChange} value={formState.displayName} required />
        </div>
        <div style={{ marginTop: 8 }}>
          <input name="email" type="email" placeholder="Correo" onChange={onChange} value={formState.email} required />
        </div>
        <div style={{ marginTop: 8 }}>
          <input name="password" type="password" placeholder="Contraseña" onChange={onChange} value={formState.password} required />
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit" disabled={status === 'checking'}>Registrarse</button>
        </div>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};
