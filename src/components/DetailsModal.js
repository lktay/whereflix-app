import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const DetailsModal = ({ result, show, onHide }) => {
  const [watchData, setWatchData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let watchUrl;
      if (result.media_type === "movie") {
        watchUrl = `https://api.themoviedb.org/3/movie/${result.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=watch/providers`;
      } else if (result.media_type === "tv") {
        watchUrl = `https://api.themoviedb.org/3/tv/${result.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=watch/providers`;
      }
      const { data } = await axios.get(watchUrl);
      setWatchData(data["watch/providers"].results);
    };
    fetchData();
  }, [result]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{result.title || result.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {watchData && (
          <div>
            <h5>Watch/Provider:</h5>
            {watchData.map((provider) => (
              <div key={provider.provider_id}>
                <span>{provider.provider_name}</span>
                <br />
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
