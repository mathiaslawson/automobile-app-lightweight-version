import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoStar, IoStarHalf } from "react-icons/io5";
import Marq from "./Marquee";

const RateSlider = () => {
  const cars = [
    {
      name: "Purple Dynamite",
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/color-car-03.png",
    },
    {
      name: "Sky blue",
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/color-car-02.png",
    },
    {
      name: "Golden Orange",
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/color-car-04.png",
    },
    {
      name: "Slate Ash",
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/color-car-01.png",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2, // Show two items on super large desktop
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2, // Show two items on desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Show one item on tablet
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show one item on mobile
    },
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {cars.map((image, index) => (
              <div key={index}>
                <Card
                  style={{
                    border: "none",
                    backgroundColor: "#faf8fb",
                    borderRadius: "10px",
                    height: "auto",
                    boxShadow: "none",
                  }}
                  className="p-4"
                >
                  <div
                    className="d-flex mb-5"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
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
                      <div className="fw-bolder">Great Services!</div>
                    </div>
                    <div>
                      {" "}
                      <img
                        src={
                          "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/google3.svg"
                        }
                        alt="gogole"
                        className="mt-4"
                      ></img>
                    </div>
                  </div>
                  <div className="text-start mt-5">
                    <p className="fs-5 fw-lighter">
                      {" "}
                      Automobile customer feedback is an invaludable resource
                      for other customers who are considering a purchase. Share
                      your experience with us.
                    </p>
                  </div>
                  <div className="text-start">
                    <p className="fs-5 fw-bolder"> John Doe</p>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
       
      </Row>
    </Container>
  );
};

export default RateSlider;
