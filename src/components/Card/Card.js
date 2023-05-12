import "./Card.scss";
import tkLogo from "../../assets/ticketmaster-logo.png";
// import sgLogo from "../../assets/Seatgeek_logo.svg";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function Card({ date, time, venue, name, price = null }) {
  //   console.log(date);
  //   console.log(format(date, "yyyy/MM/dd"));
  //   function date() {
  //     new Date();
  //   }

  return (
    <section className="show__cards">
      <div className="show__info">
        <div className="show__details">
          <p>{date}</p>
          <p>{time}</p>
        </div>
        <div className="show__details">
          <p>{name}</p>
          <p>{venue}</p>
        </div>
      </div>
      <div className="show__info">
        <img className="show__tkLogo" src={tkLogo} />
        <div>
          {price && (
            <p>
              ${price.min} - ${price.max}
            </p>
          )}
          {/* <span>See Tickets</span> */}
        </div>
      </div>
      <div className="show__info">
        {/* <img src={sgLogo} /> */}
        <p>Tickets Starting From : $140</p>
        {/* {tkPrices !== null && <div ... ticketmaster prices stuff ... </div>}
      {sgPrices !== null && <div ... seatgeek prices stuff ... </div>} */}
      </div>
    </section>
  );
}

export default Card;
