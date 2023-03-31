import React from "react";
import HeaderContainer from "./HeaderContainer";
import HomeCarousel from "./HomeCarousel";
import TextContainer from "./TextContainer";
import HomeCard from "./HomeCard";
import Search from "./Search";

const Home = () => {
  return (
    <div>
      <Search />
      <HeaderContainer />
      <HomeCarousel />
      <TextContainer />
      <HomeCard />
    </div>
  );
};

export default Home;
