import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>About this page: 映画が好きなので作成</span>
      <span>created at 2020</span>
    </div>
  );
}

export default About;
