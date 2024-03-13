import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sli = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisible: false,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisible: false,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisible: false,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisible: false,
      slidesToSlide: 1,
    },
  };

  const videos = [
    {
      id: 1,
      video: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/video/home4/car-video.mp4",
    },
  ];

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={false} // Disable infinite loop
      >
        {videos.map((video) => (
          <div key={video.id}>
            <video controls width="900" style={{ borderRadius: "8px" }}>
              <source src={video.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Sli;
