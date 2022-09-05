import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header(props) {
  const { navChoices = [], setCurrentChoice, currentChoice } = props;
  return (
    <div className="container">
      <Navbar expand="md" className=" row d-md-flex justify-content-md-between">
        <Container>
          <Navbar.Brand
            className="navbar-brand fw-bold fs-1 col-md-3 mt-md-5 mb-md-3 mx-sm-3"
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
