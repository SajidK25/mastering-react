import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../common/like";
import Pagination from "../common/pagination";
class Movies extends Component {
  state = { movies: getMovies() };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie) => {
    console.log("like clicked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    console.log("index", index);
    movies[index] = { ...movies[index] };
    console.log("movies[index]", movies[index]);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There is no movie is database</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLikedToggle={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <Pagination />
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
