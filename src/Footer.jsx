import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  //   console.log(currentDate);
  return (
    <>
      <footer className=" text-center bg-light w-100 ">
        <p className="">© {year} MadDeveloper. All Rights Reserved..</p>
      </footer>
    </>
  );
};

export default Footer;
