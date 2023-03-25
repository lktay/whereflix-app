import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

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
        setError("Error retrieving watch providers");
      }
    };

    getWatchInfo();
    console.log(providers);
  };

  return (
    <>
      <Button
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
