import "./Bubble.scss";
import { Link } from "react-router-dom";

function Bubble({ artists }) {
  // console.log({artists.images[0]});

  return (
    <section className="artists">
      <article className="artists__info">
        {/* <div className="artists__photo">
          <h3 className="artists__name">{artists.name}</h3>
        </div> */}
        <div className="artists__photo">
          {/* <img src={artists.images[0]}></img> */}
          <h3 className="artists__name">blink-182</h3>
        </div>
        <div className="artists__photo">
          <h3 className="artists__name">Child's Play</h3>
        </div>
        <div className="artists__photo">
          <h3 className="artists__name">Beyoncé</h3>
        </div>

        {/* <div div className="artists__photo">
          <h3 className="artists__name">The Chicks</h3>
        </div>
        <div div className="artists__photo">
          <h3 className="artists__name">P!NK</h3>
        </div>
        <div div className="artists__photo">
          <h3 className="artists__name">Aaron Lewis</h3>
        </div>
        <div div className="artists__photo">
          <h3 className="artists__name">Elle King</h3>
        </div> */}
      </article>
    </section>
  );
}

export default Bubble;
