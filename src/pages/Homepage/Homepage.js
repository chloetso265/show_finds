import "./Homepage.scss";
import Card from "../../components/Card/Card";
import Bubble from "../../components/Bubble/Bubble";
import axios from "axios";
import { useState, useEffect } from "react";

const keyT = "YActy3kuBuQhgG62frGlgAfNjoVpXP73&attractionId=K8vZ9172T9V";
// const keySG1 = "MzM1Mzk0Nzh8MTY4MzU3NTg3NC4wMDAzMDUy";
// const keySG2 = "4c67cb3e5e9786e5f12564093697f299670af7840019b7416cb4bada2e86e322";

function Homepage() {
  const [shows, setShows] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=${keyT}&locale=*`
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
        `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${keyT}`
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

  return (
    <section className="homepage">
      <article>
        <p>Filter Section</p>
        <h4>Home</h4>
        <h4>Discover</h4>
        <h4>Recommended</h4>
      </article>
      <article className="homepage__main">
        <h2>Trending Now</h2>
        {/* <Card shows={shows} /> */}
        {shows.map((show) => {
          return (
            <Card
              key={show.id}
              date={show.dates.start.localDate}
              time={show.dates.start.localTime || "TBD"}
              venue={show._embedded.venues[0].name}
              name={show.name}
              price={show.priceRanges?.[0]}
            />
          );
        })}
        <h2>Discover</h2>
        {/* <Bubble /> */}
        {artists.map((artist) => {
          return <Bubble artists={artist} />;
        })}
      </article>
    </section>
  );
}

export default Homepage;
