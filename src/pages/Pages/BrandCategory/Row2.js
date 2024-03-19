import React, {useEffect} from "react";
import { Row, Col, Card, Button } from "reactstrap";
import Divider from "../../../Components/Common/Divider";
import {Link} from 'react-router-dom'

function Row2() {


  useEffect(()=>{
    //  window.scrollTo(window.innerWidth, window.innerHeight)
    window.scroll(0, 120)
  }, [])



  return (
    <>
      <div className="container mb-3">
        <Row className="g-3 mt-3">
          <Col
            style={{
              border: "1px solid #f2f2f7",
              borderRadius: "10px",
              backgroundColor: "#fcfbfd",
            }}
            className="p-4 m-2"
          >
            <div className="d-flex justify-content-center">
              <div
                className="home p-3 d-flex justify-content-center align-items-center position-relative"
                style={{
                  border: "1px solid #f2f2f7",
                  borderRadius: "50%", // This sets the border-radius to 50%, making it a circle
                  width: "200px", // Adjust the width and height as needed
                  height: "200px",
                  overflow: "hidden", // This ensures that the child elements don't overflow the circle
                  display: "flex", // Setting display to flex
                  alignItems: "center", // Aligning items vertically
                  justifyContent: "center", // Aligning items horizontally
                }}
              >
                <div className="d-grid align-items-center position-relative">
                  <div className="mx-3">
                    <img
                      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home2/icon/suzuki.svg"
                      alt="logo"
                    ></img>
                  </div>
                  <div className="mt-3">
                    <img
                      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/category-car1.svg"
                      alt="logo"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center fw-lighter mt-4">
              <b>23,322 Cars</b> Available
            </p>

            <div className="text-center">
             <Link to='/single-brand'>
             <Link to='/single-brand'>
             <Button
                style={{
                  width: "max-content",
                  backgroundColor: "#00d084",
                  border: "none",
                  color: "black",
                }}
              >
                View All Cars
              </Button></Link></Link>
            </div>
          </Col>
          <Col
            style={{
              border: "1px solid #f2f2f7",
              borderRadius: "10px",
              backgroundColor: "#fcfbfd",
            }}
            className="p-4 m-2"
          >
            <div className="">
              <img
                src={
                  "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-12.png"
                }
                alt="suv"
                className="img-fluid mb-4"
                style={{ borderRadius: "6px" }}
              />

              {/* <ImageSlider img={""}/> */}
            </div>

            <div className="text-start ">
              <h5 className="fw-bolder">Tesla Model S</h5>
            </div>

            <div className="mt-4">
              <div className="d-flex gap-2">
                <div>
                  <h4 className=" fw-bolder fs-5">GHC 896564.00</h4>
                </div>
                <div>
                  <Divider />
                </div>
                <div>
                  <h4 className=" fw-lighter fs-5">Osu, Accra</h4>
                </div>
              </div>

              <div>
                <hr style={{ border: "1px solid #dbdbdb" }} />
              </div>

              <div className="d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/car-01.svg"
                    alt="car"
                  ></img>
                </div>
                <div className="fw-bolder">View Details</div>
              </div>
            </div>
          </Col>
          <Col
            style={{
              border: "1px solid #f2f2f7",
              borderRadius: "10px",
              backgroundColor: "#fcfbfd",
            }}
            className="p-4 m-2"
          >
            <div className="">
              <img
                src={
                  "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-12.png"
                }
                alt="suv"
                className="img-fluid mb-4"
                style={{ borderRadius: "6px" }}
              />

              {/* <ImageSlider img={""}/> */}
            </div>

            <div className="text-start ">
              <h5 className="fw-bolder">Tesla Model S</h5>
            </div>

            <div className="mt-4">
              <div className="d-flex gap-2">
                <div>
                  <h4 className=" fw-bolder fs-5">GHC 896564.00</h4>
                </div>
                <div>
                  <Divider />
                </div>
                <div>
                  <h4 className=" fw-lighter fs-5">Osu, Accra</h4>
                </div>
              </div>

              <div>
                <hr style={{ border: "1px solid #dbdbdb" }} />
              </div>

              <div className="d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/car-01.svg"
                    alt="car"
                  ></img>
                </div>
                <div className="fw-bolder">View Details</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-3 mt-3">
          <Col
            style={{
              border: "1px solid #f2f2f7",
              borderRadius: "10px",
              backgroundColor: "#fcfbfd",
            }}
            className="p-4 m-2"
          >
            <div className="d-flex justify-content-center">
              <div
                className="home p-3 d-flex justify-content-center align-items-center position-relative"
                style={{
                  border: "1px solid #f2f2f7",
                  borderRadius: "50%", // This sets the border-radius to 50%, making it a circle
                  width: "200px", // Adjust the width and height as needed
                  height: "200px",
                  overflow: "hidden", // This ensures that the child elements don't overflow the circle
                  display: "flex", // Setting display to flex
                  alignItems: "center", // Aligning items vertically
                  justifyContent: "center", // Aligning items horizontally
                }}
              >
                <div className="d-grid align-items-center position-relative">
                  <div className="mx-3">
                    <img
                      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home2/icon/toyota.svg"
                      alt="logo"
                    ></img>
                  </div>
                  <div className="mt-3">
                    <img
                      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/category-car1.svg"
                      alt="logo"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center fw-lighter mt-4">
              <b>23,322 Cars</b> Available
            </p>

            <div className="text-center">
              <Link to='/single-brand'>
             <Button
                style={{
                  width: "max-content",
                  backgroundColor: "#00d084",
                  border: "none",
                  color: "black",
                }}
              >
                View All Cars
              </Button></Link>
            </div>
          </Col>
          <Col
            style={{
              border: "1px solid #f2f2f7",
              borderRadius: "10px",
              backgroundColor: "#fcfbfd",
            }}
            className="p-4 m-2"
          >
            <div className="">
              <img
                src={
                  "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-12.png"
                }
                alt="suv"
                className="img-fluid mb-4"
                style={{ borderRadius: "6px" }}
              />

              {/* <ImageSlider img={""}/> */}
            </div>

            <div className="text-start ">
              <h5 className="fw-bolder">Tesla Model S</h5>
            </div>

            <div className="mt-4">
              <div className="d-flex gap-2">
                <div>
                  <h4 className=" fw-bolder fs-5">GHC 896564.00</h4>
                </div>
                <div>
                  <Divider />
                </div>
                <div>
                  <h4 className=" fw-lighter fs-5">Osu, Accra</h4>
                </div>
              </div>

              <div>
                <hr style={{ border: "1px solid #dbdbdb" }} />
              </div>

              <div className="d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/car-01.svg"
                    alt="car"
                  ></img>
                </div>
                <div className="fw-bolder">View Details</div>
              </div>
            </div>
          </Col>
          <Col
            style={{
              border: "1px solid #f2f2f7",
              borderRadius: "10px",
              backgroundColor: "#fcfbfd",
            }}
            className="p-4 m-2"
          >
            <div className="">
              <img
                src={
                  "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-12.png"
                }
                alt="suv"
                className="img-fluid mb-4"
                style={{ borderRadius: "6px" }}
              />

              {/* <ImageSlider img={""}/> */}
            </div>

            <div className="text-start ">
              <h5 className="fw-bolder">Tesla Model S</h5>
            </div>

            <div className="mt-4">
              <div className="d-flex gap-2">
                <div>
                  <h4 className=" fw-bolder fs-5">GHC 896564.00</h4>
                </div>
                <div>
                  <Divider />
                </div>
                <div>
                  <h4 className=" fw-lighter fs-5">Osu, Accra</h4>
                </div>
              </div>

              <div>
                <hr style={{ border: "1px solid #dbdbdb" }} />
              </div>

              <div className="d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/car-01.svg"
                    alt="car"
                  ></img>
                </div>
                <div className="fw-bolder">View Details</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-3 mt-3">
          <Col
            style={{
              border: "1px solid #f2f2f7",
              borderRadius: "10px",
              backgroundColor: "#fcfbfd",
            }}
            className="p-4 m-2"
          >
            <div className="d-flex justify-content-center">
              <div
                className="home p-3 d-flex justify-content-center align-items-center position-relative"
                style={{
                  border: "1px solid #f2f2f7",
                  borderRadius: "50%", // This sets the border-radius to 50%, making it a circle
                  width: "200px", // Adjust the width and height as needed
                  height: "200px",
                  overflow: "hidden", // This ensures that the child elements don't overflow the circle
                  display: "flex", // Setting display to flex
                  alignItems: "center", // Aligning items vertically
                  justifyContent: "center", // Aligning items horizontally
                }}
              >
                <div className="d-grid align-items-center position-relative">
                  <div className="mx-3">
                    <img
                      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home2/icon/tesla.svg"
                      alt="logo"
                    ></img>
                  </div>
                  <div className="mt-3">
                    <img
                      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/category-car1.svg"
                      alt="logo"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center fw-lighter mt-4">
              <b>23,322 Cars</b> Available
            </p>

            <div className="text-center">
              <Link to='/single-brand'>
             <Button
                style={{
                  width: "max-content",
                  backgroundColor: "#00d084",
                  border: "none",
                  color: "black",
                }}
              >
                View All Cars
              </Button></Link>
            </div>
          </Col>
          <Col
            style={{
              border: "1px solid #f2f2f7",
              borderRadius: "10px",
              backgroundColor: "#fcfbfd",
            }}
            className="p-4 m-2"
          >
            <div className="">
              <img
                src={
                  "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-12.png"
                }
                alt="suv"
                className="img-fluid mb-4"
                style={{ borderRadius: "6px" }}
              />

              {/* <ImageSlider img={""}/> */}
            </div>

            <div className="text-start ">
              <h5 className="fw-bolder">Tesla Model S</h5>
            </div>

            <div className="mt-4">
              <div className="d-flex gap-2">
                <div>
                  <h4 className=" fw-bolder fs-5">GHC 896564.00</h4>
                </div>
                <div>
                  <Divider />
                </div>
                <div>
                  <h4 className=" fw-lighter fs-5">Osu, Accra</h4>
                </div>
              </div>

              <div>
                <hr style={{ border: "1px solid #dbdbdb" }} />
              </div>

              <div className="d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/car-01.svg"
                    alt="car"
                  ></img>
                </div>
                <div className="fw-bolder">View Details</div>
              </div>
            </div>
          </Col>
          <Col
            style={{
              border: "1px solid #f2f2f7",
              borderRadius: "10px",
              backgroundColor: "#fcfbfd",
            }}
            className="p-4 m-2"
          >
            <div className="">
              <img
                src={
                  "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-12.png"
                }
                alt="suv"
                className="img-fluid mb-4"
                style={{ borderRadius: "6px" }}
              />

              {/* <ImageSlider img={""}/> */}
            </div>

            <div className="text-start ">
              <h5 className="fw-bolder">Tesla Model S</h5>
            </div>

            <div className="mt-4">
              <div className="d-flex gap-2">
                <div>
                  <h4 className=" fw-bolder fs-5">GHC 896564.00</h4>
                </div>
                <div>
                  <Divider />
                </div>
                <div>
                  <h4 className=" fw-lighter fs-5">Osu, Accra</h4>
                </div>
              </div>

              <div>
                <hr style={{ border: "1px solid #dbdbdb" }} />
              </div>

              <div className="d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/car-01.svg"
                    alt="car"
                  ></img>
                </div>
                <div className="fw-bolder">View Details</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Row2;
