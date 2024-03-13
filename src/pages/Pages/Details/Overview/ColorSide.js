import React from "react";
import { Container, Row, Col } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ColorCirclesCarousel = () => {
  const colors = ["#FF5733", "#3498db", "#2ecc71", "#e74c3c", "#9b59b6"];

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
            {/* color circles do not touch */}
            {/* {colors.map((color, index) => (
              
              <div key={index} item={color} className="mt-4">
                <div
                  style={{
                    backgroundColor: color,
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            ))} */}

            {/* car slides */}
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
