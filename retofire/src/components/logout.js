import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutFirebase } from "../store/slices/thunks";

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutFirebase());
  };

  return (
    <div style={{ marginTop: 12 }}>
      <button onClick={handleLogout} disabled={status === 'checking'}>Cerrar sesión</button>
    </div>
  );
};
