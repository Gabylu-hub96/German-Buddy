import React from "react";
import Logo from "../Images/Logo2.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 align-items-center">
          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="logo-footer"
                width="250px"
                height=""
              />
            </Link>
          </div>

          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="basic-addon2"
              />
              <Button variant="btn btn-warning square-pill">
                <span className="material-symbols-sharp">Subscribe</span>
              </Button>
            </InputGroup>
          </div>

          <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
            <h4>Stay Connected</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">+49 089 174 433</li>
              <li className="nav-item mb-2">team@germanbuddy.de</li>
              <li className="nav-item mb-2">Mannheim, DE!</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
        <div className="col-lg-4 col-md-6 col-xs-12 mb-3">
          <h4 className="mb-4">FIND OUT MORE</h4>
          <ul className="nav flex-column">
            <Link className="nav-item mb-2" to="/">
              HOME
            </Link>
            <Link className="nav-item mb-2" to="/Categories">
              CATEGORIES
            </Link>
          </ul>
        </div>

        <div className="col-lg-4 col-md-8 col-xs-12 mb-3 ">
          <h4 className="mb-4">JOIN THE FAMILY</h4>
          <ul className="nav flex-column">
            <Link className="nav-item mb-2" to="/About">
              ABOUT US
            </Link>
            <Link className="nav-item mb-2" to="/Contact">
              CONTACT US
            </Link>
          </ul>
        </div>

        <div className="col-lg-4 col-md-8 col-xs-12 mb-3">
          <h4 className="mb-4">SOCIAL MEDIA</h4>

          <ul className="list-unstyled d-flex">
            <li className="ms-5">
              <a href="https://www.linkedin.com/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>

            <li className="ms-5">
              <a href="https://www.facebook.com/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </li>
            <li className="ms-5">
              <a href="https://www.instagram.com/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.833 0 5.556.01 4.722.048 3.889.085 3.333.278 2.778.556.954.926.465 1.5.222 2.222c-.24.622-.334 1.296-.334 2.037v2.222c0 .74.094 1.415.334 2.037.243.722.732 1.296 1.556 1.667.633.296 1.278.426 2.167.481.778.055 1.278.074 3.445.074s2.667-.019 3.445-.074c.889-.055 1.534-.185 2.167-.481.824-.371 1.313-.944 1.556-1.667.24-.622.334-1.296.334-2.037v-2.222c0-.74-.094-1.415-.334-2.037-.243-.722-.732-1.296-1.556-1.667C13.222.185 12.578.055 11.722 0h-3.444zM8 4.444c1.48 0 1.778.005 2.407.046.543.035.93.144 1.174.257.287.133.47.296.63.444.147.133.258.222.389.389.16.194.288.415.444.63.112.244.222.63.257 1.174.04.629.046.926.046 2.407s-.006 1.778-.046 2.407c-.035.543-.145.93-.257 1.174-.133.287-.296.47-.444.63-.133.147-.222.258-.389.389-.194.16-.415.288-.63.444-.244.112-.63.222-1.174.257-.629.04-.926.046-2.407.046s-1.778-.006-2.407-.046c-.543-.035-.93-.145-1.174-.257-.287-.133-.47-.296-.63-.444-.147-.133-.258-.222-.389-.389-.16-.194-.288-.415-.444-.63-.112-.244-.222-.63-.257-1.174-.04-.629-.046-.926-.046-2.407s.006-1.778.046-2.407c.035-.543.145-.93.257-1.174.133-.287.296-.47.444-.63.133-.147.222-.258.389-.389.194-.16.415-.288.63-.444.244-.112.63-.222 1.174-.257.629-.04.926-.046 2" />
                </svg>
              </a>
            </li>
            <li className="ms-5">
              <a href="https://twitter.com/?lang=en" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="footer-hr"/>
      <div className="copyright">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} German Buddy | All Rights Reserved |
          Terms of Services | Privacy
        </p>
        <p>Final Group Project</p>
      </div>

    </footer>
  );
}

export default Footer;
