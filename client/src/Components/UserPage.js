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
        <Container fluid className="user-profile-container">
          <div className="row">
            <div className="col-md-4">
              <Card className="custom-card" id="user-profile-card">
                <Card.Body>
                  <h2 className="user-page-h2">My personal information:</h2>
                  <div className="user-personal-info">
                    <ul>
                      <li>username: {user.userName}</li>
                      <li>First name: {user.firstName}</li>
                      <li>Category: {user.category}</li>
                      <li>{user.email}</li>
                    </ul>
                  </div>
                  <div className="user-checklist-icon">
                    <Row>
                      <Col>
                        <LinkContainer to="/myChecklists">
                          <Nav.Link className="checkList-icon">
                            <p>My Checklist</p>
                            <img
                              src={CheckListIcon}
                              alt="user"
                              width="180"
                              height="180"
                              className="d-inline-block align-top"
                            />
                          </Nav.Link>
                        </LinkContainer>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <Row>
              <Col>
                <Button onClick={handleLogout}>
                  <img
                    src={LogoutIcon}
                    alt="user"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                  />
                </Button>
              </Col>
              <Row>
                <Col>
                  <p>Log out</p>
                </Col>
              </Row>
            </Row>
          </div>
        </Container>
      ) : (
        <Home />
      )}
    </>
  );
};

export default MyProfile;
