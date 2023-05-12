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
        const other = data.events;
        console.log(other);
        setCompare(other);
      });
  }, []);

  if (!events) {
    return <div>loading</div>;
  }

  return (
    <section className="homepage">
      <article>
        <p>Filter Section</p>
        <h4>Home</h4>
        <h4>Discover</h4>
        <h4>Recommended</h4>
      </article>
      <article className="homepage__main">
        <div className="homepage__shows">
          <div>
            <p>AUG 26</p>
            <p>Sat - 8:00pm</p>
          </div>
          <div>
            <p>Barclays Center - Brooklyn, NY</p>
            <p>Chance The Rapper: Acid Rap 10 Year Anniversary Show</p>
          </div>
          <div>
            <span>See Tickets</span>
          </div>
        </div>
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
      </article>
    </section>
  );
}

export default Search;
