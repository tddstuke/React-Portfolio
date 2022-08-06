import React from "react";

function About() {
  return (
    <div className="container">
      <section>
        <h3 className="m-5">About Me</h3>
        <img
          className="mx-3 rounded-circle"
          src={require("../../assets/me.jpg")}
          alt="my profile"
        />
        <p className="m-5">
          {" "}
          Hello! My name is Todd Stuke and I am a recent graduate of a 6 month
          full-stack coding bootcamp at the University of Kansas. Prior to this
          I had no coding or web development experience. Through hard work and
          determination I have now developed skills in both front-end and
          back-end web development. I hope you'll take time to look at my
          projects I built during class (including this portfolio!) and some I
          have built or modified after. My Resume and a Contact page are also
          available here as well as a link to my GitHub. Hope to hear from you
          soon!
        </p>
      </section>
    </div>
  );
}

export default About;
