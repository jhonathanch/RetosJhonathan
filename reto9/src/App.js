import React, { useState} from "react";
import "./App.css";

class Queue {
  constructor() {
    this.items = [];
  }
  //agrega un nuevo elemento al final de la cola
   enqueue(element) {
    this.items.push(element);
  }
// elimina el primer elemento de la cola
  dequeue() {
    return this.items.shift();
  }
//muestra el primer elemento de la cola
  peek() {
    return this.items[0];
  }
//cantidad de elementos en la cola
  size() {
    return this.items.length;
  }
//verifica si la cola está vacía
  isEmpty() {
    return this.items.length === 0;
  }
//imprime los elementos de la cola
  print() {
    return this.items;
  }
}
//crear una instancia de la cola
const queue = new Queue();

//datos iniciales 
queue.enqueue({ name: "jhonathan",amount: 100});
queue.enqueue({ name: "camilo",amount: 100});
queue.enqueue({ name: "muguelito",amount: 100});

function App() {
  //estado para el nombre, monto y lista de personas en la cola
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [people, setPeople] = useState(queue.print());
//manejar el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return alert("Completa todos los campos");
//agregar una nueva persona a la cola
    queue.enqueue({ name, amount: parseFloat(amount) });
    setPeople([...queue.print()]);
    setName("");
    setAmount("");
  };
//atender a la siguiente persona en la cola
   const handleServeNext = () => {
    if (queue.isEmpty()) {
      alert("La cola está vacía");
      return;
    }
    const served = queue.dequeue();
    alert(`${served.name} ha sido atendido. Retiró $${served.amount}`);
    setPeople([...queue.print()]);
  };
   return (
    <div className="App">
      <h1>Cajero</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Monto a retirar"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Agregar a la cola</button>
      </form>

      <h2> Personas en la cola:</h2>
      {people.length === 0 ? (
        <p>No hay personas en la cola.</p>
      ) : (
        <ul>
          {people.map((p, index) => (
            <li key={index}>
              <strong>{p.name}</strong> - Retiro: ${p.amount}
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleServeNext} disabled={queue.isEmpty()}>
        Atender siguiente persona
      </button>
    </div>
  );
}

export default App;
