import React from "react";
import { Country } from "../types/countries";

interface Props {
  country: Country;
}

const CountryCard = ({ country }: Props) => {
  return (
    <div className="m-2.5 h-32 w-64 rounded-lg border-none p-2.5 shadow-lg shadow-gray-200">
      <img className="mx-auto mb-4 h-12 w-20" src={country.flags.png} />
      <div className="flex flex-col content-center items-center">
        <h2 className="text-lg font-bold">{country.name.common}</h2>
        <p className="text-slate-400">{country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
