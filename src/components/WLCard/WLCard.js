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

  let mediaTypeText;
  if (media.media_type === "movie") {
    mediaTypeText = "Movie";
  } else if (media.media_type === "tv") {
    mediaTypeText = "TV show";
  } else {
    mediaTypeText = "Unknown media type.";
  }
  return (
    <Card style={{ width: "60%", margin: "1rem auto" }}>
      <Card.Body className="flex">
        <Card.Img
          className={media.complete ? "is-complete" : ""}
          variant="left"
          width={200}
          height={310}
          src={`https://image.tmdb.org/t/p/w185${media.poster_path}`}
        />
        <Card.Body>
          <Card.Header as="h4">{media.title}</Card.Header>
          <Card.Body>
            <Card.Text>{mediaTypeText}</Card.Text>
            <Card.Text>{media.description}</Card.Text>
            <Card.Body>
              <Card.Text>Available to watch on:</Card.Text>
              <Card.Text>
                {media.providers && media.providers.length > 0 ? (
                  <ul>
                    {media.providers.map((provider) => (
                      <li key={provider}>{provider}</li>
                    ))}
                  </ul>
                ) : (
                  "No providers available"
                )}
              </Card.Text>
            </Card.Body>
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
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
export default MediaCard;
