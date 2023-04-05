import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap";
import Logo from "../Images/Logo2.png";

const HomeCarousel = () => {
  return (
    <div className="carouselContainer">
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image d-block height-100 w-100"
            src="https://germanyiscalling.com/wp-content/uploads/2021/12/Family-reunion-visa-for-Germany-1.png"
            alt="first image"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>
              <b> Apply for your Family Reunion visa</b>
            </h3>
            <p>
              Germany has a generous family reunification policy. It allows
              foreign nationals to join family members who have already been
              granted a residence permit in Germany
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image d-block height-100 w-100"
            src="https://germanyiscalling.com/wp-content/uploads/2023/03/German-education-system.png"
            alt="second image"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>
              <b>Apply for your Study Visa in Germany</b>
            </h3>
            <p>
              Everything you need for your stay in Germany on a Study Visa from
              start to finish.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image d-block height-100 w-100"
            src="https://germanyiscalling.com/wp-content/uploads/2022/08/How-to-apply-for-a-PR-in-Germany.png"
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>
              <b>Apply for your Work Visa in Germany</b>
            </h3>
            <p>
              The Germany Employment Visa is an opportunity for qualified
              foreigners to settle in Germany and work in their fields. It gives
              its holder the chance to enter...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
