import React from "react";
import { Card, CardBody, Col, Row, Button } from "reactstrap";
import { SlSpeedometer } from "react-icons/sl";
import { BsFilterLeft } from "react-icons/bs";
import { IoStar, IoStarHalf } from "react-icons/io5";

function Row1() {
  return (
    <>
      <div className="home">
        <div
          className="p-2 container"
          style={{ border: "none", height: "auto" }}
        >
          <Row className="row g-3 p-4">
            <Col style={{ backgroundColor: "" }} xxl={7} className="mt-5 mb-5">
              <div className="home-title">
                <div className="d-flex gap-3">
                  <div>
                    <h1 className=" fs-5" style={{ color: "#00d084" }}>
                    Compare Cars
                    </h1>
                  </div>
                </div>

                <h1
                  className="fw-bolder "
                  style={{ fontSize: "4rem", width: "max-content" }}
                >
                 Find The Best Car
                </h1>
                <div className="pilot">
                  <div className="pilot-left">
                    <div className="trustpilot">
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/trstpilot-logo.svg"
                        alt="img"
                        className="img-fluid"
                      ></img>
                      <span className="mt-2 fw-bolder">Trustpilot</span>
                      <div className="five-stars">
                        <img
                          src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/trustpilot-star.svg"
                          alt="img"
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                    <div className="first-review">
                      <span className="t-number text-muted">
                        Trustpilot <b>5.0</b>
                      </span>
                      <span className="review">
                        <b className="text-muted">2348</b> Reviews
                      </span>
                    </div>
                  </div>

                  <div className="pilot-left">
                    <div className="trustpilot">
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/google-logo.svg"
                        alt="google"
                        className="img-fluid mt-3"
                      ></img>
                      <div className="five-stars">
                        <IoStar
                          style={{
                            color: "gold",
                            marginLeft: "0.1rem",
                          }}
                          className="p-1 fs-5"
                        />
                        <IoStar
                          style={{
                            color: "gold",
                            marginLeft: "0.1rem",
                          }}
                          className="p-1 fs-5"
                        />
                        <IoStar
                          style={{
                            color: "gold",
                            marginLeft: "0.1rem",
                          }}
                          className="p-1 fs-5"
                        />
                        <IoStar
                          style={{
                            color: "gold",
                            marginLeft: "0.1rem",
                          }}
                          className="p-1 fs-5"
                        />
                        <IoStar
                          style={{
                            color: "gold",
                            marginLeft: "0.1rem",
                          }}
                          className="p-1 fs-5"
                        />
                      </div>
                    </div>
                    <div className="first-review">
                      <span className="t-number text-muted">
                        Trustpilot <b>5.0</b>
                      </span>
                      <span className="review">
                        <b className="text-muted">2348</b> Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pilot">
                <div className="pilot-left">
                  <div className=""></div>
                  <div className="first-review mt-4">
                    {/* <Button
                      style={{
                        backgroundColor: "#00d084",
                        border: "none",
                        width: "max-content",
                      }}
                      className="p-3 text-dark fw-bolder"
                    >
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/av-car.svg"
                        alt="car"
                        width="30"
                        className="mx-2"
                      ></img>
                      Find Your Car
                    </Button> */}
                  </div>
                </div>
              </div>
            </Col>
            <Col xxl={5}>
              <img
                src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-banner-img.png"
                alt="car"
                className="mt-5 "
              ></img>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Row1;
