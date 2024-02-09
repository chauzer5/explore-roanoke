"use client";

import { mapData } from "./mapData";
import styles from "./page.module.css";
import { useState } from "react";

const STARTING_LOCATION = "camp";

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState(); // ["camp", "forest", "lake", "river", "beach", "plains", "desert", "cliffs", "caves"
  const [explorationOptions, setExplorationOptions] = useState([]);

  const handleLocationChange = (location) => {
    setCurrentLocation(location);
    setExplorationOptions(mapData[location]);
  };

  return (
    <main>
      <div>
        {Object.entries(mapData).map(([location]) => (
          <button onClick={() => {
            handleLocationChange(location);
          }}>{location}</button>
        ))}
      </div>

      <div>
        <h1>Click on your current location to see exploration options here:</h1>
        <h2>{`Current location: ${currentLocation || 'none'}`}</h2>
        {explorationOptions.map((location) => (
          <h4 onClick={() => handleLocationChange(location)}>{location}</h4>
        ))}
      </div>
    </main>
  );
}
