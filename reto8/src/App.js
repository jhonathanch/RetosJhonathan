import React, { useState } from "react";
import "./App.css";

class Stack {
  constructor() {
    this.items = [];
  }

  // Agregar un libro al tope de la pila
  push(libro) {
    this.items.push(libro);
  }

  // Eliminar un libro del tope de la pila
  pop() {
    return this.items.pop();
  }

  // Verificar si la pila está vacía
  isEmpty() {
    return this.items.length === 0;
  }

  // Cantidad de libros en la pila
  size() {
    return this.items.length;
  }

  // Imprimir los elementos de arriba a abajo
  print() {
    return [...this.items].reverse();
  }

  // Mostrar el libro en el tope sin eliminarlo
  peek() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : null;
  }
}

function App() {
  const [stack] = useState(new Stack()); // Crear la pila
  const [newBook, setNewBook] = useState({
    name: "",
    isbn: "",
    author: "",
    editorial: "",
  });
  const [books, setBooks] = useState([]); // Lista de libros en la pila

  // Manejar cambios del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // Agregar libro a la pila (push)
  const handleAddBook = (e) => {
    e.preventDefault();
    if (
      !newBook.name ||
      !newBook.isbn ||
      !newBook.author ||
      !newBook.editorial
    ) {
      alert("Por favor llene todos los campos");
      return;
    }
    stack.push(newBook);
    setBooks(stack.print());
    setNewBook({
      name: "",
      isbn: "",
      author: "",
      editorial: "",
    });
  };

  // Eliminar libro del tope (pop)
  const handlePop = () => {
    if (stack.isEmpty()) {
      alert("No hay libros en la pila");
      return;
    }
    stack.pop();
    setBooks(stack.print());
  };

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>libros Stack (LIFO)</h1>
      <p>
        Este reto 8 representa una <strong>Pila (Stack)</strong>,
      </p>

      {/*  Formulario */}
      <form onSubmit={handleAddBook} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del libro"
          value={newBook.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={newBook.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="editorial"
          placeholder="Editorial"
          value={newBook.editorial}
          onChange={handleChange}
        />
        <button type="submit">Agregar Libro</button>
      </form>

      <button onClick={handlePop} style={{ marginBottom: "20px" }}>
        Quitar libro superior (pop)
      </button>

      {/*  Mostrar pila */}
      <h2>Pila actual ({stack.size()} libros)</h2>
      {books.length === 0 ? (
        <p>La pila está vacía</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {books.map((libro, index) => (
            <li
              key={index}
              style={{
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: index === 0 ? "#e3f7e3" : "#f9f9f9",
              }}
            >
              <strong>{libro.name}</strong> <br />
              ISBN: {libro.isbn} <br />
              Autor: {libro.author} <br />
              Editorial: {libro.editorial}
            </li>
          ))}
        </ul>
      )}

      {/* Peek */}
      {stack.peek() && (
        <p>
          Libro en el tope: <strong>{stack.peek().name}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
