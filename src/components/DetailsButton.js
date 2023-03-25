import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const DetailsButton = ({ result }) => {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleDetails = async () => {
  //   if (result.media_type === "person") {
  //     const response = await getPerson(result.id);
  //     setDetails(response.data);
  //   } else {
  //     const response = await getMovieOrTV(result.media_type, result.id);
  //     setDetails(response.data);
  //   }
  //   handleShow();
  // };

  return (
    <>
      <Button variant="primary" onClick={handleDetails}>
        Details
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{details.title || details.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{details.overview}</Modal.Body>
      </Modal>
    </>
  );
};

export default DetailsButton;
