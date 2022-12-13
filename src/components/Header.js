import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles.css";

function ColorSchemesExample() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="popular" className="linkto">
              Popular
            </Link>
            <Link to="/" className="linkto">
              Biography
            </Link>
            <Link to="paintings" className="linkto">
              Paintings
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default ColorSchemesExample;
