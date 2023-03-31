import "./FeaturedProperties.scss";
import { FaBed, FaSquareFull } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import img from "../../assets/house.jpg";
import person from "../../assets/person.jpg";
import { request } from "../../util/fetchAPI";

const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const data = await request("/properties/find/featured", "GET");
        setFeaturedProperties(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className="featured-container">
      <div className="featured-wrapper">
        <div className="featured-titles">
          <h5>Properties you may like</h5>
          <h2>Our Featured Properties</h2>
        </div>
        <div className="featuredProperties">
          {featuredProperties?.map((property) => (
            <div className="featuredProperty" key={property._id}>
              <Link
                to={`/propertiesDetail/${property._id}`}
                className="imgContainer"
              >
                <img
                  src={
                    property.img
                      ? `http://localhost:5050/images/${property.img}`
                      : img
                  }
                  alt=""
                />
              </Link>
              <div className="details">
                <div className="priceAndOwner">
                  <span className="price">$ {property?.price}</span>
                  <img src={person} alt="property img" className="owner" />
                </div>
                <div className="moreDetails">
                  <span>
                    {property?.beds} <FaBed className="icon" />
                  </span>
                  <span>
                    {property?.sqmeters} square meters{" "}
                    <FaSquareFull className="icon" />
                  </span>
                </div>
                <div className="desc">{property?.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
