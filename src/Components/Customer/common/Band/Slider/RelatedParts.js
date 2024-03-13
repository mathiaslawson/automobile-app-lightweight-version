import Carousel from "react-multi-carousel";
// Import Swiper styles
// import "./style.css";
import lambo from "../../../../../assets/lamborghini.webp";
import range from "../../../../../assets/range.webp";
import cadillac from "../../../../../assets/cadillac.jpg";
import jeep from "../../../../../assets/jeep.jpg";
import { MdCollections } from "react-icons/md";
import { IoMdHeartEmpty, IoMdSpeedometer } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { Button } from "reactstrap";
import { FaTruckFast } from "react-icons/fa6";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";
import {
  PiArrowCircleLeftLight,
  PiArrowCircleRightLight,
} from "react-icons/pi";

import { CiHeart } from "react-icons/ci";
import "react-multi-carousel/lib/styles.css";
// import ImageSlider from "./ImageSlider";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const RelatedParts = () => {
  const [cursor, setCursor] = useState("grab");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  const handleAddToCart = () => {
    toast.success("Item added to cart!");
  };

  return (
    <>
      <div className="text-start mt-5">
        <h4 className="text-start fw-bolder"> Related Car Parts</h4>
      </div>
    


      <Carousel
        responsive={responsive}
        customTransition="transform 300ms ease-in-out"
        afterMove={() => setCursor("grab")}
        beforeMove={() => setCursor("grabbing")}
      >
        {cars.map((car, key) => (
          <div className=" mt-5" key={key}>
          <Card
            className="p-3"
            key={car.id}
            style={{
              boxShadow: "none",
              // border: "1px solid #eaeaea",
              height: "auto",
            }}
          >
            <div>
              <div className="">
                <div
                  style={{ position: "relative" }}
                  className="d-flex justify-content-between mb-3"
                >
                  <div
                    style={{
                      backgroundColor: "red",
                      borderRadius: "4px",
                    }}
                    className="p-1 text-light fw-bolder px-3"
                  >
                    -10%
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    className="p-1 text-light fw-bolder"
                  >
                    <CiHeart
                      style={{ color: "black" }}
                      className="fs-5"
                    />
                  </div>
                </div>
                <div className="text-center">
                  {" "}
                  {/* Centering wrapper */}
                  <img
                    src={
                      "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-08.png"
                    }
                    alt="suv"
                    className=""
                    style={{
                      borderRadius: "6px",
                      maxWidth: "100%",
                    }}
                  />
                </div>
              </div>

              <div className="text-center mt-4">
                <Button
                  style={{ backgroundColor: "#00d084", border: "none" }}
                  className="w-50 p-2 text-dark fw-bolder"
                  onClick={()=>{
                    toast.success('Part added to cart!')
                  }}
                >
                  Add to cart
                </Button>
              </div>

              <div className="mt-5">
              <Link to='/shop-details' style={{color: 'black', textDecoration: 'none'}}>
              <h4 className="fs-5">
                  Tech master New Brand Carbon ceramic brakes.
                </h4></Link>
                <div className="fw-lighter">GHC 214.00</div>
              </div>
            </div>
          </Card>
        </div>
        ))}
      </Carousel>

      <div className="fw-lighter text-center mb-5 mt-5">
        There are more Car Parts Available{" "}
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

export default RelatedParts;
