import "./Search.scss";
// import Card from "../../components/Card/Card";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const api_key = "YActy3kuBuQhgG62frGlgAfNjoVpXP73";

function Search() {
  //     const [shows, setShows] = useState([]);
  //   const [artists, setArtists] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://app.ticketmaster.com/discovery/v2/events?apikey=${keyT}&locale=*`
  //       )
  //       .then((result) => {
  //         const showsArray = result.data._embedded.events;
  //         console.log(showsArray);
  //         setShows(showsArray);
  //       });
  //   }, []);

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
      </article>
      {/* <Card /> */}
    </section>
  );
}

export default Search;
