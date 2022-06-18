import { Component } from "react";

class MovieCard extends Component {
  render() {
    return (
      <div
        className="movie-card"
        onClick={() => this.props.addToPoster(this.props.movie)}
        draggable
      >
        <img
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w500//${this.props.movie.poster_path}`}
          alt={this.props.movie.original_title}
        />
        <span className="movie-title">{this.props.movie.title}</span>
      </div>
    );
  }
}

export default MovieCard;
