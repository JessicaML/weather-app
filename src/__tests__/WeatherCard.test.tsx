import "@testing-library/jest-dom";
import React from "react";
import { render, waitFor } from "@testing-library/react";
import WeatherCard from "../components/WeatherCard";
import { Value } from "../types";

const value: Value = { 
  id: 1,
  main: { 
    temp: 30 
  }, 
  weather: 
    [
      { description: 'sunny',
        main: 'sun'
      }
    ],
  sys: { 
    sunrise: 1683174857,
    sunset: 1683228608
  }
}

test('WeatherCard renders', async () => {
  const { queryByText } =  render(<WeatherCard value={value} />);

  expect(queryByText('Current weather:')).toBeInTheDocument()
})