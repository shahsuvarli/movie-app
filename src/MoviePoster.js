import { Component } from "react";
import { FcBusinessman } from "react-icons/fc";
import { MdClear } from "react-icons/md";

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
          <div onClick={this.props.clearPoster} style={{ cursor: "pointer" }}>
            <MdClear size={30} color="wheat" />
          </div>
          <h2>
            {this.props.movieData.title} ({this.props.movieData.vote_average})
            {this.props.movieData.adult && <FcBusinessman size={30} />}
          </h2>
          <h3>{this.props.movieData.release_date}</h3>
          <p>
            {this.props.movieData.overview.split(" ").slice(0, 35).join(" ")}{" "}
            <strong>read more...</strong>
          </p>
        </div>
      </div>
    );
  }
}
export default MoviePoster;
