import "./Homepage.scss";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";

function Homepage() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=YActy3kuBuQhgG62frGlgAfNjoVpXP73&attractionId=K8vZ9172T9V&locale=*`
      )
      .then((result) => {
        const showsArray = result.data._embedded.events;
        console.log(showsArray);
        setShows(showsArray);
      });
  }, []);

  if (!shows) {
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
        {/* <Card shows={shows} /> */}
        {shows.map((show) => {
          return <Card shows={show} />;
        })}
      </article>
    </section>
  );
}

export default Homepage;
