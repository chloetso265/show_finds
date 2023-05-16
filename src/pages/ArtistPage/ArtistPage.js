import "./ArtistPage.scss";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import tkLogo from "../../assets/ticketmaster-logo.png";
import sgLogo from "../../assets/Seatgeek_logo.png";

// const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = "YActy3kuBuQhgG62frGlgAfNjoVpXP73";
// const CLIENT_KEY = "MzM1Mzk0Nzh8MTY4MzU3NTg3NC4wMDAzMDUy";

function ArtistPage() {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events?attractionId=${artistId}&apikey=${API_KEY}`
        // `https://app.ticketmaster.com/discovery/v2/events?attractionId=K8vZ9175rX7&apikey=YActy3kuBuQhgG62frGlgAfNjoVpXP73`
      )
      .then((result) => {
        const artistArray = result.data;
        console.log("Response: ", artistArray);
        setArtist(artistArray);
      });
  }, []);

  if (!artist) {
    return <div>loading</div>;
  }
  //   console.log(artist);

  return (
    <section className="showpage">
      <h2> Testing</h2>
      <p>{artist._embedded.events?.[0].name}</p>
      {/* <p>{artist._embedded.events[0].id}</p> */}
      {/* <article className="showpage__section">
        <div className="showpage__details">
          <div className="showpage__heading">
            <img
              className="showpage__banner"
              src={show.images[0].url}
              alt="show-banner"
            />
            <div>
              <h3 className="showpage__name">{show.name}</h3>
              <p className="showpage__location">
                {show._embedded.venues[0].name} -{" "}
                {show._embedded.venues[0].city.name},{" "}
                {show._embedded.venues[0].state.stateCode}
              </p>
            </div>
          </div>
          <div className="showpage__info">
            <p className="showpage__date">{show.dates.start.localDate}</p>
            <p className="showpage__time">{show.dates.start.localTime}</p>
          </div>
        </div>
      </article>
      <article className="showpage__prices">
        <h4>Available On:</h4>
        <div className="showpage__vendors">
          <div className="showpage__tk">
            <img
              className="showpage__logo"
              src={tkLogo}
              alt="ticketmaster-logo"
            />
            <p>
              ${show.priceRanges[0].min} - {show.priceRanges[0].max}
            </p>
            <a href={show.url}>
              <span className="showpage__button">Buy Tickets</span>
            </a>
          </div>
          <div className="showpage__tk">
            <img className="showpage__logo" src={sgLogo} alt="seatgeek-logo" />
            <p>
              ${show.priceRanges[0].min} - {show.priceRanges[0].max}
            </p>
            <a href={show.url}>
              <span className="showpage__button">Buy Tickets</span>
            </a>
          </div>
        </div>
      </article> */}
    </section>
  );
}

export default ArtistPage;
