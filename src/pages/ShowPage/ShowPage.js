import "./ShowPage.scss";
// import Card from "../../components/Card/Card";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = "YActy3kuBuQhgG62frGlgAfNjoVpXP73";
// const CLIENT_KEY = "MzM1Mzk0Nzh8MTY4MzU3NTg3NC4wMDAzMDUy";
// const keyword = "chance the rapper";
// console.log(`${BASE_URL}?keyword=${keyword}&apikey=${API_KEY}`);

function ShowPage() {
  const { id } = useParams();
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=${API_KEY}`
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

  //   console.log(show._embedded.venues[0].state.name);

  return (
    <section className="showpage">
      {/* <article>
        <p>Filter Section</p>
        <h4>Home</h4>
        <h4>Discover</h4>
        <h4>Recommended</h4>
      </article> */}
      <article>
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
                {show._embedded.venues[0].state.name}
              </p>
            </div>
          </div>
          <div className="showpage__date">
            <p>{show.dates.start.localDate}</p>
            <p>{show.dates.start.localTime}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ShowPage;
