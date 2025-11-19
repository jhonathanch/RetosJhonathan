// useCityNetwork.js
import { useState } from "react";
import { CityNetwork } from "./models";

export function useCityNetwork() {
  const [network] = useState(() => new CityNetwork());
  const [, forceUpdate] = useState({});

  const update = () => forceUpdate({});

  return {
    network,

    addCity: (name) => {
      const ok = network.addCity(name);
      update();
      return ok;
    },

    deleteCity: (name) => {
      const ok = network.deleteCity(name);
      update();
      return ok;
    },

    addGreenZone: (city, zone, parent = null) => {
      const id = network.addGreenZone(city, zone, parent);
      update();
      return id;
    },

    editGreenZone: (city, zoneId, newName) => {
      const ok = network.editGreenZone(city, zoneId, newName);
      update();
      return ok;
    },

    getCity: (name) => network.cities[name],

    cityMetrics: (name) => network.cityMetrics(name),
  };
}
