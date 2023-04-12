import "./Section4.scss";
import building3 from "../../assets/building3.jpg";

function Section4() {
  return (
    <section className="section_4">
      {/* SECTION TITLE */}
      <div className="section_4_title">
        <h1>
          Helping People To Getting Their Dream House For More than 16 Years
        </h1>
      </div>

      {/* CONTENT */}
      <div className="section_4_content">
        {/* IMAGE */}
        <div className="image_container">
          <img src={building3} alt="building" />
        </div>
        {/* INFO */}
        <div className="info">
          <p>
            Search and find your dream house at affordable prices, but with the
            best quality. Only available at Real!
          </p>

          <div className="rows">
            {/* ROW 1 */}
            <div className="row_1">
              {/* FACT 1 */}
              <div className="fact">
                <h2>10.234</h2>
                <h3>Completed Houses</h3>
              </div>

              {/* FACT 2 */}
              <div className="fact">
                <h2>11.234</h2>
                <h3>Rented Houses</h3>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="row_2">
              {/* FACT 1 */}
              <div className="fact">
                <h2>2.157</h2>
                <h3>Sold Houses</h3>
              </div>

              {/* FACT 2 */}
              <div className="fact">
                <h2>12.157</h2>
                <h3>Happy Client</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
