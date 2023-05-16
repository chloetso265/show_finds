import "./Card.scss";
import Compare from "../Compare/Compare";
import tkLogo from "../../assets/ticketmaster-logo.png";
import sgLogo from "../../assets/Seatgeek_logo.png";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function Card({ date, time, venue, name, price = null, image, city, state }) {
  //   console.log(date);
  //   console.log(format(date, "yyyy/MM/dd"));
  //   function date() {
  //     new Date();
  //   }

  return (
    <section className="cards">
      <article className="cards__info">
        <div>
          <img className="cards__image" src={image} alt="show-banner" />
        </div>
        <div className="cards__details">
          <p>{name}</p>
          <p>
            {venue} - {city}, {state}
          </p>
        </div>
        <div>
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </article>
      {/* <div className="show__info">
        <div>
          {price && (
            <p>
              ${price.min} - ${price.max}
            </p>
          )}
        </div>
      </div> */}
      <article className="cards__details">
        {/* <div className="show__info">
        <img className="show__tkLogo" src={sgLogo} />
        <p>Tickets Starting From : $140</p> */}
        {/* {tkPrices !== null && <div ... ticketmaster prices stuff ... </div>}
      {sgPrices !== null && <div ... seatgeek prices stuff ... </div>} */}
        {/* </div> */}
        <Compare image={tkLogo} price={price} />
        <Compare image={sgLogo} price={price} />
      </article>
    </section>
  );
}

export default Card;
