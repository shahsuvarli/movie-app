import "./App.css";
import { Component } from "react";
import MoviePoster from "./MoviePoster";
import img from "./images/movie-poster.png";
import { MdLocalMovies } from "react-icons/md";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor() {
    super();
    this.searchMovie = this.searchMovie.bind(this);
    this.getData = this.getData.bind(this);
    this.clearPoster = this.clearPoster.bind(this);
    this.addToPoster = this.addToPoster.bind(this);
    this.state = {
      initialData: [],
      data: [],
      searchResult: "",
      showMovie: false,
      movieData: "",
    };
  }

  addToPoster(movie) {
    this.setState({
      showMovie: true,
      movieData: movie,
    });
  }

  searchMovie(e) {
    this.setState((state) => {
      return { searchResult: e.target.value };
    });
    this.setState({
      initialData: this.state.data.filter((movie) =>
        movie.original_title
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ),
    });
  }

  getData() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d83f024ca7d748222de8223f34bb78d2"
    )
      .then((res) => res.json())
      .then((movies) =>
        this.setState({ data: movies.results, initialData: movies.results })
      );
  }

  clearPoster() {
    this.setState({ movieData: "" });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="logo-container">
            <MdLocalMovies size={30} color="dodgerblue" />
            <h1>Movie App</h1>
          </div>
          <input
            placeholder="Bəyin oğurlanması..."
            id="search-movie"
            type="search"
            onChange={(e) => this.searchMovie(e)}
          />
          {this.state.movieData ? (
            <MoviePoster
              movieData={this.state.movieData}
              clearPoster={this.clearPoster}
            />
          ) : (
            <div className="placeholder-image-container">
              <img src={img} alt="img" />
            </div>
          )}
          <div className="movies-board">
            {this.state.initialData.length ? (
              this.state.initialData.map((movie) => (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                  addToPoster={this.addToPoster}
                />
              ))
            ) : (
              <img
                className="not-found"
                src="https://img.freepik.com/free-vector/concept-website-maintenance_118813-1957.jpg?w=1800"
                alt="not-found"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
