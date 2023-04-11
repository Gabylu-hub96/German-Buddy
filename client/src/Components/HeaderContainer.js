import React from "react";
import Logo from "../Images/Logo2.png";
import Image from "../Images/bgshape.png";
import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HeaderContainer = () => {
  return (
    <div className="text-con">
      <Container fluid id="header-left-container">
        <div className="left-column">
          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
            <img
              src={Logo}
              alt="Logo"
              className="d-inline-block"
              id="header-logo"
            />
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 align-items-center"
              id="left-column-p">
              We help make your settling in Germany uncomplicated.
            </div>
          </div>
          <NavLink className="nav-link" to={"/register"}>
            <Button>FIND OUT MORE</Button>
          </NavLink>
        </div>
      </Container>
      <div className="image-container">
        <img
          className="right-image"
          src="https://media-public.canva.com/YbKEU/MAE-U0YbKEU/1/tl.png"
          col-md-6
          float-md-end
          mb-3
          ms-md-3
          alt=".."
        />
      </div>
    </div>
  );
};

export default HeaderContainer;
