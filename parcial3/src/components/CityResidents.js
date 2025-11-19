const CityResidents = ({ graph, city }) => {
  const residents = graph.searchAdjacency(city)
    .filter((n) => n.includes("(")); 

  return (
    <div>
      <h3>zonas verdes en{city}:</h3>
      {residents.map((r) => (
        <p key={r}>{r}</p>
      ))}
    </div>
  );
};

export default CityResidents;
