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
        {/* <div className="homepage__shows">
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
        </div> */}
        {/* <Card shows={shows} /> */}
        {shows.map((show) => {
          return <Card shows={show} />;
        })}
        <h2>Discover</h2>
        <Bubble />
        {/* {artists.map((artist) => {
          return <Bubble artists={artist} />;
        })} */}
      </article>
    </section>
  );
}

export default Homepage;
