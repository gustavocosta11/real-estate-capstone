import { useEffect } from "react";
import { useState } from "react";
import { FaBed, FaSquareFull } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { request } from "../../util/fetchAPI";
import { continentToIdx } from "../../util/idxToContinent";
import { arrPriceRanges } from "../../util/idxToPriceRange";
import "./Properties.scss";
import person from "../../assets/person.jpg";
import { AiOutlineSearch } from "react-icons/ai";

const Properties = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [state, setState] = useState(null);
  const query = useLocation().search.slice(1); // slice(1) to remove "?"
  const arrQuery = query.split("&");
  const navigate = useNavigate();

  // fetch all properties
  useEffect(() => {
    const fetchAllProperties = async () => {
      const data = await request(`/properties/getAll`, "GET");
      setAllProperties(data);
    };
    fetchAllProperties();
  }, []);

  // parsing query params
  useEffect(() => {
    if (arrQuery && allProperties?.length > 0 && state === null) {
      let formattedQuery = {};
      arrQuery.forEach((option, idx) => {
        const key = option.split("=")[0];
        const value = option.split("=")[1];

        formattedQuery = { ...formattedQuery, [key]: value };

        // if we are on the last index, assign the formattedQuery obj to state
        if (idx === arrQuery.length - 1) {
          setState((prev) => formattedQuery);
          handleSearch(formattedQuery);
        }
      });
    }
  }, [allProperties, arrQuery]);

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSearch = (param = state) => {
    let options;
    // we either pass the formattedObj or event, that's why we do the IF/ELSE
    if (param?.nativeEvent) {
      options = state;
    } else {
      options = param;
    }
    const filteredProperties = allProperties.filter((property) => {
      const priceRange = arrPriceRanges[options.priceRange];
      const minPrice = Number(priceRange.split("-")[0]);
      const maxPrice = Number(priceRange.split("-")[1]);
      const continent = continentToIdx(property.continent);

      if (
        property.type === options.type &&
        continent === Number(options.continent) &&
        property.price >= minPrice &&
        property.price <= maxPrice
      ) {
        return property;
      }
    });

    const queryStr = `type=${options.type}&continent=${options.continent}&priceRange=${options.priceRange}`;

    navigate(`/properties?${queryStr}`, { replace: true });
    setFilteredProperties((prev) => filteredProperties);
  };

  return (
    <div className="properties-container">
      <div className="properties-wrapper">
        <div className="properties-options">
          <select value={state?.type} name="type" onChange={handleState}>
            <option disabled>Select type</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="city">City</option>
          </select>
          <select
            value={state?.priceRange}
            name="priceRange"
            onChange={handleState}
          >
            <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select
            value={state?.continent}
            name="continent"
            onChange={handleState}
          >
            <option disabled>Select Continent</option>
            <option value="0">Europe</option>
            <option value="1">Asia</option>
            <option value="2">Africa</option>
            <option value="3">South America</option>
            <option value="4">North America</option>
            <option value="5">Oceania</option>
          </select>
          <button className="properties-searchBtn">
            <AiOutlineSearch
              className="properties-searchIcon"
              onClick={handleSearch}
            />
          </button>
        </div>
        {filteredProperties?.length > 0 ? (
          <>
            <div className="properties-titles">
              <h5>Selected properties</h5>
              <h2>Property you may like</h2>
            </div>
            <div className="properties-properties">
              {filteredProperties.map((property) => (
                <div key={property._id} className="properties-property">
                  <Link
                    to={`/propertiesDetail/${property._id}`}
                    className="properties-imgContainer"
                  >
                    <img
                      src={`http://localhost:5050/images/${property?.img}`}
                      alt=""
                    />
                  </Link>
                  <div className="properties-details">
                    <div className="properties-priceAndOwner">
                      <span className="properties-price">
                        $ {property.price}
                      </span>
                      <img src={person} alt="" className="properties-owner" />
                    </div>
                    <div className="properties-moreDetails">
                      <span>
                        {property.beds} <FaBed className="properties-icon" />
                      </span>
                      <span>
                        {property.sqmeters} square meters
                        <FaSquareFull className="properties-icon" />
                      </span>
                    </div>
                    <div className="properties-desc">{property.decs}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h2 className="properties-noProperty">
            We have no properties with the specified options.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Properties;
