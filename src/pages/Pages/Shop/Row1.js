import React, {useEffect} from "react";
import { Card, CardBody, Col, Row, Button, Container } from "reactstrap";
import { SlSpeedometer } from "react-icons/sl";
import { BsFilterLeft } from "react-icons/bs";
import { IoStar, IoStarHalf } from "react-icons/io5";

import { Form, FormGroup, Label, Input } from "reactstrap";

function Row1() {


  
  useEffect(()=>{
    //  window.scrollTo(window.innerWidth, window.innerHeight)
    window.scroll(0, 120)
  }, [])

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
                      Shop Car Parts
                    </h1>
                  </div>
                </div>

                <h1
                  className="fw-bolder "
                  style={{ fontSize: "4rem", width: "max-content" }}
                >
                  Shop Vehicles Parts
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
                src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/product-dt-bannner-img.png"
                alt="car"
                className="mt-5 "
              ></img>
            </Col>
          </Row>
        </div>
      </div>

      <div className="m-3 p-3 d-flex" style={{ justifyContent: "center" }}>
        <div className="w-100 p-3 container" style={{ justifyContent: "center", border: '1px solid #eaeaea', borderRadius: '10px' }}>
          <Form>
            <Row className="">
              <Col md={3} sm={2} xs={2}>
                <FormGroup>
                  <Label for="brand">Select Brand*</Label>
                  <Input type="select" name="brand" id="brand">
                    {/* Add options for brands */}
                    <option>BMW</option>
                    <option>Audi</option>
                    <option>Bently</option>
                    <option>Benz</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <FormGroup>
                  <Label for="model">Select Model*</Label>
                  <Input type="select" name="model" id="model">
                    {/* Add options for models */}
                    <option>M5 Competition</option>
                    <option>M8 Competition</option>
                    <option>M2 Competition</option>
                    <option>M3 Competition</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <FormGroup>
                  <Label for="engine">Select Engine*</Label>
                  <Input type="select" name="engine" id="engine">
                    {/* Add options for engines */}
                    <option>V8</option>
                    <option>V12</option>
                    <option>V6</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <FormGroup>
                  <Label for="parts">Select Parts*</Label>
                  <Input type="select" name="parts" id="parts">
                    {/* Add options for parts */}
                    <option>Engine</option>
                    <option>Door</option>
                    <option>Spoiler</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={12} sm={12} xs={12} className="d-flex align-items-end">
                <Button
                 className="btn-light px-4 py-3 w-100 fw-bolder"
                  type="submit"
                  style={{ backgroundColor: "#00d084", border: "none" ,width: 'max-content'}}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Row1;
