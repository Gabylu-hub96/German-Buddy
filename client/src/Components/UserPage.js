import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import CheckListIcon from "../Images/checklist-icon.png";
import LogoutIcon from "../Images/logout.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "./Home";
import Button from "react-bootstrap/Button";
import CheckListPage from "./CheckListPage";
import Card from "react-bootstrap/Card";

const MyProfile = ({ isLoggedin, setIsLoggedin }) => {
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
      {user ? (
        <div className="user-profile-container">
          <Container className="user-profile-card">
            <Row id="user-card-top">
              {/* <div className="col-md-4"> */}
              <Col xs={12} md={4} id="user-profile-text">
                <h2 className="user-page-h2">My personal information:</h2>
                <div className="user-personal-info">
                  <ul>
                    <li>username: {user.userName}</li>
                    <li>First name: {user.firstName}</li>
                    <li>Category: {user.category}</li>
                    <li>{user.email}</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row id="user-checklist-icon">
              <Col xs={12} md={6}>
                <LinkContainer to="/myChecklists" id="my-checklist-card">
                  <Nav.Link className="checkList-icon">
                    <p id="my-checklist-p">My Checklist</p>
                    <img
                      src={CheckListIcon}
                      alt="user"
                      width="200"
                      height="200"
                      className="d-inline-block align-top"
                    />
                  </Nav.Link>
                </LinkContainer>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Button onClick={handleLogout} id="logout-icon-bttn">
                  <img
                    src={LogoutIcon}
                    alt="user"
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    id="logout-icon"
                  />
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};

export default MyProfile;
