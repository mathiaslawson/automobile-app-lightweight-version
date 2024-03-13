import React from "react";
import Table from "./Table";
import Table2 from "../EnginePerformance/Table";
import { Col, Row, Button } from "reactstrap";
import ColorCirclesCarousel from "./ColorSide";
import MileageTable from "./MileageTable";
import { Link } from "react-router-dom";

function index() {
  return (
    <>
      <div className="p-3">
        <Row className="g-3">
          <Col xxl={8}>
            <div className="mt-5">
              <h4>
                Overviews
                <img
                  src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                  alt="line"
                  width="50"
                  className="mx-2"
                ></img>
              </h4>
            </div>
            <Table />

            {/* Engine Performance */}
            <div>
              <div className="mt-5">
                <h4>
                  Engine Performance
                  <img
                    src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                    alt="line"
                    width="50"
                    className="mx-2"
                  ></img>
                </h4>
              </div>

              <Table2 />
            </div>
            {/* COlor */}
            <div>
              <div className="mt-5">
                <h4>
                  BMW M5 Competition Color
                  <img
                    src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                    alt="line"
                    width="50"
                    className="mx-2"
                  ></img>
                </h4>
              </div>

              {/* COlor Slider */}
              <div>
                <ColorCirclesCarousel />
              </div>
            </div>

            {/* Mileage table */}
            <div className="mt-5">
              <div className="mt-5">
                <h4>
                  BMW M5 Competition Mileage
                  <img
                    src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                    alt="line"
                    width="50"
                    className="mx-2"
                  ></img>
                </h4>
              </div>

              {/* COlor Slider */}
              <div>
                <MileageTable />
              </div>
            </div>
          </Col>

          <Col xxl={4}>
            <div className="">
              <h4>
                Recently Used Cars
                <img
                  src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                  alt="line"
                  width="50"
                  className="mx-2"
                ></img>
              </h4>
            </div>
            <div>
              <Link
                to="/single-brand"
                style={{ textDecoration: "none", color: "black" }}
                className="mb-2"
              >
                <div
                  style={{
                    border: "1px solid #f3f6f9",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  className="p-2 d-flex gap-4 align-items-center mt-4 details-card"
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <img
                      style={{
                        border: "1px solid #e0e0e0",
                        borderRadius: "10px",
                      }}
                      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/sb-img-01.png"
                      alt="car"
                      className="img-fluid"
                    ></img>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        backgroundColor: "white",
                        color: "#000",
                        padding: "5px 10px",
                        borderRadius: "0 10px",
                      }}
                      className="fw-bolder"
                    >
                      ₵ 72,000
                    </div>
                  </div>
                  <div>
                    <div className="fw-bolder">Mercedes-Benz 2023</div>
                    <hr />
                    <p style={{ fontSize: "0.8rem" }}>
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home4/icon/menual.svg"
                        alt="auto"
                        className="mx-1"
                      ></img>
                      Automatic
                    </p>
                    <p style={{ fontSize: "0.8rem" }}>
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home4/icon/fuel.svg"
                        alt="auto"
                        className="mx-1"
                      ></img>
                      Petrol
                    </p>
                    <p style={{ fontSize: "0.8rem" }}>
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home4/icon/electric.svg"
                        alt="auto"
                        className="mx-1"
                      ></img>
                      Electric
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                to="/single-brand"
                style={{ textDecoration: "none", color: "black" }}
                className="mb-2"
              >
                <div
                  style={{
                    border: "1px solid #f3f6f9",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  className="p-2 d-flex gap-4 align-items-center mt-4 details-card"
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <img
                      style={{
                        border: "1px solid #e0e0e0",
                        borderRadius: "10px",
                      }}
                      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/sb-img-01.png"
                      alt="car"
                      className="img-fluid"
                    ></img>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        backgroundColor: "white",
                        color: "#000",
                        padding: "5px 10px",
                        borderRadius: "0 10px",
                      }}
                      className="fw-bolder"
                    >
                      ₵ 72,000
                    </div>
                  </div>
                  <div>
                    <div className="fw-bolder">Mercedes-Benz 2023</div>
                    <hr />
                    <p style={{ fontSize: "0.8rem" }}>
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home4/icon/menual.svg"
                        alt="auto"
                        className="mx-1"
                      ></img>
                      Automatic
                    </p>
                    <p style={{ fontSize: "0.8rem" }}>
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home4/icon/fuel.svg"
                        alt="auto"
                        className="mx-1"
                      ></img>
                      Petrol
                    </p>
                    <p style={{ fontSize: "0.8rem" }}>
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home4/icon/electric.svg"
                        alt="auto"
                        className="mx-1"
                      ></img>
                      Electric
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                to="/single-brand"
                style={{ textDecoration: "none", color: "black" }}
                className="mb-2"
              >
                <div
                  style={{
                    border: "1px solid #f3f6f9",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  className="p-2 d-flex gap-4 align-items-center mt-4 details-card"
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <img
                      style={{
                        border: "1px solid #e0e0e0",
                        borderRadius: "10px",
                      }}
                      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/sb-img-01.png"
                      alt="car"
                      className="img-fluid"
                    ></img>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        backgroundColor: "white",
                        color: "#000",
                        padding: "5px 10px",
                        borderRadius: "0 10px",
                      }}
                      className="fw-bolder"
                    >
                      ₵ 72,000
                    </div>
                  </div>
                  <div>
                    <div className="fw-bolder">Mercedes-Benz 2023</div>
                    <hr />
                    <p style={{ fontSize: "0.8rem" }}>
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home4/icon/menual.svg"
                        alt="auto"
                        className="mx-1"
                      ></img>
                      Automatic
                    </p>
                    <p style={{ fontSize: "0.8rem" }}>
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home4/icon/fuel.svg"
                        alt="auto"
                        className="mx-1"
                      ></img>
                      Petrol
                    </p>
                    <p style={{ fontSize: "0.8rem" }}>
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home4/icon/electric.svg"
                        alt="auto"
                        className="mx-1"
                      ></img>
                      Electric
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <Link to="/brand-category">
              <Button
                style={{ backgroundColor: "#00d084", border: "none" }}
                className="text-dark btn btn-dark w-100 p-3"
              >
                View All Cars
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default index;
