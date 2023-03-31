import React from "react";
import HeroInternal from "./HeroInternal";

const About = () => {
  return (
    <div className="categories-container">
      <h1>About Us</h1>
      <HeroInternal />
      <p className="categories-text">
        We are a team of developers creating awesome web apps!
      </p>
    </div>
  );
};

export default About;
