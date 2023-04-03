import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="home d-flex align-items-center mb-1">
        <div className="row container-fluid">
          <div className="col-10 mx-auto  ">
            <div className="row">
              <div className="col-md-6 col-sm-8  col-lg-6 pt-5 pt-lg-0 order-sm-2 order-2 order-lg-1 d-flex justify-content-center align-items-start flex-column ">
                <h2 className=" text-capitalize">
                  {props.text}
                  <span className=" text-primary"> MadDeveloper</span>
                </h2>
                <p className="para mt-1">
                  We are team of talented developer making websites...
                </p>
                <NavLink
                  to={props.redirect}
                  className="btn btn-outline-primary text-capitalize mt-1 mb-5"
                >
                  {props.btnText}
                </NavLink>
              </div>
              <div className=" col-sm-8  col-lg-6 order-sm-1 order-1 order-lg-2 header-img ">
                <img
                  className=" img-fluid animated"
                  src={props.imgSource}
                  alt="grow business"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
