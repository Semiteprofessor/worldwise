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

      setCurrentCity(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setError(console.log("error loading cities", error));
    }
  };

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, error, currentCity, getCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export { CitiesContext, useCities, CitiesProvider };
