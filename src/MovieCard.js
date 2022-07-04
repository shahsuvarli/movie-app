import { BsCartPlusFill } from "react-icons/bs";

const MovieCard = (props) => {
  function addBasket(e) {
    e.preventDefault();
    console.log("first");
  }
  return (
    <div
      className="movie-card"
      onClick={() => props.addToPoster(props.movie)}
      draggable
    >
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500//${props.movie.poster_path}`}
        alt={props.movie.original_title}
      />
      <div className="movie-title">
        <h1>{props.movie.title}</h1>
        <BsCartPlusFill size={30} onClick={(e) => addBasket(e)} />
      </div>
    </div>
  );
};

export default MovieCard;
