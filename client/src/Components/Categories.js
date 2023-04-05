import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Categories = () => {
  return (
    <div className="home-container">
      <div className="row-md-4">
        <p className="card-text">
          <b>Explore our main categories</b>
        </p>
        <div className="text-container">
          <p>
            <b>
              The section of our web app is designed for expatriates navigating
              German bureaucracy serves as a hub for organizing relevant topics
              and resources. Our app aims to simplify the process of completing
              bureaucratic tasks by providing users with clear and concise
              information on each category. This page serves as a directory for
              users to easily access different sections of the app, including
              visa applications, residency registration, taxes, and healthcare.
              Through this user-friendly interface, expatriates can easily find
              and access the information they need to navigate the complex
              German bureaucracy system. Our app utilizes modern web
              technologies and responsive design to ensure that users can access
              the categories page from any device and have a seamless user
              experience.
            </b>
          </p>
        </div>
        <div className="category-con">
          <div className="row">
            <div className="col-md-4">
              <Card className="custom-card">
                <Card.Body>
                  <img
                    className="image-size"
                    src="https://www.clipartmax.com/png/middle/230-2303417_families-people-child-father-family-symbol-family-cartoon-silhouetthe-people-png.png"
                    alt="Image 1"
                  />
                  <Card.Text>
                    Spouses and registered partners, parents and minor,
                    unmarried children may migrate to Germany to join their
                    family members to protect the institution of marriage and
                    the family. The conditions vary according to whether you
                    wish to come to Germany to join a German national or an EU
                    citizen.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="custom-card">
                <Card.Body>
                  <img
                    className="image-size"
                    src="https://www.vhv.rs/dpng/d/589-5899745_drawing-of-student-studying-clipart-png-download-studying.png"
                    alt="Image 2"
                  />
                  <Card.Text>
                    Germany is a paradise for study abroad aspirants. Germany's
                    excellent education system offering degrees in numerous
                    fields from top ranked universities at extremely affordable
                    rates with innumerable job opportunities is something that
                    attracts students from all over the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="custom-card">
                <Card.Body>
                  <img
                    className="image-size"
                    src="https://cdn.imgbin.com/10/22/1/imgbin-job-business-professional-translation-marketing-business-z3cYAJmDCG0LcJhTWDaXkDx7H.jpg"
                    alt="Image 3"
                  />
                  <Card.Text>
                    Germany is a paradise for study abroad aspirants. Germany's
                    excellent education system offering degrees in numerous
                    fields from top ranked universities at extremely affordable
                    rates with innumerable job opportunities is something that
                    attracts students from all over the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title className="card-title">
                    Family Reunion{" "}
                  </Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Get a valid passport</li>
                      <li>A completed application form</li>
                      <li>Birth certificates</li>
                      <li>Marriage certificates</li>
                      <li>And Others</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary">Add checkList</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title className="card-title">Study Visa </Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Get a valid Passport</li>
                      <li>Secure your admission Letter</li>
                      <li>Complete your application form</li>
                      <li>Notarize and translate documents</li>
                      <li>And others</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary">Add checkList</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="custom card">
                <Card.Body>
                  <Card.Title className="card-title">Working Visa</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Get a valid passport</li>
                      <li>Prepare registration forms</li>
                      <li>Get your account statements</li>
                      <li>Sort out your health insurance</li>
                      <li>And Others</li>
                    </ul>
                  </Card.Text>
                  <Button className="card-button" variant="primary">
                    Add checkList
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
