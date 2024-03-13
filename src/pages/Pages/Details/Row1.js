import React from "react";
import { Card, CardBody, Col, Row, Button } from "reactstrap";
import { SlSpeedometer } from "react-icons/sl";
import { BsFilterLeft } from "react-icons/bs";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import VerticalDivider from "../../../Components/Common/Divider";
import {Link} from 'react-router-dom'

function Row1() {
  return (
    <>
      <div className="home" >
        <div
          className="py-2 container "
        
          style={{ border: "none", height: "auto",  marginLeft: '13rem' }}
        >
          <Row className="row g-3 py-5">
            <Col style={{ backgroundColor: "" }} xxl={7} className="mt-5 mb-5">
           
              <div className="home-title">
                <div className="d-flex gap-3">
                  <div>
                    <h1 className=" fs-4">GHC 34,637.00</h1>
                  </div>
                  <div>
                    <p
                      style={{
                        backgroundColor: "white",
                        borderRadius: "30px",
                        width: "max-content",
                        fontSize: "0.8rem",
                      }}
                      className=" p-1 px-3 "
                    >
                      Change Model
                    </p>
                  </div>
                  <div className="mx-4">
                    <VerticalDivider />
                  </div>
                </div>

                <h1
                  className="fw-bolder "
                  style={{ fontSize: "4rem", width: "max-content" }}
                >
                  BMW M5 Competition
                </h1>
                <div className="d-flex text-start gap-5">
                  {" "}
                  <p className="fw-lighter mt-4 fs-5">
                    <CiLocationOn />
                    Ghana, Accra
                  </p>
                  <p className="fw-lighter mt-4 fs-5">
                    <CiBellOn />
                    Notify me if price drops
                  </p>
                </div>
              </div>

              <div className="pilot">
                <div className="pilot-left">
                  <div className=""></div>
                  <div className="first-review mt-4">
                  <Link to="/brand-category">
                    <Button
                      style={{
                        backgroundColor: "#00d084",
                        border: "none",
                        width: "max-content",
                      }}
                      className="p-3 text-dark fw-bolder"
                    >
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/av-car.svg"
                        alt="car"
                        width="30"
                        className="mx-2"
                      ></img>
                      Find Your Car
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xxl={5}>
              <img
                src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/car-dt-banner-img.png"
                alt="car"
                className="mt-5 "
              ></img>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Row1;
