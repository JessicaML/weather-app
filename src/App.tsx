import * as React from "react";
import useCoordinates from "./hooks/useCoordinates";
import { Coordinate, Value } from "./types";
import "./styles.css";

export default function App() {
  const coordinate: Coordinate = useCoordinates();

  console.log('coordinate', coordinate)
  return (
    <div className="App" data-testid="container"><h1>Weather App</h1>
    </div>
  );
}
