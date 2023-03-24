import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const WatchlistContainer = () => {
  const DB = process.env.REACT_APP_SERVER;
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    getWatchlist();
  }, []);
  const getWatchlist = async () => {
    try {
      const response = await axios.get(`${DB}/medialist`);
      setWatchlist(response.data);
    } catch (err) {
      console.error("Error: ", err);
    }
  };
};
export default WatchlistContainer;
