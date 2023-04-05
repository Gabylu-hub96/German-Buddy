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
        <Container fluid className="user-profile-card">
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
          <Row>
            <Col>
              <button onClick={handleLogout}>
                <img
                  src={LogoutIcon}
                  alt="user"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />
              </button>
            </Col>
            <Row>
              <Col>
                <p>Log out</p>
              </Col>
            </Row>
          </Row>
        </Container>
      ) : (
        <div className="header-user">
          <NavLink className="nav-link" id="login-bttn" to={"/login"}>
            Login
          </NavLink>
          <NavLink className="nav-link" id="register-bttn" to={"/register"}>
            Register
          </NavLink>
        </div>
      )}
    </>
  );
};

export default MyProfile;
