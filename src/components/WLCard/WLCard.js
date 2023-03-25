import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./WLCard.css";

const MediaCard = ({ media, completeMedia, deleteMedia }) => {
  const handleCompleteClick = () => {
    completeMedia(media._id);
  };

  const handleDeleteClick = () => {
    deleteMedia(media._id);
  };
  return (
    <Card style={{ width: "60%", margin: "1rem auto" }}>
      <Card.Body className="flex">
        <Card.Img
          className={media.complete ? "is-complete" : ""}
          variant="left"
          width={200}
          height={310}
          src={`https://image.tmdb.org/t/p/w185${media.posterUrl}`}
        />
        <Card.Body>
          <Card.Header as="h4">{media.title}</Card.Header>
          <Card.Body style={{ height: "12rem" }}>
            <Card.Text>{media.description}</Card.Text>
            <Card.Text>Can watch on (insert providers here)</Card.Text>
          </Card.Body>
          <Card.Footer className="footer">
            <Button onClick={handleCompleteClick}>Finished watching?</Button>
            <Card.Text as="h5">
              {media.complete ? "completed" : "not started"}
            </Card.Text>
          </Card.Footer>
        </Card.Body>
        <Button
          className="delete-btn"
          onClick={handleDeleteClick}
        >
          Delete from list
        </Button>
      </Card.Body>
    </Card>
  );
};
export default MediaCard;
