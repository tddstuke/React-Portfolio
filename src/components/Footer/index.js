import React from "react";

function footer() {
  return (
    <div className="container">
      <footer className="row d-flex justify-content-center">
        <a href="https://github.com/tddstuke" className="col-md-1">
          <i className="bi bi-github" style={{ fontSize: 50 }}></i>
        </a>
        <a
          href="https://linkedin.com/in/todd-stuke
"
          className="col-md-1"
        >
          <i className="bi bi-linkedin" style={{ fontSize: 50 }}></i>
        </a>
        <a href="https://twitter.com/tddstuke" className="col-md-1">
          <i className="bi bi-twitter" style={{ fontSize: 50 }}></i>
        </a>
      </footer>
    </div>
  );
}

export default footer;
