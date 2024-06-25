import axios from "axios";
import { Country } from "../types/countries";

const API_URL = "https://restcountries.com/v3.1/all";

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("api 호출 에러", error);
    throw error;
  }
};
