import { ArrowButton } from "../buttons/Buttons";
import "./Section2.scss";
import building2 from "../../assets/building2.jpg";
import PopularProperties from "../popularProperties/PopularProperties";

function Section2() {
  return (
    <section className="section_2">
      {/* IMAGE */}

      <div className="section_2_image_container">
        <img src={building2} alt="building2" />
      </div>

      {/* SLOGAN */}
      <div className="section_2_slogan">
        <h1>
          Whether You're Buying, Selling Or Renting, We Can Help You Move
          Forward
        </h1>
      </div>

      {/* SELECTION */}
      <div className="selection">
        {/* BUY */}
        <div className="buy">
          <h3>Buy a home</h3>
          <p>
            Find your place with an immersive photo experience and the most
            listings, including things you won't find anywhere else
          </p>
          <ArrowButton
            text={"Search Houses"}
            path="/properties/find/featured"
          />
        </div>

        {/* RENT */}
        <div className="rent">
          <h3>Rent a home</h3>
          <p>
            We're creating a seamless online experience - from shopping on the
            largest rental network, to applying, to paying rent.
          </p>
          <ArrowButton
            text={"See your Options"}
            path="/properties/find/featured"
          />
        </div>

        {/* SELL */}
        <div className="sell">
          <h3>Sell a home</h3>
          <p>
            Whether you get a cash offer through Real Offers or choose to sell
            traditionally, we can help you navigate a successful sale.
          </p>
          <ArrowButton text={"Use Filters"} path="/" />
        </div>
      </div>
    </section>
  );
}

export default Section2;
