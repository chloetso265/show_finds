import "./ArtistPage.scss";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = "YActy3kuBuQhgG62frGlgAfNjoVpXP73";
// const CLIENT_KEY = "MzM1Mzk0Nzh8MTY4MzU3NTg3NC4wMDAzMDUy";

function ArtistPage() {
  const { artistId } = useParams();
  const [artist, setArtist] = useState([]);
  const [filters, setFilters] = useState([]);
  const filteredShows = artist.filter((artist) => {
    if (filters.length === 0) {
      return true;
    } else {
      return (
        filters.includes(artist._embedded.venues[0].state?.name) ||
        filters.includes(artist.classifications[0].genre?.name)
      );
    }
  });
  console.log("Filter: ", artist);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?attractionId=${artistId}&apikey=${API_KEY}`)
      .then((result) => {
        const artistArray = result.data._embedded.events;
        // console.log("Response: ", artistArray);
        setArtist(artistArray);
      });
  }, []);

  if (!artist) {
    return <div>loading</div>;
  }
  //   console.log(artist);

  return (
    <section className="artist-page">
      <Filter filters={filters} onFilter={setFilters} />
      <article>
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
      </article>
    </section>
  );
}

export default ArtistPage;
