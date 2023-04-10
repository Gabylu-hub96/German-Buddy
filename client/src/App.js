import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Categories from "./Components/Categories";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MyCheckLists from "./Components/CheckListPage";
import { useState } from "react";
import MyNavbar from "./Components/MyNavbar";
import Footer from "./Components/Footer";
import MyProfile from "./Components/UserPage";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs">
      <div className="App">
        <MyNavbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
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
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/myChecklists" element={<MyCheckLists />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
