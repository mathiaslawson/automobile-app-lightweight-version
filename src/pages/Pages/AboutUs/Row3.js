import React from "react";
import { Container, Card, Row, Col } from "reactstrap";

function Row3() {
  return (
    <div className="home">
      <Container className="p-5">
        <div>
          <div className="text-center">
            <p style={{ color: "#00d084" }} className="">
              Best Car Agency
            </p>
            <h4>Why Only Choose Drivco</h4>
          </div>

          <div className="mt-5 text-center mx-auto">
            <Row
              className="g-3 p-3 d-flex"
              style={{ backgroundColor: "", justifyContent: "center" }}
            >
              <Col xxl={4}>
                <Card style={{ boxShadow: "none" }} className="py-5 w-100 p-3">
                  <div className="text-start">
                    <p className="fs-3 fw-bolder">
                      {" "}
                      <div className="d-flex gap-2">
                        <div className="d-flex">
                          <img
                            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/affordable.svg"
                            alt="img"
                          />
                        </div>
                        <div className="d-flex gap-1 fs-5 mt-2">
                          <div style={{ color: "#00d084" }}>Affordable </div>
                          <div>Price</div>
                        </div>
                      </div>
                    </p>
                  </div>
                  <div>
                    <p
                      className="fs-5 fw-lighter text-start"
                      style={{ color: "gray" }}
                    >
                      An affordable price for a luxury car may be significantly
                      higher than an affordable price for a budget car...
                    </p>
                  </div>
                </Card>
              </Col>
              <Col xxl={4}>
                <Card style={{ boxShadow: "none" }} className="py-5 w-100 p-3">
                  <div className="text-start">
                    <p className=" fw-bolder">
                      {" "}
                      <div className="d-flex gap-2">
                        <div className="d-flex">
                          <img
                            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/guarantee.svg"
                            alt="img"
                          />
                          <div className="d-flex gap-1 fs-5 mt-2">
                            <div>Money</div>
                            <div>Back</div>
                            <div style={{ color: "#00d084" }}>Guarantee</div>
                          </div>
                        </div>
                      </div>
                    </p>
                  </div>
                  <div>
                    <p
                      className="fs-5 fw-lighter text-start"
                      style={{ color: "gray" }}
                    >
                      Some may offer a full refund with no questions asked,
                      others may require the customer to provide...
                    </p>
                  </div>
                </Card>
              </Col>
              <Col xxl={4}>
                <Card style={{ boxShadow: "none" }} className="py-5 w-100p-3">
                  <div className="text-start">
                    <p className="fs-3 fw-bolder">
                      {" "}
                      <div className="d-flex gap-2">
                        <div>
                          <img
                            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/warranty.svg"
                            alt="img"
                          />
                        </div>
                        <div className="d-flex gap-1 fs-5 mt-2">
                          <div>8</div>
                          <div>Month</div>
                          <div style={{ color: "#00d084" }}>Warranty</div>
                        </div>
                      </div>
                    </p>
                  </div>
                  <div>
                    <p
                      className="fs-5 fw-lighter text-start"
                      style={{ color: "gray" }}
                    >
                      During this 8-month period, if the product fails to
                      function properly due to a defect or malfunction...
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <div className="mt-5">
          <hr style={{ border: "1px solid #c9d1ce" }} />

          <div className=" row g-3 mt-4">
            <Col xxl={3} className="">
              <div className="d-flex gap-2">
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/av-car.svg"
                    alt="img"
                  />
                </div>
                <div className="fw-bolder">
                  600K+
                  <p className=" fw-lighter" style={{ color: "gray" }}>
                    Car Available
                  </p>
                </div>
              </div>
            </Col>
            <Col xxl={3}>
              <div className="d-flex gap-2">
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/sold-car.svg"
                    alt="img"
                  />
                </div>
                <div className="fw-bolder">
                  400 K+
                  <p className=" fw-lighter" style={{ color: "gray" }}>
                    Car Sold
                  </p>
                </div>
              </div>
            </Col>
            <Col xxl={3}>
              <div className="d-flex gap-2">
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/av-car.svg"
                    alt="img"
                  />
                </div>
                <div className="fw-bolder">
                  200 K+
                  <p className=" fw-lighter" style={{ color: "gray" }}>
                    Used Cars
                  </p>
                </div>
              </div>
            </Col>
            <Col xxl={3}>
              <div className="d-flex gap-2">
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/happy-customar.svg"
                    alt="img"
                  />
                </div>
                <div className="fw-bolder">
                  98.50 %
                  <p className=" fw-lighter" style={{ color: "gray" }}>
                    Customer Satisfaction
                  </p>
                </div>
              </div>
            </Col>
          </div>

          <hr style={{ border: "1px solid #c9d1ce" }} />
        </div>

        <div
          className="text-center d-flex mt-4"
          style={{ justifyContent: "space-around" }}
        >
          <div className="fw-bolder">
            Excellent!{" "}
            <img
              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/trustpilot-star2.svg"
              alt=""
            ></img>
          </div>
          <div style={{ color: "gray" }}>
            5.0 Rating out of <b>5.0</b> based on <u>245354 reviews</u>
          </div>
          <div>
            <img
              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/trustpilot-star2.svg"
              alt="test"
              className="img-fluid"
            ></img>{" "}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Row3;
