import "./Bubble.scss";

function Bubble({ artists }) {
  return (
    <article className="artists__info">
      <div className="artists__photo">
        <img
          className="artists__image"
          src={artists.images[1].url}
          alt={artists.name}
        ></img>
        <h3 className="artists__name">{artists.name}</h3>
      </div>
    </article>
  );
}

export default Bubble;
