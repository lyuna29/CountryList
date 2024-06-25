import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api/api";
import { Country } from "../types/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  if (!countries) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>국가 목록</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};
export default CountryList;
