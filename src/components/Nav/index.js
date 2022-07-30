import React from "react";

function Nav() {
  return (
    <div className="container">
      <header className="row d-flex justify-content-between">
        <h2 className="col-md-3 mt-5 mb-3">
          <a
            className="text-reset text-decoration-none"
            data-testid="link"
            href="/"
          >
            Todd Stuke
          </a>
        </h2>
        <nav className="col-md-7">
          <ul className=" row list-unstyled">
            <li className="col-md-3 mt-5 mb-3">
              <a
                className="text-reset text-decoration-none"
                data-testid="about"
                href="#about"
                // onClick={() => setContactSelected(false)}
              >
                About me
              </a>
            </li>
            <li className="col-md-3 mt-5 mb-3">
              <a
                className="text-reset text-decoration-none"
                data-testid="about"
                href="#about"
                // onClick={() => setContactSelected(false)}
              >
                Portfolio
              </a>
            </li>
            <li className="col-md-3 mt-5 mb-3">
              <a
                className=" text-reset text-decoration-none"
                data-testid="about"
                href="#about"
                // onClick={() => setContactSelected(false)}
              >
                Resume
              </a>
            </li>
            <li
              className="text-reset col-md-3 mt-5 mb-3"
              // className={`mx-2 ${contactSelected && "navActive"}`}
            >
              {/* <span onClick={() => setContactSelected(true)}> */}
              Contact
              {/* </span> */}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
