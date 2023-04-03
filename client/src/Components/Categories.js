import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Categories = () => {
  return (
    <div className="home-container">
      <p className="card-text">
        <b>Explore our main categories</b>
      </p>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lorem
          sed.
        </p>
      </div>
      <div className="images">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
      </div>
      <div className="row">
        <div className="col-md-4">
          <Card className="custom-card">
            <Card.Body>
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
              <Card.Text>
                Always stay connected through our community tab and talk to
                people that were in your shoes before
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Text>
                Always stay connected through our community tab and talk to
                people that were in your shoes before
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="card-title">
                Experience Our Community{" "}
              </Card.Title>
              <Card.Text>
                Always stay connected through our community tab and talk to
                people that were in your shoes before
              </Card.Text>
              <Button variant="primary">Add checkList</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="card-title">
                Experience Our Community{" "}
              </Card.Title>
              <Card.Text>
                Always stay connected through our community tab and talk to
                people that were in your shoes before
              </Card.Text>
              <Button variant="primary">Add checkList</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="custom card">
            <Card.Body>
              <Card.Title className="card-title">
                Explore Our Blog Post
              </Card.Title>
              <Card.Text>
                Explore our bite-sized articles about living abroad with some of
                the most important information
              </Card.Text>
              <Button className="card-button" variant="primary">
                Add checkList
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Categories;
