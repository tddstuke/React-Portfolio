import React, { useState } from "react";

function Project() {
  const [projects] = useState([
    // {
    //   name: "Voting With Friends",
    //   description:
    //     "Make big and little choices easier by polling your friends or co-workers with this easy to use app!(currently under construction)",
    //   link: "https://shielded-bastion-93901.herokuapp.com/",
    //   github: "https://github.com/votingwithfriends",
    // },
    {
      name: "Not Another IMDB",
      description:
        "Search for your favorite movies or find new favorites and add them to your custom lists! Version 2.0 coming soon!",
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
    {
      name: "Weather Dashboard",
      description:
        "Search the forecast for any city and receive a five day forecast",
      link: "https://tddstuke.github.io/Weather-Dashboard/",
      github: "https://github.com/tddstuke/Weather-Dashboard",
    },
    {
      name: "Budget Tracker",
      description:
        "Track deposits and withdrawals with or without data/internet connection",
      link: "https://infinite-shelf-94097.herokuapp.com/",
      github: "https://github.com/tddstuke/Budget-Tracker",
    },
    {
      name: "Note Taker",
      description:
        "Organize, create and delete notes with this handy Note Taker app",
      link: "https://fathomless-castle-53803.herokuapp.com/notes",
      github: "https://github.com/tddstuke/Note-Taker",
    },
  ]);

  return (
    <div className="row d-flex justify-content-around my-5">
      {projects.map((image, i) => (
        <div className="card shadow col-md-5 p-2 m-3" key={image.name}>
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
            className="card-footer mt-auto d-flex justify-content-center"
          >
            <i className="bi bi-github" style={{ fontSize: 20 }}></i>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Project;
