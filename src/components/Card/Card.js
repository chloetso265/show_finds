import "./Card.scss";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function Card({ date, time, venue, name, price = null }) {
  //   const date = shows.dates.start.localDate;
  //   console.log(date);
  //   console.log(format(date, "yyyy/MM/dd"));

  return (
    <section className="show__cards">
      <div className="show__info">
        <h3>Ticketmaster</h3>
        <div>
          <p>{date}</p>
          <p>{time}</p>
        </div>
        <div>
          <p>{venue}</p>
          <p>{name}</p>
        </div>
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
        <h3>SeatGeek</h3>
      </div>
    </section>
  );
}

export default Card;
