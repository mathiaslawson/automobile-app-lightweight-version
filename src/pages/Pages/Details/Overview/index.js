import React from "react";
import Table from "./Table";
import Table2 from "../EnginePerformance/Table";
import { Col, Row, Button } from "reactstrap";
import ColorCirclesCarousel from "./ColorSide";
import MileageTable from "./MileageTable";
import { Link } from "react-router-dom";
import BulletList from "./BulletList";
import Timeline from "./Timeline";

function index() {
  const FeaturedInfo = [
    {
      title: "Water/Flood Damaged",
    },
    {
      title: "Former Rental Car",
    },
    {
      title: "Former Taxi",
    },
    {
      title: "Recovered theft",
    },
    {
      title: "Police Car",
    },
    {
      title: "Salvage Record",
    },
    {
      title: "Fuel Conversion",
    },
    {
      title: "Modified Seats",
    },
  ];
  return (
    <>
      <div className="p-3">
        <Row className="g-3">
          <Col xxl={8}>
            <div className="d-flex justify-content-around">
              <div
                style={{ border: "1px solid #e0e0e0", borderRadius: "10px" }}
                className="px-3 mx-2"
              >
                <div className="mt-5">
                  <h4>
                    Basic Information
                    <img
                      src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                      alt="line"
                      width="50"
                      className="mx-2"
                    ></img>
                  </h4>
                </div>
                <Table />

                <div style={{width: '100%'}}>
                  <Timeline />
                </div>
              </div>

              {/* Engine Performance */}
              <div
                style={{ border: "1px solid #e0e0e0", borderRadius: "10px" }}
                className="px-3"
              >
                <div className="mt-5">
                  <h4>
                    Featured Information
                    <img
                      src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                      alt="line"
                      width="50"
                      className="mx-2"
                    ></img>
                  </h4>
                </div>

                <div>
                  <table className="w-100">
                    {FeaturedInfo?.map((item, index) => (
                      <tr
                        key={index} // Adding a unique key prop to each mapped element
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #00d084, white)",
                          borderRadius: "10px",
                          color: "black",
                        }}
                      >
                        <td
                          style={{
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                          }}
                        >
                          {item.title}
                        </td>
                        <td
                          style={{
                            fontWeight: "bolder",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            borderRight: "1px solid white",
                          }}
                        >
                          NO
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>

                <BulletList />
              </div>
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

            <div></div>
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

            <div className="mt-2">
              <Link to="/brand-category" className="mt-3">
                <Button
                  style={{ backgroundColor: "#00d084", border: "none" }}
                  className="text-dark btn btn-dark w-100 p-3"
                >
                  View All Cars
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default index;
