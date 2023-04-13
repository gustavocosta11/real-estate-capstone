import "./PropertyDetail.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { request } from "../../util/fetchAPI";
import { AiOutlineClose } from "react-icons/ai";
import { FaBed, FaSquareFull } from "react-icons/fa";
import person from "../../assets/person.jpg";
import emailjs from "@emailjs/browser";

const PropertyDetail = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [propertyDetail, setPropertyDetail] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();
  const formRef = useRef();
  const navigate = useNavigate();

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await request(`/properties/find/${id}`, "GET");
        setPropertyDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  const handleCloseForm = () => {
    setShowForm(false);
    setTitle("");
    setDesc("");
  };

  const handleContactOwner = async (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        console.log(result.text);
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleDelete = async () => {
    try {
      await request(`/properties/${id}`, "DELETE", {
        Authorization: `Bearer ${token}`,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="detail-container">
      <div className="detail-wrapper">
        <div className="detail-left">
          <img
            src={`http://localhost:5050/images/${propertyDetail?.img}`}
            alt="property"
          />
        </div>
        <div className="detail-right">
          <h3 className="detail-title">Title: {`${propertyDetail?.title}`}</h3>
          {user?._id === propertyDetail?.currentOwner?._id && (
            <div className="detail-controls">
              <Link to={`/editProperty/${id}`}>Edit</Link>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
          <div className="detail-details">
            <div className="detail-typeAndContinent">
              <div>
                Where: <span>{`${propertyDetail?.type}`}</span>
              </div>
              <div>
                City: <span>{`${propertyDetail?.city}`}</span>
              </div>
            </div>
            <div className="detail-priceAndOwner">
              <span className="detail-price">
                <span>Price: $ </span>
                {`${propertyDetail?.price}`}
              </span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                Owner: <img src={person} className="detail-owner" alt="" />
              </span>
            </div>
            <div className="detail-moreDetails">
              <span>
                {propertyDetail?.beds} <FaBed className="detail-icon" />
              </span>
              <span>
                {propertyDetail?.sqmeters} square meters{" "}
                <FaSquareFull className="detail-icon" />
              </span>
            </div>
          </div>
          <p className="detail-desc">
            Desc: <span>{`${propertyDetail?.desc}`}</span>
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="detail-contactOwner"
          >
            Contact owner
          </button>
        </div>
      </div>
      {showForm && (
        <div className="detail-contactForm" onClick={handleCloseForm}>
          <div
            className="detail-contactFormWrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Send Email To Owner</h2>
            <form onSubmit={handleContactOwner} ref={formRef}>
              <input
                value={user?.email}
                type="text"
                placeholder="My email"
                name="from_email"
              />
              <input
                value={user?.username}
                type="text"
                placeholder="My username"
                name="from_username"
              />
              <input
                value={propertyDetail?.currentOwner?.email}
                type="email"
                placeholder="Owner email"
                name="to_email"
              />
              <input
                value={title}
                type="text"
                placeholder="Title"
                name="from_title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                value={desc}
                type="text"
                placeholder="Desc"
                name="message"
                onChange={(e) => setDesc(e.target.value)}
              />
              <button>Send</button>
            </form>
            <AiOutlineClose
              onClick={handleCloseForm}
              className="detail-removeIcon"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
