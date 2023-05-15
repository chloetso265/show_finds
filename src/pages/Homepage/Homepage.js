import "./Homepage.scss";
import Card from "../../components/Card/Card";
import Bubble from "../../components/Bubble/Bubble";
import Filter from "../../components/Filter/Filter";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const keyT = "YActy3kuBuQhgG62frGlgAfNjoVpXP73&attractionId=K8vZ9172T9V";
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
        `https://app.ticketmaster.com/discovery/v2/events?apikey=${keyT}&locale=*`
      )
      .then((result) => {
        const showsArray = result.data._embedded.events;
        console.log(showsArray);
        setShows(showsArray);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&countryCode=US&apikey=YActy3kuBuQhgG62frGlgAfNjoVpXP73`
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

  //   function collapsible() {
  //     const location = document.getElementsByClassName("collapsible");
  //     location.addEventListener("click", () => {
  //         if (className !=== "collapsible__active") {
  //             location.classList.add("collapsible__active")
  //         } else {
  //             location.classList.remove("collapsible__active")
  //         }
  //     })
  //   }
  //   var coll = document.getElementsByClassName("collapsible");
  //   var i;

  //   for (i = 0; i < coll.length; i++) {
  //     coll[i].addEventListener("click", function () {
  //       this.classList.toggle("active");
  //       var content = this.nextElementSibling;
  //       if (content.style.display === "block") {
  //         content.style.display = "none";
  //       } else {
  //         content.style.display = "block";
  //       }
  //     });
  //   }

  return (
    <section className="homepage">
      <Filter filters={filters} onFilter={setFilters} />
      {/* <article className="homepage__filter">
        <p>Filter Section</p>
        <button type="button" class="collapsible">
          Location
        </button>
        <div className="content">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> New York</label>
        </div>
        <div className="content">
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label for="vehicle2"> New Jersey</label>
        </div>
        <div className="content">
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <label for="vehicle3"> Connecticut</label>
          <input type="submit" value="Submit" />
        </div>
        <h4>Genre</h4>
      </article> */}
      <article className="homepage__main">
        <h2 className="homepage__title">Trending Now</h2>
        {/* <Card shows={shows} /> */}
        {filteredShows.map((show) => {
          return (
            <div className="homepage__trending">
              <Link to={`/${show.id}`}>
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
