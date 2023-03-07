import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";


import logo from "./images/logo.svg"
function OffcanvasExample() {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          expand={expand}
          className="mb-3 "
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img width={`100`} src={logo} alt="..." />
            </Navbar.Brand>
            <div className="bg-white rounded">
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-dark"
            >
              <div className="bg-light">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    className="text-dark font-monospace"
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    Fylo
                  </Offcanvas.Title>
                </Offcanvas.Header>
              </div>
              <Offcanvas.Body>
                <Nav className="justify-content-end  flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="text-white">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action2" className="text-white">
                    Contact
                  </Nav.Link>{" "}
                  <Nav.Link href="#action2" className="text-white">
                    About
                  </Nav.Link>
                  <Nav.Link href="#action2" className="text-white">
                    Projects
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
