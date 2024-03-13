import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import ProductDetails from "./ProductDetails";
import Feedback from "../../../../Components/Customer/common/Band/Feedback";

import Specification from './Specifications'

const Row1 = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mt-5">
      <div className="">
        <Nav tabs style={{ position: "sticky" }}>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section1")}>
              Product Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section2")}>
              Customer Review
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section3")}>
              Specification
            </NavLink>
          </NavItem>
        </Nav>

        <div id="section1" className="section" style={{ height: "auto" }}>
          <ProductDetails />
        </div>

        <div id="section2" className="section" style={{ height: "auto" }}>
          <Feedback minimal={true} />
        </div>

        <div id="section3" className="section" style={{ height: "auto" }}>
            <Specification />
        </div>
      </div>
    </div>
  );
};

export default Row1;
