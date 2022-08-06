import React from "react";

function Resume() {
  return (
    <section className="container">
      <h3 className="m-5">My Resume</h3>
      <a
        className="text-decoration-none mx-5"
        href={require("../../assets/todd-stuke-resume.pdf")}
        download
        rel="noopener noreferrer"
        target="_blank"
      >
        Download Resume
      </a>
      <h4 className="mx-5 mt-3">Front End Skills</h4>
      <ul className="mx-5 ">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h4 className="mx-5 mt-2">Back End Skills</h4>
      <ul className="mx-5 ">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
}

export default Resume;
