import React from "react";
import HeaderContainer from "./HeaderContainer";
import HomeCarousel from "./HomeCarousel";
import TextContainer from "./TextContainer";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <div>
      <HeaderContainer />
      <TextContainer />
      <HomeCarousel />
      <HomeCard />
    </div>
  );
};

export default Home;
