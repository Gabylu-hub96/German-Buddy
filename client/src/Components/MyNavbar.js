import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../Images/Logo.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import User from "../Images/user-icon.png";
import CheckListIcon from "../Images/checklist-icon.png";

const MyNavbar = ({ isLoggedin, setIsLoggedin }) => {
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
                <div className="user-session">
                  <p className="user-name">Welcome back {user.firstName}!</p>
                  <LinkContainer to="/myChecklists">
                    <Nav.Link className="user-icon">
                      <img
                        src={CheckListIcon}
                        alt="user"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                      />
                    </Nav.Link>
                  </LinkContainer>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div className="header-user">
                  <NavLink className="nav-link" id="login-bttn" to={"/login"}>
                    Login
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    id="register-bttn"
                    to={"/register"}>
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
};

export default MyNavbar;
