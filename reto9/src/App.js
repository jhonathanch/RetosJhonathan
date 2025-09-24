import React, { useState} from "react";
import "./App.css";

class Queue {
  constructor() {
    this.items = [];
  }

  // Agrega un nuevo elemento con fecha al final de la cola
  enqueue(element) {
    this.items.push(element);
    // Ordenar automáticamente por fecha al agregar
    this.items.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  //Elimina el primer elemento (el más antiguo por fecha)
  dequeue() {
    return this.items.shift();
  }

  //Muestra el primer elemento sin eliminarlo
  peek() {
    return this.items[0];
  }

  // Número total de elementos
  size() {
    return this.items.length;
  }

  // Verifica si la cola está vacía
  isEmpty() {
    return this.items.length === 0;
  }

  // Retorna todos los elementos ordenados por fecha
  print() {
    return this.items.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
}

//crear una instancia de la cola
const queue = new Queue();

//datos iniciales 
queue.enqueue({ name: "jhonathan",amount: 100, date:"2024-07-10"});
queue.enqueue({ name: "camilo",amount: 100, date:"2024-06-15"});
queue.enqueue({ name: "muguelito",amount: 100, date:"2024-06-20"});

function App() {
  //estado para el nombre, monto y lista de personas en la cola
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(queue.print());
//manejar el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !date ) return alert("Completa todos los campos");
//agregar una nueva persona a la cola
    queue.enqueue({ name, amount: parseFloat(amount),date });
    setPeople([...queue.print()]);
    setName("");
    setAmount("");
    setDate("");
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
      <h1>Cajero Automático</h1>

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
        {/* Nuevo input para la fecha */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Agregar a la cola</button>
      </form>

      <h2>Personas en la cola (ordenadas por fecha):</h2>
      {people.length === 0 ? (
        <p>No hay personas en la cola.</p>
      ) : (
        <ul>
          {people.map((p, index) => (
            <li key={index}>
              <strong>{p.name}</strong> - Retiro: ${p.amount} - Fecha:{" "}
              {new Date(p.date).toLocaleDateString()}
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
