import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Form from "./pages/Form";
import CityList from "./pages/CityList";
import { useEffect, useState } from "react";
import CountryList from "./pages/CountryList";
import City from "./pages/City";

const BASE_URL = "http://localhost:8080";
const App = () => {
  const [cities, setCities] = useState([]);
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
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="cities"
            element={
              <CityList cities={cities} isLoading={isLoading} error={error} />
            }
          />
          <Route
            path="countries"
            element={
              <CountryList
                cities={cities}
                isLoading={isLoading}
                error={error}
              />
            }
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
