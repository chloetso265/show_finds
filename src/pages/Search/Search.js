import "./Search.scss";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = "YActy3kuBuQhgG62frGlgAfNjoVpXP73";
// const CLIENT_KEY = "MzM1Mzk0Nzh8MTY4MzU3NTg3NC4wMDAzMDUy";
// console.log(`${BASE_URL}?keyword=${keyword}&apikey=${API_KEY}`);

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState([]);
  const filteredShows = events.filter((event) => {
    if (filters.length === 0) {
      return true;
    } else {
      return (
        filters.includes(event._embedded.venues[0].state?.name) ||
        filters.includes(event.classifications[0].genre?.name)
      );
    }
  });
  // console.log("Params: ", searchParams.get("query"));
  const keyword = searchParams.get("query");

  useEffect(() => {
    axios
      .get(`${BASE_URL}?keyword=${keyword}&countryCode=US&apikey=${API_KEY}`)
      .then(({ data }) => {
        const events = data?._embedded?.events || [];
        // console.log(events);
        setEvents(events);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.seatgeek.com/2/events?q=chance+the+rapper&client_id=MzM1Mzk0Nzh8MTY4MzU3NTg3NC4wMDAzMDUy`
  //     )
  //     .then(({ data }) => {
  //       const compare = data.events;
  //       console.log(compare);
  //       setCompare(compare);
  //     });
  // }, []);

  if (events.length === 0) {
    return <div>loading</div>;
  }

  // console.log("This is ", events);

  return (
    <section className="homepage">
      <Filter filters={filters} onFilter={setFilters} />
      <div>
        {filteredShows.map((show) => {
          return (
            <div className="homepage__trending">
              <Link to={`/shows/${show.id}`}>
                <Card
                  key={show.id}
                  image={show.images[0].url}
                  date={show.dates.start.localDate}
                  time={show.dates.start.localTime || "TBD"}
                  venue={show._embedded.venues[0]?.name}
                  city={show._embedded.venues[0].city?.name}
                  state={show._embedded.venues[0].state?.name}
                  name={show.name}
                  price={show.priceRanges?.[0]}
                />
              </Link>
            </div>
          );
        })}
      </div>
      {/* <p>
          {events[0].priceRanges &&
            `${events[0].priceRanges[0].min}- ${events[0].priceRanges[0].max} `}
        </p> */}
    </section>
  );
}

export default Search;
