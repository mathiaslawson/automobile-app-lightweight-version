import React, { useEffect } from "react";
import "./Browse.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { CgBrowse } from "react-icons/cg";
import { RiAuctionLine } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";

const Browse = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div data-aos="zoom-in-right" className="browse">
      <div className="browse-container">
        <CgBrowse className="browse-icon" />
        <span>Browse Used a Car</span>
      </div>
      <div className="browse-container">
        <RiAuctionLine className="browse-icon" />
        <span>Auction Car</span>
      </div>
      <div className="browse-container">
        <GiTrophyCup className="browse-icon" />
        <span>Browse Offer</span>
      </div>
      <div className="browse-container">
        <FaMapLocationDot className="browse-icon" />
        <span>Get In Touch</span>
      </div>
    </div>
  );
};

export default Browse;
