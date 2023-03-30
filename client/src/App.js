import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCarousel from "./Components/HomeCarousel";
import { Routes, Route } from "react-router-dom";
import Search from "./Components/Search";
import Home from "./Components/Home";
import About from "./Components/About";
import Categories from "./Components/Categories";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";
import CheckListPage from "./Components/CheckListPage";
import { useState } from "react";
import HomeCard from "./Components/HomeCard";
import TextContainer from "./Components/TextContainer";
import { ImageProps } from "react-bootstrap";
import HeaderContainer from "./Components/HeaderContainer";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
      <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <main>
        <HeaderContainer />
        <HomeCarousel />
        <hr />
        <TextContainer />
        <HomeCard />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setIsLoggedin={setIsLoggedin} />}
          />
          <Route
            path="/register"
            element={<Register setIsLoggedin={setIsLoggedin} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
