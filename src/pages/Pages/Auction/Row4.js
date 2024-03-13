import React from "react";
import Slider from "../../../Components/Customer/common/Slider";
import { Container, Button, Row, Col, Card } from "reactstrap";
import { IoStar, IoStarHalf } from "react-icons/io5";
import RateSlider from "../../../Components/Customer/common/RateSlider";
import Marq from "../../../Components/Customer/common/Marquee";

function Row3() {
  return (
    <>
      <div className="" style={{ backgroundColor: "white" }}>
        <div className="container2">
          <div>
            <h5 className="text-start mt-5" style={{ color: "#00d084" }}>
              Customer Feedback
            </h5>
            <h2 className="text-start fw-bolder">
              What Our Customers Are Saying
            </h2>
          </div>
          <Row className="">
            <Col xxl={3} className="p-2">
              <Card
                className="w-100 p-2"
                style={{
                  boxShadow: "none",
                  background:
                    "linear-gradient(30deg, #ebd3d3, #e8edef, #a8dcbe, #becdd5)",
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                <h4 className="text-center fw-bolder mb-2">Excellent!</h4>
                <div className="text-center">
                  <div className="five-stars">
                    <IoStar
                      style={{
                        backgroundColor: "#00d084",
                        marginLeft: "0.1rem",
                      }}
                      className="text-light p-1 fs-5"
                    />
                    <IoStar
                      style={{
                        backgroundColor: "#00d084",
                        marginLeft: "0.1rem",
                      }}
                      className="text-light p-1 fs-5"
                    />
                    <IoStar
                      style={{
                        backgroundColor: "#00d084",
                        marginLeft: "0.1rem",
                      }}
                      className="text-light p-1 fs-5"
                    />
                    <IoStar
                      style={{
                        backgroundColor: "#00d084",
                        marginLeft: "0.1rem",
                      }}
                      className="text-light p-1 fs-5"
                    />
                    <IoStar
                      style={{
                        backgroundColor: "#00d084",
                        marginLeft: "0.1rem",
                      }}
                      className="text-light p-1 fs-5"
                    />
                  </div>
                </div>

                <p className="fw-ligther text-center mt-3">
                  Based on <b>2348</b> Review
                </p>
                <p className="text-center fw-bolder">
                  <IoStar
                    style={{
                      color: "#00d084",
                      marginLeft: "0.1rem",
                    }}
                    className=" p-1 fs-2 "
                  />
                  Trustpilot
                </p>

                <div className="mt-5 mb-5 text-center">
                  <hr className="" />
                </div>

                <div className="text-center">
                  <img
                    src={
                      "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/google3.svg"
                    }
                    alt="gogole"
                  ></img>
                  <div className="five-stars">
                    <IoStar
                      style={{
                        color: "gold",
                        marginLeft: "0.1rem",
                      }}
                      className="p-1 fs-3"
                    />
                    <IoStar
                      style={{
                        color: "gold",
                        marginLeft: "0.1rem",
                      }}
                      className="p-1 fs-3"
                    />
                    <IoStar
                      style={{
                        color: "gold",
                        marginLeft: "0.1rem",
                      }}
                      className="p-1 fs-3"
                    />
                    <IoStar
                      style={{
                        color: "gold",
                        marginLeft: "0.1rem",
                      }}
                      className="p-1 fs-3"
                    />
                    <IoStar
                      style={{
                        color: "gold",
                        marginLeft: "0.1rem",
                      }}
                      className="p-1 fs-3"
                    />
                  </div>
                </div>
                <p className="fw-ligther text-center mt-3">
                  Based on <b>2348</b> Review
                </p>
              </Card>
            </Col>
            <Col xxl={9} className="">
              <div className="w-100" style={{ boxShadow: "none" }}>
                <RateSlider />
              </div>
            </Col>
          </Row>

          <div className="mb-4">
            <h5 className="text-start mt-5" style={{ color: "black" }}>
              Our trusted partners
            </h5>
            {/* <h2 className="text-start fw-bolder">
              What Our Customers Are Saying
            </h2> */}
          </div>

          <Marq />
        </div>
      </div>
    </>
  );
}

export default Row3;
