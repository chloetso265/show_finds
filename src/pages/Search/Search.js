import "./Search.scss";
import Card from "../../components/Card/Card";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = "YActy3kuBuQhgG62frGlgAfNjoVpXP73";
const CLIENT_KEY = "MzM1Mzk0Nzh8MTY4MzU3NTg3NC4wMDAzMDUy";
const keyword = "chance the rapper";
// console.log(`${BASE_URL}?keyword=${keyword}&apikey=${API_KEY}`);

function Search() {
  const [events, setEvents] = useState([]);
  const [compare, setCompare] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?keyword=${keyword}&apikey=${API_KEY}`)
      .then(({ data }) => {
        const events = data?._embedded?.events || [];
        // console.log(events);
        setEvents(events);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.seatgeek.com/2/events?q=chance+the+rapper&client_id=MzM1Mzk0Nzh8MTY4MzU3NTg3NC4wMDAzMDUy`
      )
      .then(({ data }) => {
        const compare = data.events;
        console.log(compare);
        setCompare(compare);
      });
  }, []);

  if (!events || !compare) {
    return <div>loading</div>;
  }

  console.log(compare[0].datetime_local);

  return (
    <section className="homepage">
      <article>
        <p>Filter Section</p>
        <h4>Home</h4>
        <h4>Discover</h4>
        <h4>Recommended</h4>
      </article>
      <article className="homepage__main">
        {events.map((event) => {
          return (
            <Card
              key={event.id}
              date={event.dates.start.localDate}
              time={event.dates.start.localTime || "TBD"}
              venue={event._embedded.venues[0].name}
              name={event.name}
              price={event.priceRanges?.[0]}
            />
          );
        })}
        <div className="homepage__shows">
          <div>
            <p>{compare[0].datetime_local}</p>
            <p>Sat - 8:00pm</p>
          </div>
          <div>
            <p>{compare[0].venue.name}</p>
            <p>{compare[0].short_title}</p>
          </div>
          <div>
            <span>
              Tickets Starting From : ${compare[0].stats.lowest_price}
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Search;
