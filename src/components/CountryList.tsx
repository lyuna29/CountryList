import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api/api";
import { Country } from "../types/countries";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        console.error("국가 api를 불러오지 못했습니다.", error);
      }
    };

    fetchData();
  }, []);

  if (!countries) {
    return <div>Loading...</div>;
  }

  const selectCountryhandler = (value: Country) => {
    setSelectedCountries((prev) => [...prev, value]);
    setCountries((prev) => prev.filter((item) => item !== value));
  };

  const deleteCountryhandler = (value: Country) => {
    setSelectedCountries(selectedCountries.filter((item) => item !== value));
    setCountries((prev) => [...prev, value]);
  };

  return (
    <div className="mx-auto flex flex-col content-center items-center p-6">
      <h2 className="text-2xl font-bold">Favorite countries</h2>
      <div className="flex flex-wrap justify-center">
        {selectedCountries.map((country, index) => (
          <div key={index} onClick={() => deleteCountryhandler(country)}>
            <CountryCard country={country} />
          </div>
        ))}
      </div>
      <h1>Countries</h1>
      <div className="flex flex-wrap justify-center">
        {countries.map((country, index) => (
          <div key={index} onClick={() => selectCountryhandler(country)}>
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CountryList;
