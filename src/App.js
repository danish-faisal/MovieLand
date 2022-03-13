import { useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = 'http://www.omdbapi.com/?apikey=259341cb';

const movie = {
  "Title": "Avengers: Endgame",
  "Year": "2019",
  "imdbID": "tt4154796",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
};

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('avengers');
  }, [])


  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input type="text" placeholder="Search for movies" value="Avengers" onChange={() => { }} />
        <img src={SearchIcon} alt="search" onClick={() => { }} />
      </div>

      <div className="container">
        <MovieCard movie={movie} />
      </div>
    </div>
  );
}

export default App;
