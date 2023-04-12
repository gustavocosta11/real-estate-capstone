import { Link } from "react-router-dom";
import "./PopularProperties.scss";
import img1 from "../../assets/realestatebeach.jpg";
import img2 from "../../assets/realestatemountain.jpg";
import img3 from "../../assets/Downtown.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { request } from "../../util/fetchAPI";

const PopularProperties = () => {
  const [numProperties, setNumProperties] = useState({});

  useEffect(() => {
    const fetchNumberProperties = async () => {
      try {
        const data = await request("/properties/find/types", "GET");
        setNumProperties(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchNumberProperties();
  }, []);
  return (
    <div className="popular-container">
      <div className="popular-wrapper">
        <div className="titles">
          <h5>Different types of properties</h5>
          <h2>Best Types of properties for you</h2>
        </div>
        <div className="properties">
          <Link
            to={`/properties?type=beach&city=0&priceRange=1`}
            className="property"
          >
            <img src={img1} alt="beach house" />
            <div className="quantity">{numProperties?.beach} properties</div>
            <h5>Beach Properties</h5>
          </Link>
          <Link
            to={`/properties?type=mountain&city=1&priceRange=1`}
            className="property"
          >
            <img src={img2} alt="mountain house" />
            <div className="quantity">{numProperties?.mountain} properties</div>
            <h5>Mountain Properties</h5>
          </Link>
          <Link
            to={`/properties?type=city&city=2&priceRange=1`}
            className="property"
          >
            <img src={img3} alt="city house" />
            <div className="quantity">{numProperties?.city} properties</div>
            <h5>City Properties</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProperties;
