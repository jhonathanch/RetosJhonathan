import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enqueue, dequeue } from "../../redux/slices/dmSlice";

export default function DMPanel(){
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const queue = useSelector(s => s.dm.queue || []);

  return (
    <div className="container card">
      <h3>Mensajes directos (cola)</h3>
      <input value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Mensaje..." />
      <button onClick={()=>{ if(msg.trim()){ dispatch(enqueue(msg)); setMsg(""); }}}>Enviar a cola</button>
      <button onClick={()=>dispatch(dequeue())}>Enviar siguiente</button>

      <ul>
        {queue.map((m,i)=> <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
}
