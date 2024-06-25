import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api/api";
import { Country } from "../types/countries";

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

  return <></>;
};

export default CountryList;
