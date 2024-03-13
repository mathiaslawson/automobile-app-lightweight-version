import React from "react";
import { Container, Row, Col } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ColorCirclesCarousel = () => {
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
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container className="mt-5 mb-5" fluid>
      <div className="mt-5 mb-5">
        <h4>
          Car Colors
          <img
            src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
            alt="line"
            width="50"
            className="mx-2"
          ></img>
        </h4>
      </div>
      <Row>
        <Col>
          <Carousel
            responsive={responsive}
            infinite
            slidesToSlide={1}
            swipeable
            draggable
          >
            {cars.map((image, index) => (
              <div key={index} className="mt-5">
                <div className="text-center mx-5">
                  <img
                    src={image.img}
                    alt={`Color ${index + 1}`}
                    className="mx-5"
                    width="350"
                  />
                </div>
                <div className="text-center">
                  <p className="fw-lighter">{image.name}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ColorCirclesCarousel;
