import "./App.css";
import { Component } from "react";
import MoviePoster from "./MoviePoster";

class App extends Component {
  constructor() {
    super();
    this.searchMovie = this.searchMovie.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      initialData: [],
      searchResult: "",
      data: [],
      showMovie: false,
      movieData: "",
    };
  }

  searchMovie(e) {
    this.setState((state) => {
      return { searchResult: e.target.value };
    });
    console.log(this.state.searchResult);
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

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <h1>Movie App</h1>
          <input
            placeholder="Movie"
            id="search-movie"
            type="search"
            onChange={(e) => this.searchMovie(e)}
          />
          {this.state.movieData && (
            <MoviePoster movieData={this.state.movieData} />
          )}
          <div className="movies-board">
            {this.state.initialData.map((movie) => {
              return (
                <div
                  key={movie.id}
                  className="movie-card"
                  draggable
                  onClick={() =>
                    this.setState({
                      showMovie: true,
                      movieData: movie,
                    })
                  }
                >
                  <img
                    className="movie-image"
                    src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                  <span className="movie-title">{movie.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
