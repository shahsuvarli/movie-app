import { Component } from "react";
import { FcBusinessman } from "react-icons/fc";

class MoviePoster extends Component {
  render() {
    return (
      <div className="poster">
        <div className="image-container">
          <img
            className="poster-image"
            src={`https://image.tmdb.org/t/p/original/${this.props.movieData.backdrop_path}`}
            alt={this.props.movieData.original_title}
          />
        </div>
        <div className="movie-detail">
          <h2>
            {this.props.movieData.title} ({this.props.movieData.vote_average})
            {this.props.movieData.adult && <FcBusinessman size={30} />}
          </h2>
          <h3>{this.props.movieData.release_date}</h3>
          <p>{this.props.movieData.overview}</p>
          {/* <h1 className="x-button">X</h1> */}
        </div>
      </div>
    );
  }
}
export default MoviePoster;
