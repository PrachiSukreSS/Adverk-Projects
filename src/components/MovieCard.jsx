import PropTypes from "prop-types";

function MovieCard({ movie, onClick }) {
  return (
    <div className="border p-4 rounded shadow-lg" onClick={onClick}>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/150"
        }
        alt={movie.Title}
        className="w-full h-auto"
      />
      <h3 className="text-xl mt-2">{movie.Title}</h3>
      <p className="text-sm text-gray-500">{movie.Year}</p>
    </div>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCard;
