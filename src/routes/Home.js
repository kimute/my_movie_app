import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
// React call render() component from class
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // get values from api
  getMovies = async () => {
    //this.state.data.data
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // console.log(movies);
    // {movie:from state , movie: from axios}
    // U can write like this:
    //             this.setState({movies:movies}) →　this.setState({movies})

    // insert values into movie[] of App class
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    // ES6
    const { isLoading, movies } = this.state;
    // change class to className for collision prevention
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_ctxt">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default Home;
