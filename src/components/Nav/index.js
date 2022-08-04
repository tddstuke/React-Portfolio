import React from "react";

function Nav(props) {
  const { navChoices = [], setCurrentChoice, currentChoice } = props;
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
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
