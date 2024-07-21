import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";

import { AuthProvider } from "./contextApi/FakeAuthContext";
import { CitiesProvider } from "./contextApi/CitiesContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import Form from "./pages/Form";
import CityList from "./pages/CityList";
import CountryList from "./pages/CountryList";
import City from "./pages/City";
import Country from "./pages/Country";
import Loader from "./components/Loader";

// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import NotFound from "./pages/NotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./Authentication/Login";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./Authentication/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));

// dist/assets/index-5q5xWF6I.css   39.27 kB │ gzip:   6.38 kB
// dist/assets/index-CwZvktqv.js   349.63 kB │ gzip: 101.87 kB

const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="cities" element={<CityList />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="countries/:id" element={<Country />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
};

export default App;
