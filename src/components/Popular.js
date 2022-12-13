import Card from "react-bootstrap/Card";

function ImageAndTextExample() {
  return (
    <>
      <Card style={{ marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Anonymous_Mona_Lisa.jpg"
        />
        <Card.Body>
          <Card.Title>Mona Lisa</Card.Title>
          <Card.Text>
            The Mona Lisa is a half-length portrait painting by Italian artist
            Leonardo da Vinci. Considered an archetypal masterpiece of the
            Italian Renaissance, it has been described as "the best known, the
            most visited, the most written about, the most sung about, the most
            parodied work of art in the world".
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ImageAndTextExample;
