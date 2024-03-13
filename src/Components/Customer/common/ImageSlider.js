import Carousel from "react-multi-carousel";
// Import Swiper styles

import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

import { Navigation } from 'swiper/modules';

const ImageSlider = ({ img }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <>
      {/* <Carousel responsive={responsive}>
        <div className="container mt-5">
          <img src={img} alt="suv" />
        </div>
      </Carousel> */}

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{zIndex: "999999"}}>
      
      {/* <SwiperSlide>Tyerer</SwiperSlide>
      <SwiperSlide>asa</SwiperSlide>
      <SwiperSlide>sd</SwiperSlide>
      <SwiperSlide>Tyerer</SwiperSlide>
      */}
      </Swiper>
    </>
  );
};

export default ImageSlider;
