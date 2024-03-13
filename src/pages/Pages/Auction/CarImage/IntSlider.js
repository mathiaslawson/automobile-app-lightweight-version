import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SlLocationPin } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { IoMdSpeedometer, IoMdHeartEmpty } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";
import {
  PiArrowCircleLeftLight,
  PiArrowCircleRightLight,
} from "react-icons/pi";

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

  const cars = [
    {
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/interior-01.png",
      name: "Cadillac Escalade",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      //   collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/interior-02.png",
      name: "Cadillac Escalade",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      //   collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/interior-03.png",
      name: "Cadillac Escalade",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      //   collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
  ];

  // Adjust the number of slides to show based on the number of cars
  const slidesToShow = cars.length <= 1 ? 1 : 2;

  return (
    <>
      <Carousel
        responsive={responsive}
        slidesToSlide={slidesToShow}
        infinite={false} // Disable infinite loop
      >
        {cars.map((car) => (
          <div key={car.id}>
            <div className="car-card mt-5">
              <img
                src={car.img}
                alt="car"
                className=""
                width="900"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Sli;
