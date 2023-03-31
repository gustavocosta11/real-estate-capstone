import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="col">
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            illum quam optio autem suscipit incidunt dicta dolorum eum dolores
            recusandae laboriosam expedita quo facilis, numquam et. Delectus
            atque dolorum sapiente.
          </p>
        </div>
        <div className="col">
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>Fax: +123 456 789</span>
          <span>Linkedin: Gustavo</span>
        </div>
        <div className="col">
          <h2>Location</h2>
          <span>Continent: North America</span>
          <span>Country: Canada</span>
          <span>Current Location: Canada</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
