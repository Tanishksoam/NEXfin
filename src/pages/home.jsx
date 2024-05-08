import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Hero from "../components/hero";
import Header from "../components/header";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Analytics />
    </div>
  );
};

export default Home;
