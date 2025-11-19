// App.js
import React, { useState } from "react";
import { Graph } from "./models";
import GraphView from "./components/GraphView";
import "./styles.css";

const globalGraph = new Graph();

export default function App() {
    const [cityName, setCityName] = useState("");

    const [newPark, setNewPark] = useState({
        name: "",
        distance: "",
        city: ""
    });

    // Add City
    const handleAddCity = () => {
        if (!cityName) return;
        globalGraph.addCity({ name: cityName });
        setCityName("");
    };

    // Add Park
    const handleAddPark = () => {
        if (!newPark.name || !newPark.distance || !newPark.city) return;
        globalGraph.addPark(newPark);
        setNewPark({ name: "", distance: "", city: "" });
    };

    return (
        <div className="main-container">
            <h1>Network of Cities and Parks</h1>

            {/* Add City */}
            <div className="panel">
                <h2>Add City</h2>
                <input
                    placeholder="City name"
                    value={cityName}
                    onChange={e => setCityName(e.target.value)}
                />
                <button onClick={handleAddCity}>Add City</button>
            </div>

            {/* Add Park */}
            <div className="panel">
                <h2>Add Park</h2>
                <input
                    placeholder="Park name"
                    value={newPark.name}
                    onChange={e => setNewPark({ ...newPark, name: e.target.value })}
                />

                <input
                    placeholder="Distance"
                    value={newPark.distance}
                    onChange={e => setNewPark({ ...newPark, distance: e.target.value })}
                />

                <select
                    value={newPark.city}
                    onChange={e => setNewPark({ ...newPark, city: e.target.value })}
                >
                    <option value="">Select City</option>
                    {globalGraph.cities.map(c => (
                        <option key={c.name} value={c.name}>
                            {c.name}
                        </option>
                    ))}
                </select>

                <button onClick={handleAddPark}>Add Park</button>
            </div>

            {/* Graph View */}
            <GraphView graph={globalGraph} />
        </div>
    );
}

