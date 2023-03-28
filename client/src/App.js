import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Search from "./Components/Search";
import Home from "./Components/Home";
import About from "./Components/About";
import Categories from "./Components/Categories";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useState } from "react";
// import HeroSection from "./Components/HeroSection";
import CheckListPage from "./Components/CheckListPage";

function App() {
  // const [query, setQuery] = useState("");
  // const handleSearch = (query) => {
  //   setQuery(query);
  // };

  const userId = "64217611aa2b275d366d5c2b";

  return (
    <div className="App">
      <Header />
      {/* <HeroSection /> */}
      <CheckListPage userId={userId} />

      {/* <Search handleSearch={handleSearch} /> */}
      <Routes>
        {/* <Route path="/search/:query" element={<SearchResults />} /> */}
        {/* <Route path="/login" element={<Auth />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
