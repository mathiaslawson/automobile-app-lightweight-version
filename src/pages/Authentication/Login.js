import React, { useEffect, useState } from "react";
import {
  Input,
  Label,
  Row,
  Button,
  FormFeedback,
  Container,
  Col,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Spinner,
} from "reactstrap";
import Logo from "../../Components/Logo";

import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';

import { Link } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import {
  loginUser,
  socialLogin,
  resetLoginFlag,
  loginActor,
} from "../../store/actions";

import logoLight from "../../assets/images/logo-light.png";

import withRouter from "../../Components/Common/withRouter";
import { createSelector } from "reselect";

const Login = (props) => {
  const dispatch = useDispatch();
  const selectLayoutState = (state) => state.Account;
  const selectLayoutProperties = createSelector(
    selectLayoutState,
    (layout) => ({
      // user: layout.user,
      errorMsg: layout.errorMsg,
      loading: layout.loading,
      error: layout.error,
    })
  );
  // Inside your component
  const {  errorMsg, error } = useSelector(selectLayoutProperties);

  const [userLogin, setUserLogin] = useState([]);
  const [passwordShow, setPasswordShow] = useState(false);

  const { user, dashboard } = useSelector((state) => ({
    user: state.Login.user,
    dashboard: state.Login.dashboard
  }));

  // useEffect(() => {
  //   if (user && user) {
  //     const updatedUserData =
  //       process.env.REACT_APP_DEFAULTAUTH === "firebase"
  //         ? user.multiFactor.user.email
  //         : user.user.email;
  //     setUserLogin({
  //       email: updatedUserData,
  //       password: user.user.confirm_password ? user.user.confirm_password : "",
  //     });
  //   }
  // }, [user]);

  // const validation = useFormik({
  //   // enableReinitialize : use this flag when initial values needs to be changed
  //   enableReinitialize: true,

  //   initialValues: {
  //     email: userLogin.email || "admin@themesbrand.com" || "",
  //     password: userLogin.password || "123456" || "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().required("Please Enter Your Email"),
  //     password: Yup.string().required("Please Enter Your Password"),
  //   }),
  //   onSubmit: (values) => {
  //     dispatch(loginUser(values, props.router.navigate));
  //   },
  // });

  const signIn = (type) => {
    dispatch(socialLogin(type, props.router.navigate));
  };

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //for facebook and google authentication
  const socialResponse = (type) => {
    signIn(type);
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(resetLoginFlag());
      }, 3000);
    }
  }, [dispatch, error]);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState({
    first_name: "John" || "",
    last_name: "Doe" || "",
    email: "john@gmail.com" || "",
    password: "0000",
    confirm: "",
  });

  const navigate = useNavigate();

  

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      first_name: "John" || "",
      last_name: "Doe" || "",
      email: "john@gmail.com" || "",
      password: "0000",
      confirm: "0000",
    },
    validationSchema: Yup.object({
      // Your validation schema
    }),

    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      setLoading(true);
      // Simulating asynchronous operation
      setTimeout(() => {
        setLoading(false);
        setLoggedIn(true);
        setAccount({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
        });
        dispatch(loginActor({ role, ...account }));
      }, 4000);
    },
  });

  

  useEffect(() => {
    console.log(user?.role, "user?.role");
    if (loggedIn && (user?.role === "sub" || user?.role === "mech" || user?.role === "deal")) {
      navigate("/user-management");
    } else if (loggedIn) {
    
      navigate(dashboard === true ? "/recieve-invoice" : "/brand-category");
    }
  }, [user, loggedIn, navigate]);

  const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

  const GradientBackground = styled.div`
    background: linear-gradient(135deg, #8bc6ec, #9face6);
    background-size: 200% 200%;
    animation: ${gradientAnimation} 10s ease infinite;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const CardAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-20px);
    opacity: 1;
  }
`;

  const StyledCard = styled(Card)`
    // animation: ${CardAnimation} 1s ease-in-out;
    // width: 100%;
  `;

  const FormAnimation = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

  const StyledForm = styled(Form)`
    animation: ${FormAnimation} 1s ease-in-out;
  `;

  const [role, setRole] = useState("customer");

  document.title = "Automobile Gh Admin";
  return (
    <React.Fragment>
      <div className="css-selector mt-5" style={{backgroundColor: '#f2f2f7'}} >
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Row className="">
            <Col
              xl={{ size: 12, offset: 1 }}
              className=""
              style={{ width: "100%" }}
            >
              <StyledCard>
                <CardHeader style={{ backgroundColor: "transparent" }}>
                  <div className="d-flex justify-content-center mt-1 mb-3">
                    <Logo />
                  </div>
                  <Nav
                    tabs
                    style={{ backgroundColor: "transparent" }}
                    className="justify-content-center"
                  >
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => toggle("1")}
                        style={{ borderRadius: "0px" }}
                      >
                        Login
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => toggle("2")}
                        style={{ borderRadius: "0px" }}
                      >
                        Register
                      </NavLink>
                    </NavItem>
                  </Nav>
                  {/* <div className="text-center mt-2">
                  <p>Login as</p>
                </div> */}
                  <div className="d-flex hstack justify-content-center mt-3">
                    <div className="d-flex justify-content-around mt-3">
                      <button
                        className="m-1 p-3"
                        style={{
                          width: "max-content",
                          height: "max-content",
                          borderRadius: "10px",
                          backgroundColor: role === "customer" ? "#8b3af8" : "",
                          border:
                            role === "customer" ? "3px solid black" : "none",
                        }}
                        onClick={() => {
                          setRole("customer");
                        }}
                      >
                        <i className="bx bx-user"></i>
                        <p className="text-center">Customer</p>
                      </button>
                      <button
                        className="m-1 p-3"
                        style={{
                          width: "max-content",
                          height: "max-content",
                          borderRadius: "10px",
                          backgroundColor: role === "deal" ? "#8b3af8" : "",
                          border: role === "deal" ? "3px solid black" : "none",
                        }}
                        onClick={() => {
                          setRole("deal");
                        }}
                      >
                        <i className="bx bxs-car"></i>
                        <p className="text-center">Car Dealer</p>
                      </button>
                      <button
                        className="m-1 p-3"
                        style={{
                          width: "max-content",
                          height: "max-content",
                          borderRadius: "10px",
                          backgroundColor: role === "sub" ? "#8b3af8" : "",
                          border: role === "sub" ? "3px solid black" : "none",
                        }}
                        onClick={() => {
                          setRole("sub");
                        }}
                      >
                        <i className="bx bx-layer"></i>
                        <p className="text-center">Sub Dealer</p>
                      </button>
                      <button
                        className="m-1 p-3"
                        style={{
                          width: "max-content",
                          height: "max-content",
                          borderRadius: "10px",
                          backgroundColor: role === "mech" ? "#8b3af8" : "",
                          border: role === "mech" ? "3px solid black" : "none",
                        }}
                        onClick={() => {
                          setRole("mech");
                        }}
                      >
                        <i className="bx bxs-car-mechanic"></i>
                        <p className="text-center">Mechanic</p>
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
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
                          <Col md={6} sm={6} xs={12}>
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
                                validation.touched.email &&
                                validation.errors.email
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.email &&
                            validation.errors.email ? (
                              <FormFeedback type="invalid">
                                {validation.errors.email}
                              </FormFeedback>
                            ) : null}
                          </Col>

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
                        </Row>

                        <div className="m-4">
                          <Button
                            className="w-100 p-3 mt-3"
                            style={{
                              backgroundColor: "#8b3af8",
                              color: "black",
                              border: "none",
                              borderRadius: "5px",
                            }}
                            type="submit"
                            disabled={loading}
                          >
                            {loading && (
                              <Spinner size={"sm"} className="mx-2" />
                            )}
                            Login
                          </Button>
                        </div>
                      </form>

                      {/* <div className="text-center mt-4 mb-4 d-flex justify-content-center gap-4">
                <div
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "50%",
                    width: "51px",
                    height: "51px",
                  }}
                  className="p-2 btn btn-light"
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
              </div> */}
                    </TabPane>
                    <TabPane tabId="2">
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
                                validation.touched.email &&
                                validation.errors.email
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.email &&
                            validation.errors.email ? (
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
                              backgroundColor: "#8b3af8",
                              color: "black",
                              border: "none",
                              borderRadius: "5px",
                            }}
                            type="submit"
                            disabled={loading}
                          >
                            {loading && (
                              <Spinner size={"sm"} className="mx-2" />
                            )}
                            Register
                          </Button>
                        </div>
                      </form>
                      <div className="text-center mt-5">
                        <p className=" text-muted">
                          By signing up you agree to the{" "}
                          <b>'terms & conditions'</b>
                        </p>
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </StyledCard>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);
