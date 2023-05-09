import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ shows }) {
  //   console.log(shows.priceRanges[0].min);

  return (
    <section className="show__cards">
      <div className="homepage__shows">
        <div>
          <p>{shows.dates.start.localDate}</p>
          <p>{shows.dates.start.localTime || "TBD"}</p>
        </div>
        <div>
          <p>{shows._embedded.venues[0].name}</p>
          <p>{shows.name}</p>
        </div>
        <div>
          {shows.priceRanges && (
            <p>
              ${shows.priceRanges[0].min} - ${shows.priceRanges[0].max}
            </p>
          )}
          {/* <span>See Tickets</span> */}
        </div>
      </div>
    </section>
  );
}

export default Card;
