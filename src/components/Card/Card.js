import "./Card.scss";

function Card({ shows }) {
  return (
    <section className="show__cards">
      <div className="homepage__shows">
        <div>
          <p>{shows.dates.start.localDate}</p>
          <p>{shows.dates.start.localTime}</p>
        </div>
        <div>
          <p>{shows._embedded.venues[0].name}</p>
          <p>{shows.name}</p>
        </div>
        <div>
          <span>See Tickets</span>
        </div>
      </div>
    </section>
  );
}

export default Card;
