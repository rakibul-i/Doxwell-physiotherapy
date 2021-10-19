import React from "react";
import About from "../shared/About";
import Therapists from "./Therapists";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Therapists />
    </div>
  );
};

export default Home;
