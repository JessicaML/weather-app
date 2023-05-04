import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import LocationCard from "../components/LocationCard";
import { Coordinate } from "../types";

const coordinate: Coordinate = {
  lat: 50,
  long: 55
}

test.only('LocationCard renders', async () => {
  const { queryByText } =  render(<LocationCard coordinate={coordinate} />);

  expect(queryByText('Lat:')).toBeInTheDocument()
})