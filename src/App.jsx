import "./App.css";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header>
        <nav className="navbar"></nav>
        <div className="logo">
          <img src="logo.jpeg" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search movies by title, genre, or actor"
          />
        </div>
      </header>
      {/* Main Content */}
      <main className="main-content">
        <section className="category-tabs">
          <button className="tab-btn">Popular</button>
          <button className="tab-btn">Favorites</button>
          <button className="tab-btn">By Rating</button>
          <button className="tab-btn">By Popularity</button>
          <button className="tab-btn">By Type</button>
        </section>

        <section className="movie-grid">
          <h2>Discover New Movies</h2>
          <div className="grid">
            {/* Movie Cards */}
            <MovieCard title="Interstellar Journey" image="interstell.jpeg" />
            <MovieCard title="Funny Animation" image="funny.jpeg" />
            <MovieCard title="Haunted Mansion" image="haunted.jpeg" />
            <MovieCard title="Love Actually" image="love.jpeg" />
            <MovieCard title="Epic Battles" image="epic.jpeg" />
            <MovieCard title="Alien Encounter" image="alien.jpeg" />
            <MovieCard title="Mysterious Plot" image="mystery.jpeg" />
            <MovieCard title="Undercover Operation" image="undercover.jpeg" />
          </div>
          <button className="load-more-btn">Load More</button>
        </section>
      </main>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Our Story</a>
          <a href="#">Join Our Team</a>
          <a href="#">For Filmmakers</a>
          <a href="#">Advertise with Us</a>
        </div>
        <div className="footer-social">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

function MovieCard({ title, image }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-image" />
      <h3>{title}</h3>
      <div className="movie-meta">
        <button className="like-btn">❤️</button>
        <span className="rating">4.5</span>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default App;
