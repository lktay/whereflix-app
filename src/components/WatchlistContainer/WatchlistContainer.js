import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MediaCard from "../WLCard/WLCard";

//container to render WLcards
const WatchlistContainer = () => {
  const DB = process.env.REACT_APP_SERVER;
  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //call API to populate cards
  const getWatchlist = async () => {
    try {
      const response = await axios.get(`${DB}/medialist`);
      setWatchlist(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    getWatchlist();
  }, []);

  // Function to handle completing a media item
  const completeMedia = async (id) => {
    const data = await fetch(`${DB}/medialist/complete/${id}`).then((res) =>
      res.json()
    );
    setWatchlist((media) =>
      media.map((media) => {
        if (media._id === data._id) {
          media.complete = data.complete;
        }
        return media;
      })
    );
  };
  const deleteMedia = async (id) => {
    const data = await fetch(`${DB}/medialist/delete/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());

    setWatchlist((watchlist) =>
      watchlist.filter((media) => media._id !== data._id)
    );
  };

  return (
    <>
      <div>
        <h2 style={{ margin: "1rem auto", textAlign: "center" }}>
          Your Watchlist
        </h2>
        {!isLoading && watchlist.length > 0 ? (
          <div className="list-container">
            {watchlist.map((media) => (
              <MediaCard
                key={media._id}
                media={media}
                completeMedia={completeMedia}
                deleteMedia={deleteMedia}
              />
            ))}
          </div>
        ) : (
          <p style={{ margin: "1rem auto", textAlign: "center" }}>
            {isLoading
              ? ""
              : "There is nothing on your watchlist. Trying searching!"}
          </p>
        )}
      </div>
    </>
  );
};

export default WatchlistContainer;
