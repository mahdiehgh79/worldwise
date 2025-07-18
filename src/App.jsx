import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./componenets/PageNav";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./componenets/CityList";
import CountryList from "./componenets/CountryList";
import City from "./componenets/City";
import Form from "./componenets/Form";
import { useEffect, useState } from "react";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";


const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("this is wrong");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);


function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
            <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />}/>
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
   </AuthProvider>
    </>
  );
}

export default App;
