import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import ResultsDisplay from "../../components/ResultsDisplay";
import "./Search.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`
    );

    setResults(response.data.results);
  };

  return (
    <div className="search-bar-container">
      <Form onSubmit={handleFormSubmit}>
        <FormControl
          type="text"
          placeholder="Search Movies/TV Shows/People"
          className="mr-sm-2 search-bar"
          value={query}
          onChange={handleInputChange}
          size="lg"
        />
        <Button variant="success" type="submit" id="search-btn" size="lg">
          Search
        </Button>
      </Form>
      <ResultsDisplay results={results} />
    </div>
  );
};

export default Search;
