import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./WLCard.css";

const MediaCard = (media) => {
  return (
    <Card
      key={media._id}
      style={{ width: "60%", margin: "1rem auto" }}
    >
      <Card.Body className="flex">
        <Card.Img
          className={media.complete ? "is-complete" : ""}
          variant="left"
          width={200}
          height={310}
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
        />
        <Card.Body>
          <Card.Header as="h4">Title</Card.Header>
          <Card.Body style={{ height: "12rem" }}>
            <Card.Text>description here</Card.Text>
            <Card.Text>Can watch on (insert providers here)</Card.Text>
          </Card.Body>
          <Card.Footer className="footer">
            <Button>Finished watching?</Button>
            <Card.Text as="h5">
              {media.complete ? "completed" : "not started"}
            </Card.Text>
          </Card.Footer>
        </Card.Body>
        <Button className="delete-btn">Delete from list</Button>
      </Card.Body>
    </Card>
  );
};
export default MediaCard;
