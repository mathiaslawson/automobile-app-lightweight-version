import React, { useEffect, useState } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  FormFeedback,
  Input,
  ModalBody,
  Button,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SlSpeedometer } from "react-icons/sl";
import { BsFilterLeft } from "react-icons/bs";
import { IoStar, IoStarHalf } from "react-icons/io5";
import {Link} from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
    AOS.refresh();
  }, []);

  const [setllWithUsModal, setSellWithUsModal] = useState(false);
  const toggleSellWithUsModal = () => setSellWithUsModal(!setllWithUsModal);

  const [type, setType] = useState("new");

  const sellValidation = useFormik({
    enableReinitialize: true,

    initialValues: {
      first_name: "",
      phone: "",
      email: "",
      location: "",
      carBrandName: "",
      model: "",
      regYear: "",
      mileage: "",
      fuelType: "",
      sellingPrice: "",
      note: "",
    },
    validationSchema: Yup.object({
      // first_name: Yup.string().required("Please provide first name"),
      // phone: Yup.string().required("Please provide phone"),
      // location: Yup.string().required("Please provide location"),
      // carBrandName: Yup.string().required("Please provide car brand name"),
      // model: Yup.string().required("Please provide car model"),
      // regYear: Yup.string().required("Please provide registration year"),
      // mileage: Yup.string().required("Please provide mileage"),
      // fuelType: Yup.string().required("Please provide fuel type"),
      // sellingPrice: Yup.string().required("Please provide selling price"),
      // note: Yup.string().required("Please provide note"),
    }),

    onSubmit: (values) => {
      // toast.success("Information Submitted");
      // toggleSellWithUsModal();
      sellValidation.resetForm();
    },
  });

  function CarTypeButton({ type, currentType, setType }) {
    return (
      <div
        className="py-1 px-5"
        style={{
          borderBottom:
            currentType === type ? "1px solid #00d084" : "1px solid gray",
          borderRadius: "100px",
        }}
        onClick={() => {
          setType(type);
        }}
      >
        <div className="text-center">
          <img
            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/car-01.svg"
            alt="car"
            width="34"
            className="text-center"
          />
        </div>
        <span
          className="text-center fw-bolder"
          style={{ width: "max-content" }}
        >
          {type === "new"
            ? "New Car"
            : type === "used"
            ? "Used Car"
            : "Auction"}
        </span>
      </div>
    );
  }

  return (
    <div data-aos="zoom-in-down" className="home">
      <div className="p-2 " style={{ border: "none", height: "auto" }}>
        <div className="d-flex justify-content-center m-5">
          <Row className="row g-3 p-4">
            <Col style={{ backgroundColor: "" }} xxl={6} className="" xs={12}>
              <div className="d-flex justify-content-center px-5 mx-5">
                <div className="px-5 mx-5">
                  <div className="speed">
                    <span
                      style={{
                        color: "#00d084",
                        fontFamily: "monospace",
                        fontSize: "1.5rem",
                      }}
                      className="mx-3"
                    >
                      Fastest Speed
                    </span>
                    <SlSpeedometer
                      size={25}
                      style={{
                        color: "#00d084",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>
                  <div className="mx-5 ">
                    <h1 className="fw-bolder col-xl-12" style={{ fontSize: '3rem'}}>
                      For Best Way Buy 
                      Dream Car.
                    </h1>
                    <p className="fw-lighter mt-4 fs-5 w-100">
                      Car dealerships may sell new cars from one or several
                      manufacturers, as well as used cars from a variety of
                      sources.
                    </p>
                  </div>

                  <div className="pilot mx-3">
                    <div className="pilot-left mx-5">
                      <div className="trustpilot">
                        <IoStar style={{ color: "#00d084" }} className="mt-1" />
                        <span className="mt-2 fw-bolder">Trustpilot</span>
                        <div className="five-stars">
                          <IoStar
                            style={{
                              backgroundColor: "#00d084",
                              marginLeft: "0.1rem",
                            }}
                            className="text-light p-1 fs-5"
                          />
                          <IoStar
                            style={{
                              backgroundColor: "#00d084",
                              marginLeft: "0.1rem",
                            }}
                            className="text-light p-1 fs-5"
                          />
                          <IoStar
                            style={{
                              backgroundColor: "#00d084",
                              marginLeft: "0.1rem",
                            }}
                            className="text-light p-1 fs-5"
                          />
                          <IoStar
                            style={{
                              backgroundColor: "#00d084",
                              marginLeft: "0.1rem",
                            }}
                            className="text-light p-1 fs-5"
                          />
                          <IoStar
                            style={{
                              backgroundColor: "#00d084",
                              marginLeft: "0.1rem",
                            }}
                            className="text-light p-1 fs-5"
                          />
                        </div>
                      </div>
                      <div className="first-review">
                        <span className="t-number text-muted">
                          Trustpilot <b>5.0</b>
                        </span>
                        <span className="review">
                          <b className="text-muted">2348</b> Reviews
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} xs={6} md={10} className="container">
              <div
                className="d-flex justify-content-center"
                style={{ marginLeft: "4rem", padding: "1rem" }}
              >
                <Card
                  className=""
                  style={{ border: "none", width: "100%", boxShadow: "none" }}
                >
                  <CardBody>
                    <div data-aos="" className="">
                      <h2 className="fw-bolder">Find Your Dream Car</h2>
                      <div className="d-flex flex-wrap justify-content-evenly gap-3 mt-4">
                        <CarTypeButton
                          type="new"
                          currentType={type}
                          setType={setType}
                        />
                        <CarTypeButton
                          type="used"
                          currentType={type}
                          setType={setType}
                        />
                        <CarTypeButton
                          type="auction"
                          currentType={type}
                          setType={setType}
                        />
                      </div>

                      <form className="form mt-5">
                        <div className="radio mb-4">
                          <div
                            className="d-flex align-items-center"
                            style={{ width: "max-content" }}
                          >
                            <div>
                              <input type="radio" name="" />
                            </div>
                            <div>
                              <p className="mt-2 fs-5 mx-2 fw-bolder" style={{fontSize: '0.5rem'}}>By Budget</p>
                            </div>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            style={{ width: "max-content" }}
                          >
                            <div>
                              <input type="radio" name="" />
                            </div>
                            <div>
                              <p className="mt-2 fs-5 mx-2 fw-bolder" style={{fontSize: '0.5rem'}}>By Brand</p>
                            </div>
                          </div>
                        
                        </div>

                        <div className="text-center">
                          <div>
                            <label className="text-start fw-lighter">
                              Select Budget*
                            </label>
                            <select
                              id="budget"
                              name="search"
                            
                              className="w-100 form-select search"
                              style={{
                                backgroundColor: "#ebeff0",
                                border: "1px solid #e0e0e0",
                              }}
                            >
                              <option value="volvo">
                                Ex: 10,000 - 100,000 GHS
                              </option>
                              {/* Add more options here */}
                            </select>
                          </div>
                          <div className="mt-3">
                            <label className="text-start fw-lighter">
                              Select Vehicles*
                            </label>
                            <select
                              id="vehicles"
                              name="vehicles"
                              className="w-100 form-select search"
                              style={{
                                backgroundColor: "#ebeff0",
                                border: "1px solid #e0e0e0",
                              }}
                            >
                              <option value="volvo">
                                Ex: Sedan, SUV, Truck, etc.
                              </option>
                              {/* Add more options here */}
                            </select>
                          </div>
                        </div>

                        <div className="mt-4">
                      <Link to='/brand-category'>
                      <button
                            type="button"
                            className="btn btn-dark w-100 p-3"
                            style={{
                              borderRadius: "5px",
                              backgroundColor: "#00d084",
                              color: "white",
                              border: "none",
                            }}
                          >
                            SEARCH 12463 VEHICLES
                          </button></Link>
                          <span
                            className="mt-3 d-flex align-items-center justify-content-center gap-2"
                            onClick={() => {
                              toggleSellWithUsModal(); // Assuming you have this function defined
                            }}
                          >
                            Advanced Filter <BsFilterLeft />
                          </span>
                        </div>
                      </form>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Modal isOpen={setllWithUsModal} toggle={toggleSellWithUsModal} size="lg">
        <ModalHeader
          toggle={toggleSellWithUsModal}
          style={{ border: "none" }}
        ></ModalHeader>
        <ModalBody>
          <div>
            <div className="text-start mx-4 m-3">
              <h5 className="fw-bolder">Advance Option</h5>
              <p className="text-muted">Your Personal Info</p>
            </div>
            <div>
              <hr style={{ border: "1px solid #e0e0e0" }} />
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sellValidation.handleSubmit();
                  return false;
                }}
              >
                <Row className="m-3 mt-5">
                  <Col md={12} sm={12} xs={12}>
                    <div>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">Osu , Accra</option>
                        <option value="volvo">Denu , Aflao</option>
                        <option value="volvo">Keta , Anloga</option>
                      </select>
                    </div>
                  </Col>
                </Row>

                <div className="text-start mt-5 mx-4">
                  <h5 className="fw-bolder">More Filter</h5>
                </div>

                <Row className="m-3 mt-5">
                  <Col md={6} sm={6} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Select Brand
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">Mercedes Benz</option>
                        <option value="volvo">BMW</option>
                        <option value="volvo">Audi</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={6} sm={6} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Select Body Type
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">Hatch Back</option>
                        <option value="volvo">SUV</option>
                        <option value="volvo">Sedan</option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row className="m-3 mt-5">
                  <Col md={6} sm={6} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Select Fuel Type
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">Petrol + Gas</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={6} sm={6} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Steering Side
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">Left</option>
                        <option value="volvo">Right</option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row className="m-3 mt-5">
                  <Col md={6} sm={6} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Select Color
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">Yellow</option>
                        <option value="volvo">Green</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={6} sm={6} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Select Doors
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">03 Doors</option>
                      </select>
                    </div>
                  </Col>
                </Row>

                <div className="text-start mt-5 mx-4">
                  <h5 className="fw-bolder">Year & Mileage</h5>
                </div>

                <Row className="m-3 mt-5">
                  <Col md={4} sm={3} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Select Year
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">2021</option>
                        <option value="volvo">2022</option>
                        <option value="volvo">2023</option>
                        <option value="volvo">2024</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={4} sm={3} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Select Min (miles)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">800 miles</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={4} sm={3} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Select Max (miles)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">1200 miles</option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row className="m-3 mt-5">
                  <Col md={6} sm={6} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Min (Price)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">GHC 12,234</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={6} sm={6} xs={12}>
                    <div>
                      <label className="text-start fw-lighter">
                        Max (Price)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        style={{
                          backgroundColor: "#ebeff0",
                          border: "1px solid #e0e0e0",
                        }}
                        className="w-100"
                      >
                        <option value="volvo">GHC 12,234</option>
                      </select>
                    </div>
                  </Col>
                </Row>

                <div className="m-4">
                  <Button
                    type="submit"
                    className="w-100 p-3 mt-3"
                    style={{
                      backgroundColor: "#00d084",
                      color: "black",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Submit Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </ModalBody>
        {/* <ModalFooter>
            <Button onClick={toggle}>Close</Button>
          </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default Home;
