import React, { useState } from "react";

function Project() {
  const [projects] = useState([
    {
      name: "Voting With Friends",
      description:
        "Make big and little choices eaiser by polling your friends or co-workers with this easy to use app!",
      link: "https://shielded-bastion-93901.herokuapp.com/",
      github: "https://github.com/votingwithfriends",
    },
    {
      name: "Not Another IMDB",
      description:
        "Search for your favorite movies or find new favorites and add them to your custom lists!",
      link: "https://protected-woodland-09194.herokuapp.com",
      github: "https://github.com/tddstuke/Not-Another-IMDB",
    },
    {
      name: "Tech Blog",
      description:
        "Read, write and comment on Tech news using this intuitive blog site!",
      link: "https://agile-mesa-60950.herokuapp.com/",
      github: "https://github.com/tddstuke/Tech-Blog",
    },
  ]);

  return (
    <div className="row d-flex justify-content-around my-5">
      {projects.map((image, i) => (
        <div className="card col-md-5 p-2 m-3 " key={image.name}>
          <a href={image.link} className="text-reset text-decoration-none">
            {/* <div className="col"> */}
            <div className="card-block p-2">
              <h4 className="card-title">{image.name}</h4>
            </div>

            <div className="row no-gutters">
              <img
                className="col-md-12"
                src={require(`../../assets/${i}.jpg`)}
                alt={image.name}
              />
            </div>
            <div className="card-block p-2">
              <p className="card-text">{image.description}</p>
            </div>
          </a>
          <a
            href={image.github}
            className="card-footer d-flex justify-content-center"
          >
            <i className="bi bi-github" style={{ fontSize: 20 }}></i>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Project;
