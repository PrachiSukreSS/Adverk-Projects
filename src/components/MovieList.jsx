import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => onMovieClick(movie)}
        />
      ))}
    </div>
  );
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      // add other movie properties here if needed
    })
  ).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
