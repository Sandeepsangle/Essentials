import React from "react";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <img src={require("./HomePageimges.jpg")}/>
    </>
  );
};

export default HomePage;
