import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "reactstrap";
import { IoMdSpeedometer, IoMdHeartEmpty } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdElectricalServices, MdCollections } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import {
  PiArrowCircleLeftLight,
  PiArrowCircleRightLight,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const Sli = () => {
  const [cursor, setCursor] = useState("grab");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  const cars = [
    {
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-1.png",
      name: "Range Rover",
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
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-11.png",
      name: "BMW M3 Competition",
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
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-2.png",
      name: "Ford Mustang 2022",
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
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-4.png",
      name: "Jeep Grand Cheokee",
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
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-1.png",
      name: "Range Rover",
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
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-11.png",
      name: "BMW M3 Competition",
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
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-2.png",
      name: "Ford Mustang 2022",
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
      id: 1,
      img: "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-4.png",
      name: "Jeep Grand Cheokee",
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
    // Add more car data if needed
  ];

  return (
    <>
      <Carousel
        responsive={responsive}
        customTransition="transform 300ms ease-in-out"
        afterMove={() => setCursor("grab")}
        beforeMove={() => setCursor("grabbing")}
      >
        {cars.map((car) => (
          <div key={car.id}>
            <Link to="/details" style={{textDecoration: 'none'}}>
              <Card
                className="p-3 details-card card-slider"
                style={{
                  boxShadow: "none",
                  border: "1px solid #eaeaea",
                  height: "535px",
                  cursor: "pointer",
                }}
              >
                <div className="">
                  <img
                    src={car.img}
                    alt="suv"
                    className="img-fluid mb-4"
                    style={{ borderRadius: "6px" }}
                  />
                  <span className="ten-collections">{car.collection} 10</span>
                  <span className="heart">{car.heart}</span>
                  <span className="right-arrow">{car.right}</span>
                  <div className="slide">
                    <span className="left-arrow">{car.left}</span>
                  </div>
                </div>
                <div className="text-center  mb-3">
                  <div className="w-100 d-flex gap-1 mt-2 text-center justify-content-center align-items-center">
                    <div
                      className="fw-lighter fs-5 p-2"
                      style={{
                        backgroundColor: "#e5e6ec",
                        borderRadius: "10px",
                      }}
                    >
                      00D
                    </div>
                    <div className="fs-5 p-2 fw-lighter">:</div>
                    <div
                      className="fw-lighter fs-5 p-2"
                      style={{
                        backgroundColor: "#e5e6ec",
                        borderRadius: "10px",
                      }}
                    >
                      00H
                    </div>
                    <div className="fs-5 p-2 fw-lighter">:</div>
                    <div
                      className="fw-lighter fs-5 p-2"
                      style={{
                        backgroundColor: "#e5e6ec",
                        borderRadius: "10px",
                      }}
                    >
                      00M
                    </div>
                    <div className="fs-5 p-2 fw-lighter">:</div>
                    <div
                      className="fw-lighter fs-5 p-2"
                      style={{
                        backgroundColor: "#e5e6ec",
                        borderRadius: "10px",
                      }}
                    >
                      00S
                    </div>
                  </div>
                </div>
                <div className="main-details">
                  <div className="details">
                    <h4 className="fw-bolder">{car.name}</h4>
                    <div className="price-location">
                      <span className="price">${car.price}</span>
                      <span className="location">
                        {car.map}
                        <b>{car.location}</b>{" "}
                      </span>
                    </div>
                    <div className="tank">
                      <span>
                        {car.speed} {car.miles}
                      </span>
                      <span>
                        {car.tunk}
                        {car.fueltype}
                      </span>
                      <span>
                        {car.plug} {car.electricity}
                      </span>
                    </div>
                    <hr style={{ border: "1px solid #dbdbdb" }} />
                    <div className="d-flex" style={{ cursor: "pointer" }}>
                      <span className="icon">{car.truck}</span>{" "}
                      <span className="fw-bolder">View Details</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Sli;
