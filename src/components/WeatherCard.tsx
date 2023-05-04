import * as React from "react";
import formatTime from '../helpers/formatTime'
import { Value } from '../types'
import "../styles.css";

const WeatherCard: React.FC<{ value: Value }> = ({ value }) => {
  return (
    <>
      <p>
        Current weather: {value?.weather[0]?.main}
        {", "}
        {value?.weather[0]?.description}</p>
      <p>Temperature: {value?.main?.temp} °C</p>
      <p>Sunrise time: {formatTime(value?.sys?.sunrise)}</p>
      <p>Sunset time: {formatTime(value?.sys?.sunset)}</p>
    </>
  );
}

export default WeatherCard;

