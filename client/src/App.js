import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import HomeCarousel from "./Components/HomeCarousel";
import { Routes, Route } from "react-router-dom";
import Search from "./Components/Search";
import Home from "./Components/Home";
import About from "./Components/About";
import Categories from "./Components/Categories";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useState } from "react";
import HomeCard from "./Components/HomeCard";
import TextContainer from "./Components/TextContainer";
import { ImageProps } from "react-bootstrap";
import HeaderContainer from "./Components/HeaderContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <main>
        <HeaderContainer />
        <HomeCarousel />
        <hr />
        <TextContainer />
        <HomeCard />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
