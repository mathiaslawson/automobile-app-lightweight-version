import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

// import Modal from "./Modal";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdPricetags, IoMdHeartEmpty, IoIosArrowDown } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { Button } from "reactstrap";
import { BsSearch, BsHandbag } from "react-icons/bs";
import Joyride from "react-joyride";
import { useFormik } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "./img.png";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Logo";
import { useSelector, useDispatch } from "react-redux";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Input,
  Col,
  Label,
  FormGroup,
  Spinner,
  FormFeedback,
} from "reactstrap";
import { Container } from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { toast } from 'react-toastify';
import { FaPowerOff } from "react-icons/fa6";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { finalLogin } from "../../../store/actions";

const LogoAndText = () => (
  <div className="navbar-logo">
    <img
      src={
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/footer-logo.svg"
      }
      alt="logo"
    />
    {/* <div className="navbar-auto">
      <div className="navbar-text">
        <h1 className="navbar-title">AutoMobile</h1>
        <p className="navbar-desc">Automotive car dealer</p>
      </div>
    </div> */}
  </div>
);

const VerticalDivider = () => {
  return (
    <div
      style={{ margin: "0 10px", borderLeft: "1px solid #ccc", height: "20px" }}
    />
  );
};

const NavBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, []);

  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    toggleModal();
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [setllWithUsModal, setSellWithUsModal] = useState(false);
  const toggleSellWithUsModal = () => setSellWithUsModal(!setllWithUsModal);

  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [run, setRun] = useState(false);

  const handleTourStart = () => {
    setRun(true);
  };

  const handleTourEnd = () => {
    setRun(false);
  };

  const steps = [
    {
      target: "tour-button",
      content: "This button will take you to the dashboard or login page.",
    },
  ];

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
      confirm: Yup.string().required("Please confirm password is required"),
    }),

    onSubmit: (values) => {
      console.log("balues");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        validation.resetForm();
        toast.success("Login Successfully");
        setLoggedIn(true);
        setAccount({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
        });
        toggle();
      }, 4000);
    },
  });

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
      first_name: Yup.string().required("Please provide first name"),
      phone: Yup.string().required("Please provide phone"),
      location: Yup.string().required("Please provide location"),
      carBrandName: Yup.string().required("Please provide car brand name"),
      model: Yup.string().required("Please provide car model"),
      regYear: Yup.string().required("Please provide registration year"),
      mileage: Yup.string().required("Please provide mileage"),
      fuelType: Yup.string().required("Please provide fuel type"),
      sellingPrice: Yup.string().required("Please provide selling price"),
      // note: Yup.string().required("Please provide note"),
    }),

    onSubmit: (values) => {
      toast.success("Information Submitted");
      toggleSellWithUsModal();
      sellValidation.resetForm();
    },
  });

  const [isLoginModal, setIsLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModal(!isLoginModal);
  };

  const [isCartModal, setIsCartModal] = useState(false);

  const toggleCartModal = () => {
    setIsCartModal(!isCartModal);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
    // Add your logic for handling item click here
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const dropdownRef = useRef(null);

  // Function to close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsCartModal(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { user } = useSelector((state) => ({
    user: state.Login.user,
  }));

  const navigate = useNavigate();

  return (
    <>
      {/* Dropdown modal  */}

      <header>
        <nav className="px-md-5 " style={{ borderBottom: "1px solid #e0e0e0" }}>
          <div className="navbar-row px-md-5">
            <div className="text-start">
              <Logo />
            </div>

            <div className="bars">
              <div onClick={() => setNav(!nav)} className="design-bars">
                {nav ? (
                  <FaTimes size={30} className="fatimes" />
                ) : (
                  <FaBars size={30} className="fabars" />
                )}
              </div>

              {nav && (
                <div>
                  <ul className="menu p-4 d-flex flex-wrap">
                    <li className="mt-2">
                      <Link
                        to={"/"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to={"/details"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Car Details
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to={"/about-us"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to={"/customer-review"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Customer Review
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to={"/return-exchange"}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          width: "max-content",
                        }}
                      >
                        Return Exchange
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to={"/auction-details"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Auction Details
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to={"/compare"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Compare
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to={"/purchases"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Purchases
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle
                          caret
                          style={{
                            backgroundColor: "transparent",
                            width: "max-content",
                            color: "black",
                            border: "none",
                           
                          }}
                        >
                          Shop
                        </DropdownToggle>
                        <DropdownMenu
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                          }}
                        >
                          <DropdownItem>
                            <Link
                              to={"/shop"}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Shop
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link
                              to={"/shop-details"}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Part Details
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link
                              to={"/shop-checkout"}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Checkout
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link
                              to={"/brand-category"}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Brand Category
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link
                              to={"/single-brand"}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Single Brand Category
                            </Link>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="search mt-2 mb-3 text-start w-50">
              <input name="search" placeholder="Search car names or brand" />
              <button className="btn">
                <BsSearch />
              </button>
            </div>

            <div className="d-flex gap-3 align-items-center justify-content-evenly">
              <div
                className="mt-1 mx-3 d-flex align-items-center justify-content-evenly"
                onClick={toggleSellWithUsModal}
                style={{ width: "max-content", cursor: "pointer" }}
              >
                <div>
                  <IoMdPricetags
                    style={{ color: "#00d084" }}
                    className="mx-2"
                  />
                </div>
                <div>SELL WITH US</div>
              </div>
              <div className=" align-items-center justify-content-evenly mx-3 d-flex">
                <IoMdHeartEmpty style={{ color: "#00d084" }} />
                SAVE
              </div>
              <div className="mt-2">
                <div>
                  <Button
                    className="btn btn-dark d-flex align-items-center justify-content-evenly"
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "#00d084",
                      border: "none",
                      width: "max-content",
                    }}
                    onClick={() => {
                      if (Object.keys(user).length > 0) {
                        toggleLoginModal();
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    <div>
                      <RiAccountCircleLine style={{ color: "white" }} />
                    </div>
                    <div>
                      {Object.keys(user).length > 0
                        ? user?.first_name + " " + user?.last_name
                        : "Login"}
                    </div>
                  </Button>
                </div>
                <Dropdown
                  isOpen={isLoginModal}
                  toggle={toggleLoginModal}
                  className="mt-2"
                >
                  {/* <DropdownToggle caret>Menu</DropdownToggle> */}
                  <DropdownMenu
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #e0e0e0",
                      boxShadow: "2px 2px 10px 4px #def9ef",
                    }}
                    data-aos="fade-up"
                  >
                    <div className="p-4">
                      <div
                        style={{ fontSize: "0.8rem" }}
                        className="text-center mb-4"
                      >
                        Welcome! {account?.first_name}
                      </div>
                      <div>
                        <hr style={{ border: "1px solid #e0e0e0" }} />
                      </div>
                      <div className="text-center align-items-center d-flex">
                        <Button
                          style={{
                            backgroundColor: "#00d084 ",
                            width: "max-content",
                            borderRadius: "5px",
                            border: "none",
                          }}
                          onClick={() => {
                            setLoggedIn(false);
                            setLoading(true);
                            setTimeout(() => {
                              setLoading(false);
                              setAccount({});
                              toast.success("Logged Out Successfully");
                              toggleLoginModal();
                              navigate("/login");
                            }, 4000);
                          }}
                          className="btn align-items-center d-flex"
                        >
                          {loading ? (
                            <div>
                              <Spinner size={"sm"} className="mx-2" />
                            </div>
                          ) : (
                            <div>
                              <FaPowerOff
                                style={{ color: "white" }}
                                className="mx-2"
                              />
                            </div>
                          )}
                          <div> Logout</div>
                        </Button>
                      </div>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div
                style={{ display: Object.keys(user).length > 0 ? "" : "none" }}
                className="tour-button"
              >
                <Button
                  className="btn btn-dark d-flex align-items-center justify-content-evenly tour-button"
                  style={{
                    borderRadius: "4px",
                    backgroundColor: "#00d084",
                    border: "none",
                    width: "max-content",
                  }}
                  onClick={() => {
                    dispatch(finalLogin());
                    navigate("/recieve-invoice");
                  }}
                >
                  <div>
                    <LuLayoutDashboard style={{ color: "white" }} />
                  </div>
                  <div>
                    {Object.keys(user).length > 0 ? "Visit Dashboard" : "Login"}
                  </div>
                </Button>
              </div>
              {/* 
              <Joyride
        run={run}
        steps={steps}
        continuous={true}
        scrollToFirstStep={true}
        showSkipButton={true}
        callback={handleTourEnd}
      />
      {Object.keys(user).length > 0 && (
        <button onClick={handleTourStart}>Start Tour</button>
      )} */}
            </div>
          </div>
        </nav>

        <section
          className="px-5 bottom-nav d-flex justify-content-around mx-2 "
          style={{ flexWrap: "wrap" }}
        >
          <div className="d-none d-md-block">
            <ul className="menu p-4 d-flex flex-wrap">
              <li className="mt-2">
                <Link
                  to={"/home"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to={"/details"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Car Details
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to={"/about-us"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to={"/customer-review"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Customer Review
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to={"/return-exchange"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "max-content",
                  }}
                >
                  Return Exchange
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to={"/auction-details"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Auction Details
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to={"/compare"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Compare
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to={"/purchases"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Purchase
                </Link>
              </li>
              <li className="">
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle
                    caret
                    style={{
                      backgroundColor: "transparent",
                      width: "max-content",
                      color: "black",
                      border: "none",
                      boxShadow: 'none'
                    }}
                  >
                    Shop
                  </DropdownToggle>
                  <DropdownMenu
                    style={{ borderRadius: "0px", border: "1px solid black" }}
                  >
                    <DropdownItem>
                      <Link
                        to={"/shop"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Shop
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        to={"/shop-details"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Part Details
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        to={"/shop-checkout"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Checkout
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        to={"/brand-category"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Brand Category
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        to={"/single-brand"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Single Brand Category
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>
          </div>

          <div
            className="right-side"
            style={{ cursor: "pointer", marginLeft: "-4rem" }}
          >
            <Dropdown
              isOpen={isCartModal}
              toggle={toggleCartModal}
              className="mt-5"
              innerRef={dropdownRef}
            >
              <DropdownMenu
                style={{
                  borderRadius: "0px",
                  border: "1px solid black",
                }}
                data-aos="fade-up"
              >
                <div className="p-1">
                  <div className="">
                    <div className="d-flex mt-3 align-items-center justify-content">
                      <div className="fw-bolder">
                        <img src={img} alt="img"></img>
                      </div>
                      <div className="fw-lighter mt-3">
                        <div className="fw-bolder d-flex justify-content-between">
                          <div>GHC 214.00</div>
                        </div>
                        <div>Steering Rack Advance Auto Parts.</div>
                        <div
                          className="d-flex gap-2"
                          style={{ height: "40px" }}
                        >
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              color: "black",
                              border: "none",
                              borderRadius: "10px",
                            }}
                            className="btn btn-dark"
                          >
                            <p className="fw-bolder">-</p>
                          </Button>
                          <div
                            style={{
                              backgroundColor: "#f3f3f3",
                              borderRadius: "10px",
                            }}
                            className="fw-bolder p-2 px-3"
                          >
                            01
                          </div>
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              color: "black",
                              border: "none",
                              borderRadius: "10px",
                            }}
                            className="btn btn-dark"
                          >
                            <p className="fw-bolder">+</p>
                          </Button>
                        </div>
                      </div>
                      <div className="mx-5" style={{ color: "red" }}>
                        X
                      </div>
                    </div>

                    <div className="mt-3">
                      <hr style={{ border: "1px solid #c9d1ce" }} />
                    </div>

                    <div>
                      <table className="">
                        <tbody>
                          <tr>
                            <td className="fw-bolder">Sub Total</td>
                            <td className="left w-100 text-end">GHC 468</td>
                          </tr>
                          <tr>
                            <td className="fw-bolder">Offer (20%)</td>
                            <td className="left w-100 text-end">GHC 100</td>
                          </tr>
                          <tr>
                            <td className="fw-bolder">Total</td>
                            <td className="left w-100 text-end">GHC 568</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-3">
                      <Button
                        className="w-100 p-3 fw-bolder"
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          border: "none",
                        }}
                      >
                        Continue Shopping
                      </Button>
                    </div>
                    <div className="mt-3">
                      <Button
                        className="w-100 p-3 fw-bolder"
                        style={{
                          backgroundColor: "#00d084",
                          color: "black",
                          border: "none",
                        }}
                      >
                        Poroduct Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              </DropdownMenu>
            </Dropdown>
            <div
              className="cart"
              onClick={() => {
                toggleCartModal();
              }}
            >
              <BsHandbag className="hand-bag" />
              <div className="cart-numb">
                <span>Cart</span>
                <span>(1)</span>
              </div>
            </div>

            <div className="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="gray"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2" />
              </svg>

              <VerticalDivider />

              <div className="">
                <span className="">To More Inquiry</span>
                <span className="number">+556 318 804</span>
              </div>
            </div>
          </div>
        </section>
      </header>

      <div>
        {/* <Button color="primary" onClick={toggle}>
          Open Modal
        </Button> */}
        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle} style={{ border: "none" }}></ModalHeader>
          <ModalBody>
            <div>
              <div className="text-center mt-5">
                <h5 className="fw-bolder">Login</h5>
              </div>
              <div>
                <hr style={{ border: "1px solid #e0e0e0" }} />
              </div>
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                >
                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>First Name*</lable>
                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="form-control p-3"
                        placeholder="First Name"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.first_name || ""}
                        invalid={
                          validation.touched.first_name &&
                          validation.errors.first_name
                            ? true
                            : false
                        }
                      />
                      {validation.touched.first_name &&
                      validation.errors.first_name ? (
                        <FormFeedback type="invalid">
                          {validation.errors.first_name}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Last Name*</lable>
                      <Input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="form-control p-3"
                        placeholder="Last Name"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.last_name || ""}
                        invalid={
                          validation.touched.last_name &&
                          validation.errors.last_name
                            ? true
                            : false
                        }
                      />
                      {validation.touched.last_name &&
                      validation.errors.last_name ? (
                        <FormFeedback type="invalid">
                          {validation.errors.last_name}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="m-3 mt-5">
                    <Col md={12} sm={6} xs={12}>
                      <lable>Enter your email address*</lable>
                      <Input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control p-3"
                        placeholder="john@example.com"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={
                          validation.touched.email && validation.errors.email
                            ? true
                            : false
                        }
                      />
                      {validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid">
                          {validation.errors.email}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>

                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>Password*</lable>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control p-3"
                        placeholder="*** ***"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.password || ""}
                        invalid={
                          validation.touched.password &&
                          validation.errors.password
                            ? true
                            : false
                        }
                      />
                      {validation.touched.password &&
                      validation.errors.password ? (
                        <FormFeedback type="invalid">
                          {validation.errors.password}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Confirm Password*</lable>
                      <Input
                        type="password"
                        name="confirm"
                        id="confirm"
                        className="form-control p-3"
                        placeholder="*** ***"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.confirm || ""}
                        invalid={
                          validation.touched.confirm &&
                          validation.errors.confirm
                            ? true
                            : false
                        }
                      />
                      {validation.touched.confirm &&
                      validation.errors.confirm ? (
                        <FormFeedback type="invalid">
                          {validation.errors.confirm}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>

                  <div className="m-4">
                    <Button
                      className="w-100 p-3 mt-3"
                      style={{
                        backgroundColor: "#00d084",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                      }}
                      type="submit"
                      disabled={loading}
                    >
                      {loading && <Spinner size={"sm"} className="mx-2" />}
                      Login
                    </Button>
                  </div>
                </form>
              </div>

              <div className="text-center mt-5">
                <p className=" text-muted fs-5">
                  By signing up you agree to the <b>'terms & conditions'</b>
                </p>
              </div>

              <div className="text-center mt-4 mb-4 d-flex justify-content-center gap-4">
                <div
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "50%",
                    width: "auto",
                    height: "auto",
                  }}
                  className="p-4 btn btn-light"
                >
                  <FcGoogle />
                </div>
                <div
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "50%",
                    width: "auto",
                    height: "auto",
                  }}
                  className="p-4 btn btn-light"
                >
                  <FaFacebookF style={{ color: "#6990ff" }} />
                </div>
                <div
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "50%",
                    width: "auto",
                    height: "auto",
                  }}
                  className="p-4 btn btn-light"
                >
                  <IoLogoTwitter style={{ color: "blue" }} />
                </div>
              </div>
            </div>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={toggle}>Close</Button>
          </ModalFooter> */}
        </Modal>

        <Modal
          isOpen={setllWithUsModal}
          toggle={toggleSellWithUsModal}
          size="lg"
        >
          <ModalHeader
            toggle={toggleSellWithUsModal}
            style={{ border: "none" }}
          ></ModalHeader>
          <ModalBody>
            <div>
              <div className="text-start mt- m-3">
                <h5 className="fw-bolder">Sell Your Car</h5>
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
                    <Col md={6} sm={6} xs={12}>
                      <lable>First Name*</lable>
                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="form-control p-3"
                        placeholder="First Name"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                        value={sellValidation.values.first_name || ""}
                        invalid={
                          sellValidation.touched.first_name &&
                          sellValidation.errors.first_name
                            ? true
                            : false
                        }
                      />
                      {sellValidation.touched.first_name &&
                      sellValidation.errors.first_name ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.first_name}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Phone*</lable>

                      <Input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control p-3"
                        placeholder="+880- 123 234 ***"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                        value={sellValidation.values.phone || ""}
                        invalid={
                          sellValidation.touched.phone &&
                          sellValidation.errors.phone
                            ? true
                            : false
                        }
                      />
                      {sellValidation.touched.phone &&
                      sellValidation.errors.phone ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.phone}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>Email (Optional)</lable>

                      <Input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control p-3"
                        placeholder="info@example.com"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                        value={sellValidation.values.email || ""}
                        invalid={
                          sellValidation.touched.email &&
                          sellValidation.errors.email
                            ? true
                            : false
                        }
                      />
                      {sellValidation.touched.email &&
                      sellValidation.errors.email ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.email}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Location*</lable>

                      <Input
                        type="text"
                        name="location"
                        id="location"
                        className="form-control p-3"
                        placeholder="Enter your address"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                        value={sellValidation.values.location || ""}
                        invalid={
                          sellValidation.touched.location &&
                          sellValidation.errors.location
                            ? true
                            : false
                        }
                      />
                      {sellValidation.touched.location &&
                      sellValidation.errors.location ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.location}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>

                  <div className="text-start mt-5">
                    <h5 className="fw-bolder">Your Car Info</h5>
                  </div>

                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>Car Brand Name*</lable>

                      <Input
                        type="text"
                        name="carBrandName"
                        id="carBrandName"
                        className="form-control p-3"
                        placeholder="Totyota"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                        value={sellValidation.values.carBrandName || ""}
                        invalid={
                          sellValidation.touched.carBrandName &&
                          sellValidation.errors.carBrandName
                            ? true
                            : false
                        }
                      />
                      {sellValidation.touched.carBrandName &&
                      sellValidation.errors.carBrandName ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.carBrandName}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Model*</lable>
                      <Input
                        type="text"
                        name="model"
                        id="model"
                        className="form-control p-3"
                        placeholder="Hilux"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                        value={sellValidation.values.model || ""}
                        invalid={
                          sellValidation.touched.model &&
                          sellValidation.errors.model
                            ? true
                            : false
                        }
                      />
                      {sellValidation.touched.model &&
                      sellValidation.errors.model ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.model}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>

                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>Reg. Year*</lable>

                      <Input
                        type="text"
                        name="regYear"
                        id="regYear"
                        className="form-control p-3"
                        placeholder="Rs etN 80"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                        value={sellValidation.values.regYear || ""}
                        invalid={
                          sellValidation.touched.regYear &&
                          sellValidation.errors.regYear
                            ? true
                            : false
                        }
                      />
                      {sellValidation.touched.regYear &&
                      sellValidation.errors.regYear ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.regYear}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Mileage*</lable>

                      <Input
                        type="text"
                        name="mileage"
                        id="mileage"
                        className="form-control p-3"
                        placeholder="23,456 miles"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                        value={sellValidation.values.mileage || ""}
                        invalid={
                          sellValidation.touched.mileage &&
                          sellValidation.errors.mileage
                            ? true
                            : false
                        }
                      />
                      {sellValidation.touched.mileage &&
                      sellValidation.errors.mileage ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.mileage}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>

                  <Row className="m-3 mt-5">
                    <Col md={6} sm={6} xs={12}>
                      <lable>Fuel Type*</lable>

                      <Input
                        type="text"
                        name="fuelType"
                        id="fuelType"
                        className="form-control p-3"
                        placeholder="Petrol"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                        value={sellValidation.values.fuelType || ""}
                        invalid={
                          sellValidation.touched.fuelType &&
                          sellValidation.errors.fuelType
                            ? true
                            : false
                        }
                      />
                      {sellValidation.touched.fuelType &&
                      sellValidation.errors.fuelType ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.fuelType}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <lable>Selling Price*</lable>

                      <Input
                        type="text"
                        name="sellingPrice"
                        id="sellingPrice"
                        className="form-control p-3"
                        placeholder="Ex-GHc23,342,000"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                        value={sellValidation.values.sellingPrice || ""}
                        invalid={
                          sellValidation.touched.sellingPrice &&
                          sellValidation.errors.sellingPrice
                            ? true
                            : false
                        }
                      />
                      {sellValidation.touched.sellingPrice &&
                      sellValidation.errors.sellingPrice ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.sellingPrice}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="m-3 mt-5">
                    <Col md={12} sm={12} xs={12}>
                      <lable>Your Car Note*</lable>
                      <textarea
                        className="form-control p-3"
                        id="note"
                        name="note"
                        placeholder="Write something ..."
                        rows="3"
                        onChange={sellValidation.handleChange}
                        onBlur={sellValidation.handleBlur}
                      ></textarea>
                      {sellValidation.touched.note &&
                      sellValidation.errors.note ? (
                        <FormFeedback type="invalid">
                          {sellValidation.errors.note}
                        </FormFeedback>
                      ) : null}
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
    </>
  );
};

export default NavBar;
