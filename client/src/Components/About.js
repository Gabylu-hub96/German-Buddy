import React from "react";
import HeroInternal from "./HeroInternal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AboutPage = () => {
  return (
    <div className="container">
      <h2>About Us</h2>
      <div className="text-container">
        We are a team of developers creating awesome web apps!
      </div>
      <p className="categories-text"></p>

      <div className="images">
        <img className="row col-md-4" src="image1.jpg" alt="Image 1" />
        <div className="row">
          <img className="row col-md-4" src="image2.jpg" alt="Image 2" />
        </div>
      </div>
      <img className="row col-md-4" src="image3.jpg" alt="Image 3" />

      <div className="row">
        <div className="col-md-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="card-title">
                Gabriela Andrade Juarez
              </Card.Title>
              <Card.Text>
                Experts in the field of bureaucracy are here to help you from
                Monday to Friday with anything you might need!{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="card-title">
                Kimsandra Oladimeji
              </Card.Title>
              <Card.Text>
                Always stay connected through our community tab and talk to
                people that were in your shoes before
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="custom card">
            <Card.Body>
              <Card.Title className="card-title">Name</Card.Title>
              <Card.Text>
                Explore our bite-sized articles about living abroad with some of
                the most important information
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="text-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            lorem sed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
