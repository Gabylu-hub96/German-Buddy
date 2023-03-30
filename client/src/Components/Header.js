import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../Images/Logo.png";
import { useState, useEffect } from "react";
import axios from "../axiosInstance";

function Header({ isLoggedin, setIsLoggedin }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get("/auth/loggedin-user")
      .then((res) => {
        setUser(res.data);
        setIsLoggedin(true);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [isLoggedin]);
  const handleLogout = () => {
    axios.post("/auth/logout", {}).then((res) => {
      console.log("Logged out");
      window.location.reload();
    });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="my-navbar-container">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={Logo}
                alt="Logo"
                width="100"
                height="100"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" id="nav-items">
              <LinkContainer to="/">
                <Nav.Link className="nav-link-item">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="nav-link-item">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/categories">
                <Nav.Link className="nav-link-item">Categories</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="nav-link-item">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              {user ? (
                <div className="header-user">
                  <p>Hello: {user.username}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div className="header-user">
                  <NavLink className="nav-link" to={"/login"}>
                    Login
                  </NavLink>
                  <span> | </span>
                  <NavLink className="nav-link" to={"/register"}>
                    Register
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
