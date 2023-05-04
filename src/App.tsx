import * as React from "react";
import { useState, useEffect } from "react";
import useCoordinates from "./hooks/useCoordinates";
import WeatherCard from "./components/WeatherCard";
import LocationCard from "./components/LocationCard";
import { Coordinate, Value } from "./types";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState<Value[]>([]);

  const coordinate: Coordinate = useCoordinates();

  const shouldDisplayWeather = coordinate.lat !== 0 || coordinate.long !== 0
  
  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.lat}&lon=${coordinate.long}&units=metric&appid=bf1faf70ff41513e2798dcaf337ca887`,
        {
          method: "GET"
        }
      );
      const jsonData = await data.json();
      setResult([jsonData]);
    };

    if (shouldDisplayWeather) {
      api();
    }
  // eslint-disable-next-line
  }, [shouldDisplayWeather]);

  console.log('Render:', { coordinate }, { result })

  return (
    <div className="App" data-testid="container"><h1>Weather App</h1>
      {shouldDisplayWeather ? (<>
        <LocationCard coordinate={coordinate} /> 
      {result?.map((value) => {
          return (
            <WeatherCard value={value} key={value.id} />
          );
        })}</>) : <p>Checking the weather in your location, hang on....</p>}
    </div>
  );
}
