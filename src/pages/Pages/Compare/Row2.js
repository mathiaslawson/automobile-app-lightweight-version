import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { LuPlus } from "react-icons/lu";

function Row2() {
  return (
    <>
      <Container className="p-5">
        <Row className="g-3">
          <Col xxl={4}>
            <Card
              className="w-100 home"
              style={{ border: "none", boxShadow: "none", height: 'auto' }}
            >
              <div className="d-flex" style={{ justifyContent: "center" }}>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "max-content",
                    aspectRatio: "1/1", // Ensure a perfect circle
                    border: "1px solid #00d084",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="w-50 p-5"
                >
                  <LuPlus className="fs-5" />
                </div>
              </div>

              <div className="text-center mt-5">
                <h6>Add to Compare</h6>
                <p>
                  <b>24,342</b> Available Compare Cars
                </p>
              </div>
            </Card>
          </Col>
          <Col xxl={4}>
            <Card
              className="p-3"
              style={{
                boxShadow: "none",
                border: "1px solid #eaeaea",
                height: "auto",
              }}
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

              <div className="text-center">
                <img
                  src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/tesla-01.svg"
                  alt="tesla"
                  className="p-2"
                ></img>
              </div>

              <div className="main-details">
                <h4 className=" fw-bolder fs-5">GHC 896564.00</h4>
                <p className=" fs-4">Tesla Model S-2023</p>
              </div>

              <div className="mt-3 mb-3">
                <select
                  className="w-100 p-3"
                  style={{
                    backgroundColor: "#f2f2f7",
                    border: "1px solid #f2f2f7",
                  }}
                >
                  <option>Change Car Model</option>
                  <option>BMW M5 Competition</option>
                  <option>C-Class 2020</option>
                  <option>C-Class 2023</option>
                </select>
              </div>
            </Card>
          </Col>
          <Col xxl={4}>
            <Card
              className="p-3"
              style={{
                boxShadow: "none",
                border: "1px solid #eaeaea",
                height: "auto",
              }}
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

              <div className="text-center">
                <img
                  src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/tesla-01.svg"
                  alt="tesla"
                  className="p-2"
                ></img>
              </div>

              <div className="main-details">
                <h4 className=" fw-bolder fs-5">GHC 896564.00</h4>
                <p className=" fs-4">Tesla Model S-2023</p>
              </div>

              <div className="mt-3 mb-3">
                <select
                  className="w-100 p-3"
                  style={{
                    backgroundColor: "#f2f2f7",
                    border: "1px solid #f2f2f7",
                  }}
                >
                  <option>Change Car Model</option>
                  <option>BMW M5 Competition</option>
                  <option>C-Class 2020</option>
                  <option>C-Class 2023</option>
                </select>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Row2;
