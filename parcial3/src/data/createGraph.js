import Graph from "../Graph";

export function createGraph() {
  const graph = new Graph();

  // Ciudades
  const c1 = "Cali";
  const c2 = "Bogotá";
  const c3 = "Medellín";

  graph.addNode(c1);
  graph.addNode(c2);
  graph.addNode(c3);

  // zonas verdes
  const p1 = "parque1 (20)";
  const p2 = "parque 2(25)";
  const p3 = "parque 3(30)";
  const p4 = "parque 4 (22)";

  graph.addNode(p1);
  graph.addNode(p2);
  graph.addNode(p3);
  graph.addNode(p4);

  // Relación ciudad - parque
  graph.addEdge(c1, p1);
  graph.addEdge(c1, p2);
  graph.addEdge(c2, p3);
  graph.addEdge(c3, p4);

  return graph;
}
