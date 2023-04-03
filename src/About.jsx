import React from "react";
import { useNavigate } from "react-router";
import Common from "./Common";
import img2 from "./img/about.png";

const About = () => {
  return (
    <>
      <Common
        text="welcome to about page"
        btnText="contact here"
        imgSource={img2}
        redirect="/contact"
      />
    </>
  );
};

export default About;
