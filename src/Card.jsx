import React from "react";
import img from "./img/card1.webp";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-10 col-md-4 cardss mx-auto">
        <div className="card">
          <img
            src={props.imgSrc}
            className="card-img-top img-fluid "
            alt="imgs"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary">
              Enroll Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
