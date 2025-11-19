export function convertGraph(graph) {
  const nodes = graph.nodes.map((n) => ({
    id: n
  }));

  const links = [];

  for (let source in graph.adjacency) {
    for (let target of graph.adjacency[source]) {
      links.push({ source, target });
    }
  }

  return { nodes, links };
}
