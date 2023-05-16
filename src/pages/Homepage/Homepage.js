import "./Homepage.scss";
import Card from "../../components/Card/Card";
import Bubble from "../../components/Bubble/Bubble";
import Filter from "../../components/Filter/Filter";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = "YActy3kuBuQhgG62frGlgAfNjoVpXP73";
// const keyT = "YActy3kuBuQhgG62frGlgAfNjoVpXP73&attractionId=K8vZ9172T9V";
// const keySG1 = "MzM1Mzk0Nzh8MTY4MzU3NTg3NC4wMDAzMDUy";
// const keySG2 = "4c67cb3e5e9786e5f12564093697f299670af7840019b7416cb4bada2e86e322";

function Homepage() {
  const [shows, setShows] = useState([]);
  const [artists, setArtists] = useState([]);
  const [filters, setFilters] = useState([]);
  const filteredShows = shows.filter((show) => {
    if (filters.length === 0) {
      return true;
    } else {
      return (
        filters.includes(show._embedded.venues[0].state.name) ||
        filters.includes(show.classifications[0].genre.name)
      );
    }
  });

  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${API_KEY}`
        // `https://app.ticketmaster.com/discovery/v2/events?apikey=${keyT}&locale=*`
      )
      .then((result) => {
        const showsArray = result.data._embedded.events;
        // console.log(showsArray);
        setShows(showsArray);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&countryCode=US&apikey=${API_KEY}`
      )
      .then((result) => {
        const artistsArray = result.data._embedded.attractions;
        console.log(artistsArray);
        setArtists(artistsArray);
      });
  }, []);

  if (!shows || !artists) {
    return <div>loading</div>;
  }

  //   console.log(shows._embedded.venues[0].name);

  return (
    <section className="homepage">
      <Filter filters={filters} onFilter={setFilters} />
      <article className="homepage__main">
        <h2 className="homepage__title">Trending Now</h2>
        {filteredShows.map((show) => {
          return (
            <div className="homepage__trending">
              <Link to={`/shows/${show.id}`}>
                <Card
                  key={show.id}
                  image={show.images[0].url}
                  date={show.dates.start.localDate}
                  time={show.dates.start.localTime || "TBD"}
                  venue={show._embedded.venues[0].name}
                  city={show._embedded.venues[0].city.name}
                  state={show._embedded.venues[0].state.name}
                  name={show.name}
                  price={show.priceRanges?.[0]}
                />
              </Link>
            </div>
          );
        })}
        <h2 className="homepage__title">Discover</h2>
        <div className="artists">
          {artists.map((artist) => {
            return (
              <Link to={`/artists/${artist.id}`}>
                <Bubble key={artist.id} artists={artist} />
              </Link>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default Homepage;
