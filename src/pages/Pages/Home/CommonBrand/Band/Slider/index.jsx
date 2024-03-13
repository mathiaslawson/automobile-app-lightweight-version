import Carousel from "react-multi-carousel";
// Import Swiper styles
// import "./style.css";
import lambo from "../../assets/lamborghini.webp";
import range from "../../assets/range.webp";
import cadillac from "../../assets/cadillac.jpg";
import jeep from "../../assets/jeep.jpg";
import { MdCollections } from "react-icons/md";
import { IoMdHeartEmpty, IoMdSpeedometer } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { Button } from "reactstrap";
import { FaTruckFast } from "react-icons/fa6";
import { Card } from "reactstrap";
import {
  PiArrowCircleLeftLight,
  PiArrowCircleRightLight,
} from "react-icons/pi";
import { Link } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
// import ImageSlider from "./ImageSlider";
import { useState } from "react";

const Sli = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const cars = [
    {
      id: 1,
      img: cadillac,
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
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 2,
      img: jeep,
      name: "Jeep Wrangler",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 3,
      img: range,
      name: "Range Rover Velar",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 3,
      img: range,
      name: "Range Rover Velar",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 3,
      img: range,
      name: "Range Rover Velar",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 3,
      img: range,
      name: "Range Rover Velar",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },

    {
      id: 4,
      img: lambo,
      name: "Lamborghini Aventador",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 5,
      img: lambo,
      name: "Lamborghini Aventador",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
    {
      id: 6,
      img: lambo,
      name: "Lamborghini Aventador",
      price: "17,899",
      map: <SlLocationPin />,
      location: "Greater Accra",
      speed: <IoMdSpeedometer />,
      miles: "2500 miles",
      pump: <BsFuelPumpDiesel />,
      fueltype: "Petrol + Gas",
      plug: <MdElectricalServices />,
      heart: <IoMdHeartEmpty />,
      collection: <MdCollections />,
      left: <PiArrowCircleLeftLight />,
      right: <PiArrowCircleRightLight />,
      truck: <FaTruckFast />,
      view: "View Details",
      electricity: "electricity",
    },
  ];

  return (
    <>
      <div className="text-start">
        <h6 className="text-start mt-5" style={{ color: "#00d084" }}>
          Best Car Collection
        </h6>
        <h1 className="text-start fw-bolder">Compare Car With Brand</h1>
      </div>
      <Carousel responsive={responsive} className="mb-5">
        <div>
          <div className="car-card">
            {cars.map((car, key) => {
              return (
                <div className=" mt-5" key={key}>
                  <Card
                    className="p-3"
                    key={car.id}
                    style={{
                      boxShadow: "none",
                      border: "1px solid #eaeaea",
                      height: "auto",
                    }}
                  >
                    <div
                      className="d-flex mt-5"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div>
                        <img
                          src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/cc-sucuki.png"
                          alt="img"
                        ></img>
                        <div className="mt-4">
                          <p className="text-center fw-lighter">(Mercedes)</p>
                          <div>
                            <p className="fw-bolder text-center">
                              Mercedes Benz
                            </p>
                            <p className="fw-bolder text-center">
                              GHC 220,000.00
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                          width: "max-content",
                          aspectRatio: "2/2", // Ensure a perfect circle
                          border: "1px solid #00d084",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "max-content",
                        }}
                        className="p-3 fw-bolder"
                      >
                        VS
                      </div>

                      <div>
                        <img
                          src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/cc-bmw.png"
                          alt="img"
                        ></img>
                        <div className="mt-4">
                          <p className="text-center fw-lighter">(BMW)</p>
                          <div>
                            <p className="fw-bolder text-center">
                              M5 Competition
                            </p>
                            <p className="fw-bolder text-center">
                              GHC 120,000.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        style={{ backgroundColor: "#00d084", border: "none" }}
                        className="w-100 p-3 text-dark fw-bolder"
                      >
                        Compare Mercedes & BMW
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* DO not remove */}
        {/* IT shawdows the number of cars available for the arrows */}
        {cars.map((a, key) => {
          return <div key={key}></div>;
        })}
      </Carousel>

      <div className="fw-lighter text-center mb-5">
        There are Trending Car Available{" "}
        <Link to="/single-brand">
          <Button
            style={{
              backgroundColor: "#00d084",
              border: "none",
              width: "max-content",
            }}
            className="p-3 text-dark fw-bolder mx-2"
          >
            View More
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Sli;
