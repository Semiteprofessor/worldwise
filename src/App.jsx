import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Form from "./pages/Form";
import CityList from "./pages/CityList";
import CountryList from "./pages/CountryList";
import City from "./pages/City";
import { CitiesProvider } from "./contextApi/CitiesContext";
import Country from "./pages/Country";
import Notification from "./components/Notification";

const App = () => {
  return (
    <CitiesProvider>
      <Notification />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="countries/:id" element={<Country />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
};

export default App;
