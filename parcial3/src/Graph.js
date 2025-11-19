// ----------------- GRAPH MODEL -----------------
export class Graph {
    constructor() {
        this.nodes = [];      // [{ id, type }]
        this.edges = [];      // [{ source, target }]
        this.cities = [];     // [{ name }]
        this.parks = [];      // [Park]
    }

    // ----------------- CITY METHODS -----------------
    addCity(cityObj) {
        this.cities.push(cityObj);
        this.nodes.push({ id: cityObj.name, type: "city" });
    }

    deleteCity(cityName) {
        this.cities = this.cities.filter(c => c.name !== cityName);
        this.parks = this.parks.filter(p => p.city !== cityName);

        this.nodes = this.nodes.filter(n => n.id !== cityName);
        this.edges = this.edges.filter(e =>
            e.source !== cityName && e.target !== cityName
        );
    }

    // ----------------- PARK METHODS -----------------
    addPark(parkObj) {
        this.parks.push(parkObj);

        // se agrega el nodo del parque
        this.nodes.push({ id: parkObj.name, type: "park" });

        // conectar automáticamente ciudad → parque
        this.addEdge(parkObj.city, parkObj.name);
    }

    getParksInCity(cityName) {
        return this.parks.filter(p => p.city === cityName);
    }

    // ----------------- GRAPH METHODS -----------------
    addEdge(source, target) {
        this.edges.push({ source, target });
    }

    getGraphData() {
        return {
            nodes: this.nodes,
            links: this.edges
        };
    }
}

