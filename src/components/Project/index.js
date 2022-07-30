import React, { useState } from "react";

function Project() {
  const [projects] = useState([
    {
      name: "Not Another IMDB",
      description:
        "Search for your favorite movies or find new favorites and add then to your custom lists!",
    },
    {
      name: "Tech Blog",
      description:
        "Read, Write and comment on Tech news using this intuitive blog site!",
    },
  ]);

  return (
    <div className="row d-flex justify-content-around my-5">
      {projects.map((image, i) => (
        <div className="card col-md-5  ">
          <div className="col">
            <div className="card-block px-2">
              <h4 className="card-title">{image.name}</h4>
              <p className="card-text">{image.description}</p>
            </div>
          </div>
          <div className="row no-gutters">
            <img
              className="col-md-12"
              src={require(`../../assets/${i}.jpg`)}
              alt={image.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
