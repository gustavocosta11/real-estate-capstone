import "./Newsletter.scss";

import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-wrapper">
        <div className="newsletter-titles">
          <h5>Want to get the latest offers?</h5>
          <h2>Send us your email and we will do the rest!</h2>
        </div>
        <div className="inputContainer">
          <input type="email" placeholder="Type email..." />
          <FiSend className="sendIcon" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
