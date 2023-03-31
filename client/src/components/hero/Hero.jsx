import "./Hero.scss";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [type, setType] = useState("beach");
  const [continent, setContinent] = useState("0");
  const [priceRange, setPriceRange] = useState("0");
  const navigate = useNavigate();

  const handleSearch = () => {
    // navigate to properties
    navigate(
      `/properties?types=${type}&continent=${continent}&priceRange=${priceRange}`
    );
  };

  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <h2>Let me find your dream place right now</h2>
        <h5>Search the best selection of luxury real estate</h5>
        <div className="hero-options">
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="city">City</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select onChange={(e) => setContinent(e.target.value)}>
            <option disabled>Select Continent</option>
            <option value="0">Europe</option>
            <option value="1">Asia</option>
            <option value="2">Africa</option>
            <option value="3">South America</option>
            <option value="4">North America</option>
            <option value="5">Oceania</option>
          </select>
          <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
