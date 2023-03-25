import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function BioModal({ results }) {
  const [show, setShow] = useState(false);
  const [biography, setBiography] = useState("");
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);

    const getBioInfo = async () => {
      try {
        const id = results.id;
        if (results.media_type === "person") {
          const response = await axios.get(
            `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
          );
          const actorBiography = response.data.biography;
          setBiography(actorBiography);
        }
      } catch (err) {
        console.error(err);
        setError("Error retrieving biography");
      }
    };

    getBioInfo();
  };

  return (
    <>
      <Button
        style={{ marginTop: "10px" }}
        variant="primary"
        onClick={handleShow}
      >
        Show biography
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Biography</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error ? (
            <p>{error}</p>
          ) : biography ? (
            <p>{biography}</p>
          ) : (
            <p>No biography found</p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
