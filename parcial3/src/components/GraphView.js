// GraphView.js
import React from "react";
import { Graph } from "react-d3-graph";

export default function GraphView({ graph }) {

    const data = graph.getGraphData();

    const config = {
        nodeHighlightBehavior: true,
        node: {
            size: 400,
            labelProperty: "id",
            color: "#6fe675", // verde futurista suave
        },
        link: {
            strokeWidth: 2,
        },
        height: 500,
        width: 700,
    };

    return (
        <div style={{ background: "#0f0f0f", padding: "20px", borderRadius: "10px" }}>
            <Graph
                id="graph-id"
                data={data}
                config={config}
            />
        </div>
    );
}
