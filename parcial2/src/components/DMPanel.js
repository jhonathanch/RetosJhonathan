import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enqueueMessage, dequeueMessage } from "../store/dmSlice";

export default function DMPanel() {
  const [message, setMessage] = useState("");

  const dmQueue = useSelector(
    (state) => state.directMessages?.queue || []
  );

  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim() !== "") {
      dispatch(enqueueMessage(message));
      setMessage("");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Mensajes Directos (Cola)</h2>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe un mensaje directo..."
        style={styles.input}
      />

      <div>
        <button onClick={handleSend} style={styles.button}>
          Enviar a cola
        </button>
        <button
          onClick={() => dispatch(dequeueMessage())}
          style={{ ...styles.button, backgroundColor: "#880e0e" }}
        >
          Enviar siguiente
        </button>
      </div>

      <ul style={styles.list}>
        {dmQueue.map((msg, i) => (
          <li key={i} style={styles.item}>
            {msg}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#fff5f5",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    margin: "20px auto",
    width: "90%",
    maxWidth: "600px",
    textAlign: "center",
  },
  input: {
    width: "80%",
    padding: "8px",
    borderRadius: "5px",
    marginRight: "10px",
  },
  button: {
    backgroundColor: "#b71c1c",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    marginRight: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "15px",
  },
  item: {
    backgroundColor: "#ffcdd2",
    padding: "8px",
    borderRadius: "6px",
    marginBottom: "5px",
  },
};

