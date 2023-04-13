import "./App.scss";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PopularProperties from "./components/popularProperties/PopularProperties";
import FeaturedProperties from "./components/featuredProperties/FeaturedProperties";
import Newsletter from "./components/newsletter/Newsletter";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Properties from "./components/properties/Properties";
import Section2 from "./components/section2/Section2";
import Section4 from "./components/section4/Section4";
import PropertyDetail from "./components/propertyDetail/PropertyDetail";
// import Hero from "./components/hero/Hero";
import { useSelector } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./redux/store";
import Section1 from "./components/hero/Hero";
import EditProperty from "./components/editProperty/EditProperty";
import MyProperties from "./components/myProperties/MyProperties";
// import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { user } = useSelector((state) => state.auth);
  const url = useLocation().pathname;

  useEffect(() => {
    url && window.scrollTo(0, 0);
  }, [url]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Section1 />
              <Section2 />
              <Section4 />
              <PopularProperties />
              <FeaturedProperties />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/signin"
          element={!user ? <Signin /> : <Navigate to="/" />}
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
          path="/properties/find/featured"
          element={
            <>
              <Navbar />
              <FeaturedProperties />
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
        <Route
          path="/myproperties"
          element={
            user ? (
              <>
                <Navbar />
                <MyProperties />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/editProperty/:id"
          element={
            user ? (
              <>
                <Navbar />
                <EditProperty />
                <Footer />
              </>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
