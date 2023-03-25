import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

const ResultsDisplay = ({ results }) => {
  return (
    <Row
      xs={1}
      sm={2}
      md={4}
    >
      {results.map((result) => (
        <Col key={result.id}>
          <Card style={{ width: "90%", margin: "1rem auto", height: 800 }}>
            {result.media_type === "person" ? (
              <Card.Img
                variant="top"
                src={
                  result.profile_path
                    ? `https://image.tmdb.org/t/p/w185${result.profile_path}`
                    : "https://via.placeholder.com/185x278?text=No+Image"
                }
              />
            ) : (
              <Card.Img
                variant="top"
                src={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/w185${result.poster_path}`
                    : "https://via.placeholder.com/185x278?text=No+Image"
                }
              />
            )}
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>
                {result.title || result.name}
              </Card.Title>
              <Card.Text>{result.release_date}</Card.Text>
              <Card.Text>{result.overview}</Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ResultsDisplay;
