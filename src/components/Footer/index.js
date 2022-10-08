import React from "react";

function footer() {
  return (
    <div className="container mt-5">
      <footer className="row d-flex justify-content-center">
        <a href="https://github.com/tddstuke" className="col-1">
          <i className="bi bi-github" style={{ fontSize: 50 }}></i>
        </a>
        <a
          href="https://linkedin.com/in/todd-stuke
"
          className="col-1 mx-5"
        >
          <i className="bi bi-linkedin" style={{ fontSize: 50 }}></i>
        </a>
        <a href="mailto:tddstuke@gmail.com" className="col-1 me-5">
          <i className="bi bi-envelope" style={{ fontSize: 50 }}></i>
        </a>
      </footer>
    </div>
  );
}

export default footer;
