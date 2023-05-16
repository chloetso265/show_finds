import "./ShowPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import tkLogo from "../../assets/ticketmaster-logo.png";
import sgLogo from "../../assets/Seatgeek_logo.png";

const API_KEY = "YActy3kuBuQhgG62frGlgAfNjoVpXP73";

function ShowPage() {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events/${showId}?apikey=${API_KEY}`
      )
      .then((result) => {
        const show = result.data || [];
        console.log(show);
        setShow(show);
      });
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.seatgeek.com/2/events?q=chance+the+rapper&client_id=MzM1Mzk0Nzh8MTY4MzU3NTg3NC4wMDAzMDUy`
  //       )
  //       .then(({ data }) => {
  //         const compare = data.events;
  //         console.log(compare);
  //         setCompare(compare);
  //       });
  //   }, []);

  if (!show) {
    return <div>loading</div>;
  }

  return (
    <section className="showpage">
      <article className="showpage__section">
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
      </article>
    </section>
  );
}

export default ShowPage;
