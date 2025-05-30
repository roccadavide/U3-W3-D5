import { Button, Col, Collapse, Container, FormControl, Image, InputGroup, Nav, Navbar } from "react-bootstrap";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";

const SideBar = () => {
  return (
    <Col xs={2} className="px-0">
      <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
        <Container className="container flex-column align-items-start">
          <Navbar.Brand href="index.html" className="navbar-brand">
            <Image src={"../src/assets/logo.png"} alt="Spotify logo" style={{ width: "131px", height: "40px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="flex-column">
              <ul>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <HouseDoorFill className="me-2" />
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <BookFill className="me-2" />
                    Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <FormControl type="text" placeholder="Search" aria-label="Search" className="form-control" />
                    <div className="input-group-append">
                      <Button className="btn btn-outline-secondary btn-sm h-100 bg-dark">GO</Button>
                    </div>
                  </div>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn px-3 py-2">
          <Button variant="light" className="signup-btn me-2">
            Sign Up
          </Button>
          <Button variant="dark" className="login-btn me-2">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </Navbar>
    </Col>
  );
};

export default SideBar;
