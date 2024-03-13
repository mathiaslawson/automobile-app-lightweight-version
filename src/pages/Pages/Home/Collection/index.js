import React, { useEffect } from "react";
import "./Collection.css";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import cadillac from "./cadillac.jpg";

import { MdCollections } from "react-icons/md";
import { IoMdHeartEmpty, IoMdSpeedometer } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import {
  PiArrowCircleLeftLight,
  PiArrowCircleRightLight,
} from "react-icons/pi";
import Slider from "./Slider";

const Collection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
    AOS.refresh();
  }, []);

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
    // Other car objects...
  ];

  return (
    <div data-aos="" className="mx-2 mx-md-5 mt-5">
      <div className="px-2 px-md-5">
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
          <div className="text-start text-md-start mb-3 mb-md-0">
            <h3>Available Brand Car</h3>
            <h1 className="fw-bolder">Most Searched Used Car</h1>
          </div>

          <div className="links text-end text-sm-start">
            <div className="link-container">
              <a href="/">Sedan</a>
              <a href="/">SUV</a>
              <a href="/">Toyota</a>
              <a href="/">Hatch</a>
              <a href="/">BMW</a>
            </div>
          </div>
        </div>

        <Slider />

        <div className="category mb-5 mt-5">
          <h4>Available 50+ Cars</h4>
          <button className="btn btn-primary" style={{ width: "max-content" }}>
            View All Sedan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
