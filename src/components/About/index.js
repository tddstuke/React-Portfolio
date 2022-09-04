import React from "react";

function About() {
  return (
    <div className="container">
      <section>
        <h3 className="m-5 text-center text-lg-start px-5">About Me</h3>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 col-lg-3 d-flex justify-content-md-center">
            <img
              className="rounded-circle mx-auto"
              style={{ height: "180px" }}
              src={require("../../assets/me.jpg")}
              alt="my profile"
            />
          </div>
          <div className="col-md-12 col-lg-8">
            <p className="m-5">
              {" "}
              Hello! My name is Todd Stuke and I am a recent graduate of a 6
              month full-stack coding bootcamp at the University of Kansas.
              Prior to this I had no coding or web development experience.
              Through hard work and determination I have now developed skills in
              both front-end and back-end web development. I hope you'll take
              time to look at my projects I built during class (including this
              portfolio!) and some I have built or modified after. My Resume and
              a Contact page are also available here as well as a link to my
              GitHub. Hope to hear from you soon!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
