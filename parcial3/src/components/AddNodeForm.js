import React, { useState } from "react";

const AddNodeForm = ({ onAddCity, onAddPark, onAddEdge, graph }) => {
  const [cityName, setCityName] = useState("");
  const [parkName, setParkName] = useState("");
  const [parkDistance, setParkDistance] = useState("");
  const [parkCity, setParkCity] = useState(""); // ciudad donde estará el parque

  const [edgeA, setEdgeA] = useState("");
  const [edgeB, setEdgeB] = useState("");

  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <h2>Add Elements to Graph</h2>

      {/* ADD CITY */}
      <div>
        <h3>Add City</h3>
        <input
          type="text"
          placeholder="City name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          onClick={() => {
            if (!cityName) return;
            onAddCity(cityName);
            setCityName("");
          }}
        >
          Add City
        </button>
      </div>

      {/* ADD PARK */}
      <div style={{ marginTop: "20px" }}>
        <h3>Add Park</h3>

        <input
          type="text"
          placeholder="Park name"
          value={parkName}
          onChange={(e) => setParkName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Distance"
          value={parkDistance}
          onChange={(e) => setParkDistance(e.target.value)}
        />

        {/* seleccionar la ciudad donde se ubica el parque */}
        <select
          value={parkCity}
          onChange={(e) => setParkCity(e.target.value)}
        >
          <option value="">Select City</option>
          {graph.cities.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            if (!parkName || !parkDistance || !parkCity) return;

            onAddPark({
              name: parkName,
              distance: parkDistance,
              city: parkCity,
            });

            setParkName("");
            setParkDistance("");
            setParkCity("");
          }}
        >
          Add Park
        </button>
      </div>

      {/* ADD EDGE */}
      <div style={{ marginTop: "20px" }}>
        <h3>Create Connection</h3>

        <select onChange={(e) => setEdgeA(e.target.value)}>
          <option>Select A</option>
          {graph.nodes.map((n) => (
            <option key={n.id} value={n.id}>
              {n.id}
            </option>
          ))}
        </select>

        <select onChange={(e) => setEdgeB(e.target.value)}>
          <option>Select B</option>
          {graph.nodes.map((n) => (
            <option key={n.id} value={n.id}>
              {n.id}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            if (!edgeA || !edgeB) return;
            onAddEdge(edgeA, edgeB);
          }}
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default AddNodeForm;
