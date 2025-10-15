import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../redux/slices/userSlice";


export default function AuthPanel() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [mode, setMode] = useState("login");
const dispatch = useDispatch();


useEffect(() => {
const unsub = auth.onAuthStateChanged((u) => {
if (u) dispatch(setUser({ uid: u.uid, email: u.email }));
else dispatch(clearUser());
});
return () => unsub();
}, [dispatch]);


const submit = async (e) => {
e.preventDefault();
try {
if (mode === "login") await auth.signInWithEmailAndPassword(email, password);
else await auth.createUserWithEmailAndPassword(email, password);
} catch (err) {
alert(err.message);
}
};


return (
<div className="card auth">
<form onSubmit={submit}>
<input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
<input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
<div className="actions">
<button type="submit">{mode === "login" ? "Entrar" : "Registrarse"}</button>
<button type="button" onClick={() => setMode(mode === "login" ? "register" : "login")}>
{mode === "login" ? "Crear cuenta" : "Ya tengo cuenta"}
</button>
</div>
</form>
</div>
);
}