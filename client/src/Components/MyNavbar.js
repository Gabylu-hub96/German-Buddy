import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../Images/Logo.png";

const myNavbar = () => {
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
              <div className="login-signup-bttns">
                <LinkContainer to="/login">
                  <Button
                    variant="outline-primary"
                    className="text-white"
                    id="login-bttn">
                    Log in
                  </Button>
                </LinkContainer>
                <LinkContainer to="signup">
                  <Button
                    variant="outline-primary"
                    className="text-white"
                    id="signup-bttn">
                    Sign up
                  </Button>
                </LinkContainer>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default myNavbar;
