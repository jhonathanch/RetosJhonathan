// models.js

// ----------------- CITY -----------------
export class City {
    constructor(name) {
        this.name = name;
    }
}

// ----------------- PARK -----------------
export class Park {
    constructor(name, distance, city) {
        this.name = name;
        this.distance = distance;
        this.city = city; // referencia a ciudad
    }
}

// ----------------- GRAPH MODEL -----------------
export class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.cities = [];
        this.parks = [];
    }

    // ----------------- CITY METHODS -----------------
    addCity(city) {
        this.cities.push(city);
        this.nodes.push({ id: city.name, type: "city" });
    }

    deleteCity(cityName) {
        this.cities = this.cities.filter(c => c.name !== cityName);
        this.parks = this.parks.filter(p => p.city !== cityName);
        this.nodes = this.nodes.filter(n => n.id !== cityName);
        this.edges = this.edges.filter(e => e.source !== cityName && e.target !== cityName);
    }

    // ----------------- PARK METHODS -----------------
    addPark(park) {
        this.parks.push(park);
        this.nodes.push({ id: park.name, type: "park" });
        this.addEdge(park.city, park.name);
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

