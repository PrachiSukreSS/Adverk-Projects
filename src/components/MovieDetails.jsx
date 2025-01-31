import PropTypes from "prop-types";

function MovieDetails({ movie }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{movie.Title}</h1>
      <p className="mb-4">
        <strong>Year:</strong> {movie.Year}
      </p>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-auto mt-4"
      />
      <p>More information about the movie can go here...</p>
    </div>
  );
}
MovieDetails.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;
