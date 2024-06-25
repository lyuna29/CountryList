import React from "react";
import { Country } from "../types/countries";

interface Props {
  country: Country;
}

const CountryCard = ({ country }: Props) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "300px",
      }}
    >
      <img className="mx-auto mb-4 h-auto w-20" src={country.flags.png} />
      <div>
        <h2>{country.name.common}</h2>
        <p>{country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
