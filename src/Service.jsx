import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <section className="service">
        <h3 className=" text-capitalize text-center my-5 display-6">
          our services
        </h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((val, idx) => {
                  return (
                    <Card key={idx} imgSrc={val.imgSource} title={val.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
