import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className="home-container">
      <p className="card-text">
        <b>Explore Our Website and Services</b>
      </p>
      <div className="row">
        <div className="col-md-4" id="category-card">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="card-title">German Bureaucracy</Card.Title>
              <Card.Text>
                Experts in the field of bureaucracy are here to help you from
                Monday to Friday with anything you might need!{" "}
              </Card.Text>
              <NavLink className="nav-link" to={"/categories"}>
                <Button variant="primary" id="home-card-bttn">
                  Learn More
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4" id="category-card">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="card-title">
                Experience Our Community{" "}
              </Card.Title>
              <Card.Text>
                Always stay connected through our community tab and talk to
                people that were in your shoes before
              </Card.Text>
              <Button variant="primary" id="home-card-bttn">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4" id="category-card">
          <Card className="custom card">
            <Card.Body>
              <Card.Title className="card-title">
                Explore Our Blog Post
              </Card.Title>
              <Card.Text>
                Explore our bite-sized articles about living abroad with some of
                the most important information
              </Card.Text>
              <Button
                className="card-button"
                variant="primary"
                id="home-card-bttn">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
