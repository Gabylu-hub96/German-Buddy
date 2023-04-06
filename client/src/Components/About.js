import React from "react";
import Container from "react-bootstrap/Container";
import kimsandra from "../Images/sandra.png";
import Gabriela from "../Images/gabriela.png";
import ReactPlayer from "react-player";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function AboutPage() {
  return (
    <div className="home-container">
      <div className="row"></div>
      <p className="card-text">
        <b>About German Buddy</b>
      </p>
      <div className="text-container callout">
        <p>
          <b>
            Welcome to German Buddy. We are Students from WBS Coding School, and
            we are happy to work together on this React Project using the
            knowledge we have gained throughout the Bootcamp to create our final
            Full Stack Web Application. We hope German Buddy would become your
            best place to find trusted and accurate information about resettling
            in the Germany.
          </b>
        </p>
        <iframe
          className="youtube-container "
          width="560"
          height="315"
          src="https://www.youtube.com/embed/61HJ8AuERto"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="text-container">
        <p>
          <b>
            Our mission is to make your life easier by providing you with a
            user-friendly platform that helps you accomplish your goals while
            you plan to relocate to Germany. We believe that technology should
            be accessible to everyone, and that's why we've designed our
            application to be intuitive, efficient, and reliable. We are
            dedicated professionals who are passionate about creating software
            that makes a difference. We've poured our hearts and souls into
            every aspect of this application, from the user interface to the
            back-end code. We understand that your time is valuable, and that's
            why we've focused on creating an application that is fast,
            responsive, and always available when you need it. We've also made
            sure that our application is secure, so you can trust that your data
            is protected at all times. Whether you're a professional, a student,
            or just a kith looking to relocate to Germany, our application is
            here to help. We've designed it to be flexible and adaptable, so it
            can meet your unique needs and help you achieve your goals. So why
            not give our application a try? We're confident that you'll love it
            as much as we do, and we look forward to hearing your feedback as we
            continue to improve and refine this platform. Best regards, The Team
            at German Buddy.
          </b>
        </p>
      </div>
      <br />
      <div className="about-image">
        <div className="row">
          <div className="">
            <img src={Gabriela} alt="Gabriela" className="thumbnail" />
            <p className="names">
              <b>GABRIELA</b>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={kimsandra} alt="Kimsandra" className="thumbnail" />
          <p className="names">
            <b>KIMSANDRA</b>
          </p>
        </div>
      </div>
      <h4 className="md-3 text-start lora-font"></h4>
      <br />
      <div className="about-con">
        <div className="row">
          <div className="col-md-4">
            <Card className="custom-card">
              <Card.Body>
                <Card.Title className="about-title">
                  <b>German Buddy Website </b>
                </Card.Title>
                <Card.Text>
                  The German Buddy website intends to provide hundreds of
                  resources including videos, podcasts, and fact sheets to help
                  expatriates migrating to Germany. Topics you will find on our
                  website include cultural adjustment, employment, housing,
                  German laws, and more. All of these are available in all
                  languages.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="custom-card">
              <Card.Body>
                <Card.Title className="about-title">
                  <b>German Buddy App </b>
                </Card.Title>
                <Card.Text>
                  The German Buddy app is something we hope to develope in the
                  future. The App is expected to make available short videos,
                  interactive lessons, and badges to reward and track German
                  language learning progress. When this is all set, you would be
                  able to download from the Apple Store or Google Play.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="custom card">
              <Card.Body>
                <Card.Title className="card-title">
                  <b>Community Activities</b>
                </Card.Title>
                <Card.Text>
                  Through the German Buddy community, users can receive
                  up-to-date information, send direct messages and receive
                  in-language support for their questions, and attend live
                  events with other foreigners in the country. Find out more
                  about the culture, enviroment, and people in your new country.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
