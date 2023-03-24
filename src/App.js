import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${API_BASE_URL}/search/multi?`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
        },
      });

      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search for movies and TV shows"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <img
                src={`${IMAGE_BASE_URL}/w500${result.profile_path}`}
                alt={result.title || result.name}
              />
              <h3>{result.title || result.name}</h3>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
