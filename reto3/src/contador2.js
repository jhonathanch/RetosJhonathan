import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./contadorSlice";

export default function contador2() {
  const count = useSelector((state) => state.contador2.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contador2: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
    </div>
  );
}
