import "./Homepage.scss";
import Card from "../../components/Card/Card";
import axios from "axios";

function Homepage() {
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
        <Card />
      </article>
    </section>
  );
}

export default Homepage;
