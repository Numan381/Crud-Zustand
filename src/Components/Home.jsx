import React from "react";
import Header from "./Header";
import HeroSession from "./HeroSession";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-[25%]">
        <Header />
      </div>
      <div className="w-[75%]">
        <HeroSession />
      </div>
    </div>
  );
};

export default Home;
