import React, { useState } from "react";

function Project() {
  const [projects] = useState([
    {
      name: "Not Another IMDB",
      description:
        "Search for your favorite movies or find new favorites and add them to your custom lists!",
      link: "https://protected-woodland-09194.herokuapp.com",
    },
    {
      name: "Tech Blog",
      description:
        "Read, write and comment on Tech news using this intuitive blog site!",
      link: "https://agile-mesa-60950.herokuapp.com/",
    },
  ]);

  return (
    <div className="row d-flex justify-content-around my-5">
      {projects.map((image, i) => (
        <a
          href={image.link}
          className="card col-md-5 p-2 text-reset text-decoration-none"
        >
          <div className="col">
            <div className="card-block p-2">
              <h4 className="card-title">{image.name}</h4>
            </div>

            <div className="row no-gutters">
              {/* <div className="col-6 carousel-caption text-danger text-left">
              <h4 className="card-title">{image.name}</h4>
              <p className=" card-text">{image.description}</p>
            </div> */}
              <img
                className="col-md-12"
                src={require(`../../assets/${i}.jpg`)}
                alt={image.name}
              />
            </div>
            <div className="card-block p-2">
              <p className="card-text">{image.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Project;
