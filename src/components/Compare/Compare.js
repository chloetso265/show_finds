import "./Compare.scss";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function Compare({ image, price = null }) {
  return (
    <section className="compare">
      <div className="compare__info">
        <img className="compare__logo" src={image} />
        <p>
          ${price.min} - ${price.max}
        </p>
        {/* <p>$35.50 - $195.50</p> */}
      </div>
      <div className="compare__sg">
        {/* {tkPrices !== null && <div ... ticketmaster prices stuff ... </div>}
      {sgPrices !== null && <div ... seatgeek prices stuff ... </div>} */}
      </div>
    </section>
  );
}

export default Compare;
