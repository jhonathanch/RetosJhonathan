import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "./contadorSlice2";

export default function contador3() {
  const count = useSelector((state) => state.contador3.value);
  const dispatch = useDispatch();

  const askAndIncrement = () => {
    const value = parseInt(prompt("¿Cuánto quieres incrementar?"), 10);
    if (!isNaN(value)) {
      dispatch(incrementBy(value));
    }
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={askAndIncrement}>Incrementar por valor</button>
    </div>
  );
}
