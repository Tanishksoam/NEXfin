import React from "react";

import Hero from "../components/hero";
import Steps from "../components/steps";
import TodayIs from "../components/day";

const Home = () => {
  return (
    <div>
      <Hero />
      <TodayIs />
      <Steps />
    </div>
  );
};

export default Home;
