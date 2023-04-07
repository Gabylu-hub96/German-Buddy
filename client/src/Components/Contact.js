import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Button from "react-bootstrap/Button";

function Contact() {
  const position = [52.45588949917658, 13.389077598470479];
  const markerIcon = new L.Icon({
    iconUrl:
      "https://www.ockert-cnc.de/wp-content/uploads/2016/12/map-marker-icon.png",
    iconSize: [45, 45],
  });

  return (
    <>
      <div className="row-md-4">
        <p className="card-text">
          <b>CONTACT US @ GERMAN BUDDY</b>
        </p>
      </div>
      <div className="text-container">
        <p>
          <b>
            Feel free to reach out to us via the various forms of communication
            such as phone calls, emails, text messages, or even through our
            social media platforms and direct messages. This is oe way we
            believe we can not only improve our services but also connect with
            users, who are either contacting for help or support. A way to also
            share information, or simply give feedback on user satisfaction.
            "Reaching out" can be a powerful tool for building relationships and
            maintaining connections with others, especially in today's world
            where technology has made communication easier than ever before.
          </b>
        </p>
      </div>
      <section id="" className="contact">
        <div className="contact-header"></div>
        <div className="container">
          <div className=" row mt-5" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Mannheim, DE.</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>team@germanbuddy.de</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+49 089 174 433</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <b>Full Name</b>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">
                      <b>Your Email</b>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">
                    <b>Subject</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">
                    <b>Message</b>
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>

                <br />
                <Button type="submit" id="contact-form-bttn">
                  Send Message
                </Button>
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
