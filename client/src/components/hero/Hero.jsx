// import "./Hero.scss";
// import { useState } from "react";
// import { AiOutlineSearch } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const [type, setType] = useState("beach");
//   const [continent, setContinent] = useState("0");
//   const [priceRange, setPriceRange] = useState("0");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     // navigate to properties
//     navigate(
//       `/properties?types=${type}&continent=${continent}&priceRange=${priceRange}`
//     );
//   };

//   return (
//     <div className="hero-container">
//       <div className="hero-wrapper">
//         <h2>Let me find your dream place right now</h2>
//         <h5>Search the best selection of luxury real estate</h5>
//         <div className="hero-options">
//           <select onChange={(e) => setType(e.target.value)}>
//             <option disabled>Select type</option>
//             <option value="beach">Beach</option>
//             <option value="mountain">Mountain</option>
//             <option value="city">City</option>
//           </select>
//           <select onChange={(e) => setPriceRange(e.target.value)}>
//             <option disabled>Select Price Range</option>
//             <option value="0">0-500,000</option>
//             <option value="1">500,001-1,000,000</option>
//             <option value="2">1,000,001-1,500,000</option>
//             <option value="3">1,500,001-2,000,000</option>
//             <option value="4">2,000,001-10,000,000</option>
//           </select>
//           <select onChange={(e) => setContinent(e.target.value)}>
//             <option disabled>Select Continent</option>
//             <option value="0">Vancouver</option>
//             <option value="1">Burnaby</option>
//             <option value="2">New Westminster</option>
//             <option value="3">Richmond</option>
//             <option value="4">North Vancouver</option>
//             <option value="5">Coquitlam</option>
//             <option value="6">Surrey</option>
//           </select>
//           <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import Navbar from "../navbar/Navbar";
import "./Hero.scss";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import building1 from "../../assets/building1.jpg";

function Section1() {
  const [price, setPrice] = useState("<100k");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("beach");
  const [city, setContinent] = useState("0");
  const [priceRange, setPriceRange] = useState("0");
  const navigate = useNavigate();

  const handleSearch = () => {
    // navigate to properties
    navigate(`/properties?types=${type}&city=${city}&priceRange=${priceRange}`);
  };

  return (
    <section className="section_1">
      {/* NAVBAR */}
      {/* <div className="Navbar">
        <Navbar BurgerColor={"#f5f5f5"} />
      </div> */}

      {/* BACKGROUND IMAGES */}
      <div className="img"></div>

      {/* SECTION 1 CONTENT */}
      <div className="section_1_content">
        {/* SLOGAN */}
        <div className="slogan">
          <h1>Ease Way to Find Your Dream House</h1>
          <p>
            Search and find your dream house at affordable prices, but with the
            best quality. Only available in Real
          </p>

          {/* SearchBoc */}
          <div className="search_container">
            {/* LOCATION */}
            <div className="location_container">
              <span>Location</span>
              <input
                type="text"
                placeholder="Enter a Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* PRICE RANGE */}
            <div className="price_container">
              <span>Price Range</span>
              <select
                name="Price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="<100k">{`<100k`}</option>
                <option value="100k-200k">100k-200k</option>
                <option value="200k-500k">200k-500k</option>
                <option value=">500k">{`>500k`}</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="btn_search" onClick={handleSearch}>
              <Link>Search</Link>
            </button>
          </div>
        </div>
        {/* Building Image */}
        <div className="slogan_image">
          <img src={building1} alt="building" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
