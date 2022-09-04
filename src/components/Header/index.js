import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header(props) {
  const { navChoices = [], setCurrentChoice, currentChoice } = props;
  return (
    <div className="container">
      {/* <header className="row d-md-flex justify-content-md-between"> */}
      {/* <h2 className="col-md-3 mt-5 mb-3">
          <a
            className="text-reset text-decoration-none"
            data-testid="link"
            href="/"
          >
            Todd Stuke
          </a>
        </h2> */}
      <Navbar expand="md" className=" row d-md-flex justify-content-md-between">
        <Container>
          <Navbar.Brand
            className="navbar-brand fw-bold fs-2 col-md-3 mt-md-5 mb-md-3 mx-sm-3 ml-sm-0"
            href="/"
          >
            Todd Stuke
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container className="mx-sm-2">
              <Nav className="row col-md-12 list-unstyled">
                {navChoices.map((choice) => (
                  <Nav.Link
                    className={`col-md-3 mt-md-5 mb-md-3 ${
                      currentChoice.name === choice.name && "text-primary"
                    }`}
                    key={choice.name}
                  >
                    <span
                      onClick={() => {
                        setCurrentChoice(choice);
                      }}
                    >
                      {choice.name}
                    </span>
                  </Nav.Link>
                ))}
                {/* </ul> */}
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
