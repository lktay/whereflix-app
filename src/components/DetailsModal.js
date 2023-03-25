import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const DB = process.env.REACT_APP_SERVER;

export default function DetailsModal({ results }) {
  const [show, setShow] = useState(false);
  const [providers, setProviders] = useState([]);
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);

    const getWatchInfo = async () => {
      try {
        const id = results.id;
        if (results.media_type === "tv") {
          const watchProvider = await axios.get(
            `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${API_KEY}&language=en-US`
          );
          const ukProviderData = watchProvider.data.results.GB.flatrate;
          setProviders(ukProviderData);
        }
        if (results.media_type === "movie") {
          const watchProvider = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}&language=en-US`
          );
          const ukProviderData = watchProvider.data.results.GB.flatrate;
          setProviders(ukProviderData);
        }
      } catch (err) {
        console.error(err);
        setError("No providers found");
      }
    };

    getWatchInfo();
    console.log(providers);
  };
  const addMedia = async (providers) => {
    try {
      const providerNames = providers.map((provider) => provider.provider_name);
      const response = await fetch(`${DB}/medialist/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiID: results.id,
          title: results.name,
          poster_path: results.poster_path,
          description: results.overview,
          media_type: results.media_type,
          providers: providerNames,
        }),
      });
      const data = await response.json();
      console.log("Media added to watchlist:", data);
    } catch (err) {
      console.error("Error adding media to watchlist:", err);
    }
  };

  return (
    <>
      <Button
        style={{ marginTop: "10px" }}
        variant="primary"
        onClick={handleShow}
      >
        Where to watch
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Where to watch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error ? (
            <p>{error}</p>
          ) : providers.length > 0 ? (
            providers.map((provider) =>
              provider && provider ? (
                <p key={provider.provider_id}>{provider.provider_name}</p>
              ) : null
            )
          ) : (
            <p>No providers found</p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => addMedia(providers)}
          >
            Add to Watchlist
          </Button>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
