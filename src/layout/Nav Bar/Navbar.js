import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";


import logo from "./images/logo.svg"
function NavbarComponent() {
 let { pathname } = useLocation();
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
              className="bg-dark z-1"
            >
              <div className="bg-light">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    className="text-dark font-monospace"
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    Fylo
                  </Offcanvas.Title>
                  <span className="fs-2 text-dark ms-auto position-absolute end-0 me-3 ">
                    +
                  </span>
                </Offcanvas.Header>
              </div>
              <Offcanvas.Body>
                <Nav className="justify-content-end  flex-grow-1 pe-3">
                  <Link
                    to="/"
                    className={`${
                      pathname === "/" ? "text-secondary" : "text-white"
                    }  pt-2 m-0 p-0 ms-5 text-decoration-none fw-bolder `}
                  >
                    Home
                  </Link>
                  <Link
                    to="/tems"
                    className={`${
                      pathname === "/tems" ? "text-secondary" : "text-white"
                    }  pt-2 m-0 p-0 ms-5 text-decoration-none fw-bolder`}
                  >
                    Tems
                  </Link>
                  <Link
                    to="/features"
                    className={`${
                      pathname === "/features" ? "text-secondary" : "text-white"
                    } pt-2 m-0 p-0 ms-5 text-decoration-none fw-bolder`}
                  >
                    Features
                  </Link>
                  <Link
                    to="/sign-in"
                    className={`${
                      pathname === "/sign-in" ? "text-secondary" : "text-white"
                    } pt-2 m-0 p-0 ms-5 text-decoration-none fw-bolder`}
                  >
                    Sign-in
                  </Link>
                </Nav>
                <Form className="d-flex mt-2">
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

export default NavbarComponent;
