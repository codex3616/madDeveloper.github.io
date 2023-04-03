import React from "react";
import img1 from "./img/home8.avif";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        text="grow your bussiness with"
        btnText="get started"
        imgSource={img1}
        redirect="/service"
      />
    </>
  );
};

export default Home;
