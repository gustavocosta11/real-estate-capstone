import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PopularProperties from "./components/popularProperties/PopularProperties";
import FeaturedProperties from "./components/featuredProperties/FeaturedProperties";
import Newsletter from "./components/newsletter/Newsletter";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Properties from "./components/properties/Properties";
import PropertyDetail from "./components/propertyDetail/PropertyDetail";
import Hero from "./components/hero/Hero";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Hero />
                    <PopularProperties />
                    <FeaturedProperties />
                    <Newsletter />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/properties"
                element={
                  <>
                    <Navbar />
                    <Properties />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/propertiesDetail/:id"
                element={
                  <>
                    <Navbar />
                    <PropertyDetail />
                    <Footer />
                  </>
                }
              />

              <Route path="/signup" element={<Signup />} />

              <Route path="/signin" element={<Signin />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
