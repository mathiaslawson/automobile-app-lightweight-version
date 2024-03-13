import React from "react";
import { Container, Row, Col } from "reactstrap";
import VerticalDivider from "./Divider";


import Logo from '../../Logo'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6} lg={3}>
            <h5 className="fw-bolder mb-3">About Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li className="mt-3">Return & Exchange</li>
              <li className="mt-3">Refund Policy</li>
              <li className="mt-3">Reviews</li>
              <li className="mt-3">FAQ’s</li>
              <li className="mt-3">Contact Us</li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5 className="fw-bolder mb-3">Search & Explore</h5>
            <ul className="list-unstyled">
              <li>Used Cars</li>
              <li className="mt-3">New Cars</li>
              <li className="mt-3">Auction Cars</li>
              <li className="mt-3">Sell My Car</li>
              <li className="mt-3">Shop Now</li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <h5 className="fw-bolder mb-3">Car By Brands</h5>
            <ul className="list-unstyled">
              <li>Toyota</li>
              <li className="mt-3">BMW</li>
              <li className="mt-3">Chevrolet</li>
              <li className="mt-3">Hyundai</li>
              <li className="mt-3">Mercedes-Benz</li>
              <li className="mt-3">Jeep</li>
              <li className="mt-3">Suzuki</li>
              <li className="mt-3">Tesla</li>
              <li className="mt-3">Mazda</li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <h5 className="fw-bolder mb-3">Car By Location</h5>
            <ul className="list-unstyled">
              <li>Panama City</li>
              <li className="mt-3">Accra</li>
              <li className="mt-3">Ho</li>
              <li className="mt-3">Takoradi</li>
              <li className="mt-3">Kumasi</li>
              <li className="mt-3">Cape Coast</li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <h5 className="fw-bolder mb-3">Download App</h5>
            <ul className="list-unstyled">
              <li>
                <img
                  src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/google-app.svg"
                  alt="store"
                ></img>
              </li>
              <li className="mt-3">
                <img
                  src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/apple-app.svg"
                  alt="store"
                ></img>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <div
            className="d-flex mt-5"
            style={{ justifyContent: "space-between" }}
          >
            <div className="mt-5">
              <div className="navbar-logo">
               <Logo extra={'footer'}/>
               
              </div>
            </div>

            <div
              className="d-flex gap-5"
              style={{ justifyContent: "space-around", flexWrap: 'wrap' }}
            >
              {" "}
              <div className="side-contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#00d084"
                  className="bi bi-envelope-open"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2" />
                </svg>
                <VerticalDivider />
                <div>
                  <span className="mx-2 text-light">To More Inquiry</span>
                  <span className="side-number" style={{ color: "#00d084" }}>
                    +556 318 804
                  </span>
                </div>
              </div>
              <div className="side-contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00d084"
                  // stroke-width="2"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12" y2="18"></line>
                </svg>

                <VerticalDivider />
                <div>
                  <span className="mx-2 text-light">To Send Mail</span>
                  <span className="side-number" style={{ color: "#00d084" }}>
                    info@gmail.com
                  </span>
                </div>
              </div>


              <div className="mt-5 fw-bolder" style={{ color: "gray" }}>
              Advertise With Us
            </div>
            <div className="mt-5 fw-bolder" style={{ color: "gray" }}>
              Our Sitemap
            </div>
            </div>

           
          </div>
        </Row>

        <hr className="bg-light" />

        <Row>
          <Col xs={12} md={6}>
            <p>Copyright 2024 AUTOMOBILE | Design By Gashie Technologies</p>
          </Col>
          <Col xs={12} md={6} className="text-end">
            <p>Download App</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
