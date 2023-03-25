import React, { useState } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import DetailsModal from "./DetailsModal";

const ResultsDisplay = ({ results }) => {
  const [selectedResult, setSelectedResult] = useState(null);

  const handleDetailsClick = (resultId) => {
    setSelectedResult(resultId);
  };

  return (
    <>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {results.map((result) => (
            <Col key={result.id}>
              <Card style={{ backgroundColor: "DimGray" }} className="h-100">
                <div className="overflow-hidden h-100">
                  {result.media_type === "person" ? (
                    <Card.Img
                      variant="top"
                      src={
                        result.profile_path
                          ? `https://image.tmdb.org/t/p/w185${result.profile_path}`
                          : "https://via.placeholder.com/185x278?text=No+Image"
                      }
                      style={{ height: "500px", objectFit: "cover" }}
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src={
                        result.poster_path
                          ? `https://image.tmdb.org/t/p/w185${result.poster_path}`
                          : "https://via.placeholder.com/185x278?text=No+Image"
                      }
                      style={{ height: "500px", objectFit: "cover" }}
                    />
                  )}
                </div>
                <Card.Body
                  className="d-flex flex-column justify-content-between"
                  style={{ height: "18rem", color: "white" }}
                >
                  <div>
                    <Card.Title
                      style={{
                        fontWeight: "bold",
                        minHeight: "3rem",
                        maxHeight: "3rem",
                        overflow: "auto",
                      }}
                    >
                      {result.title || result.name}
                    </Card.Title>
                    <Card.Text>
                      {result.release_date || "No Release Date Listed"}
                    </Card.Text>
                    <div
                      className="overflow-auto"
                      style={{ maxHeight: "7rem", minHeight: "7rem" }}
                    >
                      <Card.Text>{result.overview}</Card.Text>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    {result.media_type !== "person" && (
                      <Button
                        variant="primary"
                        style={{ marginTop: "5px" }}
                        onClick={() => handleDetailsClick(result.id)}
                      >
                        Details
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {selectedResult && (
        <DetailsModal
          resultId={selectedResult}
          onClose={() => setSelectedResult(null)}
        />
      )}
    </>
  );
};

export default ResultsDisplay;
