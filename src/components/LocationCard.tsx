import * as React from "react";
import formatLocation from '../helpers/formatLocation'
import { Coordinate } from '../types'
import "../styles.css";

const LocationCard: React.FC<{ coordinate: Coordinate }> = ({ coordinate }) => {
  const { lat, long } = coordinate;
  return (
    <>
      {lat !== 0 && <p>Lat: {formatLocation(lat)}</p>}
      {long !== 0 && <p>Long: {formatLocation(long)}</p>}
    </>
  );
}

export default LocationCard;
