import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext({});

const useCities = () => {
  const context = useContext(CitiesContext);
  if (!context) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
};

const BASE_URL = "http://localhost:8080";
const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
        setIsLoading(false);
      } catch (error) {
        setError(console.log("error loading cities", error));
      }
    };
    fetchCities();
  }, []);

  const getCity = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();

      console.log(data);
      setCurrentCity(data);
      setIsLoading(false);
    } catch (error) {
      setError(console.log("error loading cities", error));
      setIsLoading(false);
    }
  };

  const createCity = async (newCity) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
      const data = await res.json();
      console.log(data);
      setIsLoading(false);
      setCities((cities) => [...cities, data]);
    } catch (error) {
      setError(console.log("error loading data...", error));
      setIsLoading(false);
    }
  };

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, error, currentCity, getCity, createCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export { CitiesContext, useCities, CitiesProvider };
