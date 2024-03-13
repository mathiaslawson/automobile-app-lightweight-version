import React from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { Container, Card } from "reactstrap";

function Row5() {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(30deg, #ebd3d3, #e8edef, #a8dcbe, #becdd5)",
        }}
        className="p-5"
      >
        <div className="mb-3 container2">
          <div>
            <h2 className="text-start fw-bolder mt-5">Latest Car Advice</h2>
            <h5 className="text-start fw-lighter" style={{ color: "black" }}>
              Here are some of the featured cars in different categories
            </h5>
          </div>

          <div
            className=" mt-5 d-flex"
            style={{ justifyContent: "space-around" }}
          >
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
                    "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/news-01.png"
                  }
                  alt="suv"
                  className=" mb-4"
                  style={{ borderRadius: "6px" , width: '100%'}}
                />

                <span className="ten-collections"> 10</span>
                <span className="heart"></span>
                <span className="right-arrow"></span>

                <div className="slide">
                  <span className="left-arrow"></span>
                </div>
              </div>
              <div className="main-details">
                <div className="">
                  <h5 className="fw-bolder">
                    The Car Enthusiast: Exploring the World of Cars and Driving.
                  </h5>

                  <div className="border mt-4"></div>
                  <div
                    className="mt-4 d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="img-fluid rounded-avatar d-flex gap-2">
                      <div>
                        <img
                          src={
                            "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/author-01.png"
                          }
                          alt="suv"
                          className="img-fluid rounded-circle"
                          style={{ borderRadius: "50%" }}
                          width="40"
                        />
                      </div>

                      <div>
                        <h6 className="fw-bolder">John Doe</h6>
                        <p className="fw-lighter">Posted on - 03 April, 2023</p>
                      </div>
                    </div>

                    {/* <div>noew</div> */}
                  </div>
                </div>
              </div>
            </Card>
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
                    "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/news-02.png"
                  }
                  alt="suv"
                  className=" mb-4"
                  style={{ borderRadius: "6px", width: '100%' }}
                />

                <span className="ten-collections"> 10</span>
                <span className="heart"></span>
                <span className="right-arrow"></span>

                <div className="slide">
                  <span className="left-arrow"></span>
                </div>
              </div>
              <div className="main-details">
                <div className="">
                  <h5 className="fw-bolder">
                    The Car Enthusiast: Exploring the World of Cars and Driving.
                  </h5>

                  <div className="border mt-4"></div>
                  <div
                    className="mt-4 d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="img-fluid rounded-avatar d-flex gap-2">
                      <div>
                        <img
                          src={
                            "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/author-01.png"
                          }
                          alt="suv"
                          className="img-fluid rounded-circle"
                          style={{ borderRadius: "50%" }}
                          width="40"
                        />
                      </div>

                      <div>
                        <h6 className="fw-bolder">John Doe</h6>
                        <p className="fw-lighter">Posted on - 03 April, 2023</p>
                      </div>
                    </div>

                    {/* <div>noew</div> */}
                  </div>
                </div>
              </div>
            </Card>
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
                    "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/news-03.png"
                  }
                  alt="suv"
                  className="img-fluid mb-4"
                  style={{ borderRadius: "6px", width: '100%' }}
                />

                <span className="ten-collections"> 10</span>
                <span className="heart"></span>
                <span className="right-arrow"></span>

                <div className="slide">
                  <span className="left-arrow"></span>
                </div>
              </div>
              <div className="main-details">
                <div className="">
                  <h5 className="fw-bolder">
                    The Car Enthusiast: Exploring the World of Cars and Driving.
                  </h5>

                  <div className="border mt-4"></div>
                  <div
                    className="mt-4 d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="img-fluid rounded-avatar d-flex gap-2">
                      <div>
                        <img
                          src={
                            "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/author-01.png"
                          }
                          alt="suv"
                          className="img-fluid rounded-circle"
                          style={{ borderRadius: "50%" }}
                          width="40"
                        />
                      </div>

                      <div>
                        <h6 className="fw-bolder">John Doe</h6>
                        <p className="fw-lighter">Posted on - 03 April, 2023</p>
                      </div>
                    </div>

                    {/* <div>noew</div> */}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row5;
