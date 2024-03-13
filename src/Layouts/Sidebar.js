import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
//import logo
import logoSm from "../assets/images/logo-sm.png";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";


import styled from 'styled-components';

//Import Components
import VerticalLayout from "./VerticalLayouts/index";
import TwoColumnLayout from "./TwoColumnLayout";
import { Container } from "reactstrap";
import HorizontalLayout from "./HorizontalLayout";

import Logo from "../Components/Logo";

import img from '../assets/images/car.png'

const Sidebar = ({ layoutType }) => {

  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  });

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
    } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    } else {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    }
  };


  const StyledContainer = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  color: white;
  box-shadow: none;
  border-radius: 30px;
 
  overflow: auto; /* Enable scrolling */

  /* Custom Scrollbar Styles */
  &::-webkit-scrollbar {
    width: 7px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color of the track */
    border-radius: 6px; /* Rounded corners for the track */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7030f8; /* Purple color for the thumb */
    border-radius: 6px; /* Rounded corners for the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #6a1b9a; /* Darker purple color on hover */
  }
`;

  return (
    <React.Fragment>
      <StyledContainer  className="app-menu navbar-menu text-light m-3 mx-3" style={{backgroundColor: 'white', border: '1px solid #e0e0e0', color: 'white', boxShadow: 'none', borderRadius: "30px", overflow: 'scroll'}}>
        <div className="navbar-brand-box p-2" style={{backgroundColor: "transparent"}}>
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={img} alt="" height="52" />
              {/* <h4 className="p-3">Automarket</h4> */}
            </span>
            <span className="logo-lg p-4">
              <img src={img} alt="" height="60" />
              {/* <h4 className="mt-2 text-light" style={{color: 'white'}}>Automarket</h4> */}
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={img} alt="" height="52" />
              {/* <h4 className="p-3">Automarket</h4> */}
            </span>
            <span className="logo-lg p-4">
              <img src={img} alt="" height="150" className="" />
            
            </span>
          </Link>
          <button
            onClick={addEventListenerOnSmHoverMenu}
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        {layoutType === "horizontal" ? (
          <div id="scrollbar">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <HorizontalLayout />
              </ul>
            </Container>
          </div>
        ) : layoutType === 'twocolumn' ? (
          <React.Fragment>
            <TwoColumnLayout />
            <div className="sidebar-background"></div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SimpleBar id="scrollbar" className="h-100">
              <Container fluid>
                <div id="two-column-menu"></div>
                <ul className="navbar-nav" id="navbar-nav">
                  <VerticalLayout layoutType={layoutType} />
                </ul>
              </Container>
            </SimpleBar>
            <div className="sidebar-background"></div>
          </React.Fragment>
        )}
      </StyledContainer >
      <div className="vertical-overlay"></div>
    </React.Fragment>
  );
};

export default Sidebar;
