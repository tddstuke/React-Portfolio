import React from "react";

function Nav(props) {
  const {
    navChoices = [],
    setCurrentChoice,
    currentChoice,
    contactSelected,
    setContactSelected,
  } = props;
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
            {navChoices.map((choice) => (
              <li
                className={`col-md-3 mt-5 mb-3 ${
                  currentChoice.name === choice.name &&
                  !contactSelected &&
                  "text-primary"
                }`}
                key={choice.name}
              >
                <span
                  onClick={() => {
                    setCurrentChoice(choice);
                    setContactSelected(false);
                  }}
                >
                  {choice.name}
                </span>
              </li>
            ))}

            <li
              className={`col-md-3 mt-5 mb-3
               ${contactSelected && "text-primary"}`}
            >
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
