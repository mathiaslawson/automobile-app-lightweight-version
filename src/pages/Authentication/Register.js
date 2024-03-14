import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback, Button, Spinner } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// action
import { registerUser, apiError, resetRegisterFlag } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

//import images 
import logoLight from "../../assets/images/logo-light.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { createSelector } from "reselect";

const Register = () => {
    const history = useNavigate();
    const dispatch = useDispatch();


    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
        const day = String(today.getDate()).padStart(2, "0");
    
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      };


    const [passwordMatch, setPasswordMatch] = useState(true);

    const citiesInGhana = [
        "Dealer",
        "Subdealer",
        "Mechanic",
      
      ];
    
      const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
    
        initialValues: {
          email: "",
          first_name: "",
          last_name: "",
          password: "",
          confirm_password: "",
          tenant_name: "",
          contact_name: "",
          contact_email: "",
          contact_phone: "",
          address_line1: "",
          address_line2: "",
          city: "",
          state_province: "",
          postal_code: "",
          country: "",
          website_url: "",
          registration_date: getCurrentDate(),
          subscription_type: "Standard",
          username: "",
          phone: "",
          tenant_type: "",
          contact_person: "",
          address: "",
          insurance_provider: "",
          insurenace_policy_number: "",
          dealership_license_number: "",
          dealership_name: "",
          
        },
        validationSchema: Yup.object({
          email: Yup.string().required("Please Enter Your Email"),
          first_name: Yup.string().required("Please Enter Your Username"),
          last_name: Yup.string().required("Please Enter Your Last Name"),
    
          tenant_name: Yup.string().required("Please Enter Business Name"),
          dealership_license_number: Yup.string().required("Please Enter Dealer Liscence Number"),
          dealership_name: Yup.string().required("Please Enter Dealer Name"),
          contact_name: Yup.string().required("Please Enter Contact Name"),
          contact_email: Yup.string().required("Please Enter Contact Email"),
          contact_phone: Yup.string().required("Please Enter Contact Phone"),
          insurenace_policy_number: Yup.string().required("Please Enter Insurance Provider"),
          insurance_provider: Yup.string().required("Please Enter Insurance Policy Number"),
          address: Yup.string().required("Please Enter Address"),
          contact_person: Yup.string().required("Please Enter Contact Person Name"),
          password: Yup.string().required("Please Enter Password"),
          confirm_password: Yup.string().required("Please Enter confirm password"),
          tenant_type: Yup.string().required("Please Select Account type"),
          // contact_email: Yup.string()
          //   .email("Invalid email address")
          //   .required("Please Enter Contact Email"),
          // contact_phone: Yup.string().required("Please Enter Contact Phone"),
          address_line1: Yup.string().required("Please Enter Address "),
          // address_line2: Yup.string(),
          city: Yup.string().required("Please Enter City"),
          // state_province: Yup.string().required("Please Enter State/Province"),
          // postal_code: Yup.string().required("Please Enter Postal Code"),
          // country: Yup.string().required("Please Enter Country"),
          // website_url: Yup.string()
          //   .url("Invalid URL format")
          //   .required("Please Enter Website URL"),
          // registration_date: Yup.date().required("Please Enter Registration Date"),
          subscription_type: Yup.string().required(
            "Please Select Subscription Type"
          ),
          username: Yup.string().required("Please Enter Username"),
          phone: Yup.string().required("Please Enter Phone"),
          last_name: Yup.string().required("Please Enter Last Name"),
        }),
    
        onSubmit: (values) => {
          const user = {
            tenant: {
              tenant_name: values.tenant_name,
              contact_name: values.contact_name,
              contact_email: values.contact_email,
              contact_phone: values.contact_phone,
              address_line1: values.address_line1,
              address_line2: values.address_line2,
              city: values.city,
              state_province: values.state_province,
              postal_code: values.postal_code,
              country: values.country,
              website_url: values.website_url,
              registration_date: values.registration_date,
              subscription_type: values.subscription_type,
            },
            account: {
              username: values.username,
              email: values.email,
              phone: values.phone,
              first_name: values.first_name,
              last_name: values.last_name,
              password: values.password,
            },
          };
    
          console.log(user);
    
          if (values.password === values.confirm_password) {
            dispatch(registerUser(user));
          } else {
            setPasswordMatch(false);
          }
        },
      });
    
      const { error, registrationError, success, loading } = useSelector(
        (state) => ({
          registrationError: state.Account.registrationError,
          success: state.Account.success,
          error: state.Account.error,
          loading: state.Account.loading,
        })
      );
    const selectLayoutState = (state) => state.Account;
    const registerData = createSelector(
      selectLayoutState,
      (accountState) => ({
        registrationError: accountState.registrationError,
        success: accountState.success,
        error: accountState.error
      })
    );

  // Inside your component
 

    useEffect(() => {
        dispatch(apiError(""));
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            setTimeout(() => history("/login"), 3000);
        }

        setTimeout(() => {
            dispatch(resetRegisterFlag());
        }, 3000);

    }, [dispatch, success, error, history]);

    document.title = "Basic SignUp | Velzon - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <Link to="/home" className="d-inline-block auth-logo">
                                            {/* <img src={logoLight} alt="" height="20" /> */}
                                        </Link>
                                    </div>
                                    {/* <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p> */}
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={9} lg={6} xl={6}>
                                <Card className="mt-4">

                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Create New Account</h5>
                                            {/* <p className="text-muted">Get your free velzon account now</p> */}
                                        </div>
                                        <div className="p-2 mt-4">
                                        <Form
                            onSubmit={(e) => {
                              e.preventDefault();
                              validation.handleSubmit();
                              return false;
                            }}
                            className="needs-validation"
                            action="#"
                          >
                            <div className="mt-3 mb-3">
                              <p className="text-muted fw-bolder">
                                Dealer Information
                              </p>
                            </div>

                            <Row>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Dealer Name{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="tenant_name"
                                    name="tenant_name"
                                    className="form-control"
                                    placeholder="Enter Business Name"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.tenant_name || ""}
                                    invalid={
                                      validation.touched.tenant_name &&
                                      validation.errors.tenant_name
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.tenant_name &&
                                  validation.errors.tenant_name ? (
                                    <FormFeedback type="invalid">
                                      <div>{validation.errors.tenant_name}</div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>


                              <Col>
                                <div className="mb-3">
                                  <Label htmlFor="city" className="form-label">
                                    Dealer Type <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="tenant_type"
                                    name="tenant_type"
                                    className="form-control"
                                    type="select"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.tenant_type || ""}
                                    invalid={
                                      validation.touched.tenant_type &&
                                      validation.errors.tenant_type
                                        ? true
                                        : false
                                    }
                                  >
                                    <option value="" disabled>
                                      Select Account Type
                                    </option>
                                    {citiesInGhana.map((tenant_type, index) => (
                                      <option key={index} value={tenant_type}>
                                        {tenant_type}
                                      </option>
                                    ))}
                                  </Input>
                                  {validation.touched.tenant_type &&
                                  validation.errors.tenant_type ? (
                                    <FormFeedback type="invalid">
                                      <div>{validation.errors.tenant_type}</div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>

                          
                            <Row>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Contact Person{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="contact_person"
                                    name="contact_person"
                                    className="form-control"
                                    placeholder="Enter Contact Person"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.contact_person || ""}
                                    invalid={
                                      validation.touched.contact_person &&
                                      validation.errors.contact_person
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.contact_person &&
                                  validation.errors.contact_person ? (
                                    <FormFeedback type="invalid">
                                      <div>{validation.errors.contact_person}</div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>


                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Contact Email{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="contact_email"
                                    name="contact_email"
                                    className="form-control"
                                    placeholder="Enter Contact Email"
                                    type="email"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.contact_email || ""}
                                    invalid={
                                      validation.touched.contact_email &&
                                      validation.errors.contact_email
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.contact_email &&
                                  validation.errors.contact_email ? (
                                    <FormFeedback type="invalid">
                                      <div>{validation.errors.contact_email}</div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>
                          
                            <Row>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Contact Phone{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="contact_phone"
                                    name="contact_phone"
                                    className="form-control"
                                    placeholder="Enter Contact Email"
                                    type="email"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.contact_phone || ""}
                                    invalid={
                                      validation.touched.contact_phone &&
                                      validation.errors.contact_phone
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.contact_phone &&
                                  validation.errors.contact_phone ? (
                                    <FormFeedback type="invalid">
                                      <div>{validation.errors.contact_phone}</div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>

                            {/* <Row>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Address{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="address"
                                    name="address"
                                    className="form-control"
                                    placeholder="P O BOX 12, Accra, Independence Square"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.address || ""
                                    }
                                    invalid={
                                      validation.touched.address &&
                                      validation.errors.address
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.address &&
                                  validation.errors.address ? (
                                    <FormFeedback type="invalid">
                                      <div>
                                        {validation.errors.address}
                                      </div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row> */}


                            <Row>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Insurance Provider{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="insureance_provider"
                                    name="address_line1"
                                    className="form-control"
                                    placeholder="Enter Insurance Provider"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.insurance_provider || ""
                                    }
                                    invalid={
                                      validation.touched.insurance_provider &&
                                      validation.errors.insurance_provider
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.insurance_provider &&
                                  validation.errors.insurance_provider ? (
                                    <FormFeedback type="invalid">
                                      <div>
                                        {validation.errors.insurance_provider}
                                      </div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Insurance Policy Number{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="insurenace_policy_number"
                                    name="insurenace_policy_number"
                                    className="form-control"
                                    placeholder="Enter Insurance Policy Number"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.insurenace_policy_number || ""
                                    }
                                    invalid={
                                      validation.touched.insurenace_policy_number &&
                                      validation.errors.insurenace_policy_number
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.insurenace_policy_number &&
                                  validation.errors.insurenace_policy_number ? (
                                    <FormFeedback type="invalid">
                                      <div>
                                        {validation.errors.insurenace_policy_number}
                                      </div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Address{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="address"
                                    name="address"
                                    className="form-control"
                                    placeholder="P O BOX 12, Accra, Independence Square"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.address || ""
                                    }
                                    invalid={
                                      validation.touched.address &&
                                      validation.errors.address
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.address &&
                                  validation.errors.address ? (
                                    <FormFeedback type="invalid">
                                      <div>
                                        {validation.errors.address}
                                      </div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>


                            <Row>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                     Dealership Name{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="dealership_name"
                                    name="dealership_name"
                                    className="form-control"
                                    placeholder="Enter Dealership Name"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.dealership_name || ""
                                    }
                                    invalid={
                                      validation.touched.dealership_name &&
                                      validation.errors.dealership_name
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.dealership_name &&
                                  validation.errors.dealership_name ? (
                                    <FormFeedback type="invalid">
                                      <div>
                                        {validation.errors.dealership_name}
                                      </div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>

                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Dealership Liscense Number{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="dealership_license_number"
                                    name="dealership_license_number"
                                    className="form-control"
                                    placeholder="Enter Dealership Liscense Number"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.dealership_license_number || ""
                                    }
                                    invalid={
                                      validation.touched.dealership_license_number &&
                                      validation.errors.dealership_license_number
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.dealership_license_number &&
                                  validation.errors.dealership_license_number ? (
                                    <FormFeedback type="invalid">
                                      <div>
                                        {validation.errors.dealership_license_number}
                                      </div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>


                            


                         


                           



                            {/* <Row>
                              <Col>
                                <div className="mb-3">
                                  <Label htmlFor="city" className="form-label">
                                    City <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="city"
                                    name="city"
                                    className="form-control"
                                    type="select"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.city || ""}
                                    invalid={
                                      validation.touched.city &&
                                      validation.errors.city
                                        ? true
                                        : false
                                    }
                                  >
                                    <option value="" disabled>
                                      Select City
                                    </option>
                                    {citiesInGhana.map((city, index) => (
                                      <option key={index} value={city}>
                                        {city}
                                      </option>
                                    ))}
                                  </Input>
                                  {validation.touched.city &&
                                  validation.errors.city ? (
                                    <FormFeedback type="invalid">
                                      <div>{validation.errors.city}</div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row> */}
                            <Row>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Website URL{" "}
                                  </Label>
                                  <Input
                                    id="website_url"
                                    name="website_url"
                                    className="form-control"
                                    placeholder="https://mywebsite.com"
                                    type="url"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.website_url || ""}
                                    invalid={
                                      validation.touched.website_url &&
                                      validation.errors.website_url
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.website_url &&
                                  validation.errors.website_url ? (
                                    <FormFeedback type="invalid">
                                      <div>{validation.errors.website_url}</div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>


                            <div className="mt-3 mb-3">
                              <p className="text-muted fw-bolder">
                                Personal Information
                              </p>
                            </div>

                            <Row>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="username"
                                    className="form-label"
                                  >
                                    First Name{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    name="first_name"
                                    id="first_name"
                                    type="text"
                                    placeholder="Enter First Name"
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
                                      <div>{validation.errors.first_name}</div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="username"
                                    className="form-label"
                                  >
                                    Last Name{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    name="last_name"
                                    id="last_name"
                                    type="text"
                                    placeholder="Enter Last Name"
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
                                      <div>{validation.errors.last_name}</div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>

<Row>
<Col>
                              {" "}
                              <div className="mb-3">
                                <Label
                                  htmlFor="useremail"
                                  className="form-label"
                                >
                                  Username{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                  id="username"
                                  name="username"
                                  className="form-control"
                                  placeholder=""
                                  type="text"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.username || ""}
                                  invalid={
                                    validation.touched.username &&
                                    validation.errors.username
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.username &&
                                validation.errors.username ? (
                                  <FormFeedback type="invalid">
                                    <div>{validation.errors.username}</div>
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </Col>


                            <Col>
                              {" "}
                              <div className="mb-3">
                                <Label
                                  htmlFor="useremail"
                                  className="form-label"
                                >
                                  Date of Birth{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                  id="date_of_birth"
                                  name="date_of_birth"
                                  className="form-control"
                                  placeholder=""
                                  type="text"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.date_of_birth || ""}
                                  invalid={
                                    validation.touched.date_of_birth &&
                                    validation.errors.date_of_birth
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.date_of_birth &&
                                validation.errors.date_of_birth ? (
                                  <FormFeedback type="invalid">
                                    <div>{validation.errors.date_of_birth}</div>
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </Col>


</Row>
                           
                            <Row>
                              <Col>
                                {" "}
                                <div className="mb-3">
                                  <Label
                                    htmlFor="username"
                                    className="form-label"
                                  >
                                    Phone Number{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    name="phone"
                                    id="phone"
                                    type="text"
                                    placeholder="0269313257"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.phone || ""}
                                    invalid={
                                      validation.touched.phone &&
                                      validation.errors.phone
                                        ? true
                                        : false
                                    }
                                  />
                                  {validation.touched.phone &&
                                  validation.errors.phone ? (
                                    <FormFeedback type="invalid">
                                      <div>{validation.errors.phone}</div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>


                              <Col>
                              {" "}
                              <div className="mb-3">
                                <Label
                                  htmlFor="useremail"
                                  className="form-label"
                                >
                                  Email <span className="text-danger">*</span>
                                </Label>
                                <Input
                                  id="email"
                                  name="email"
                                  className="form-control"
                                  placeholder="test@gmail.com"
                                  type="email"
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
                                    <div>{validation.errors.email}</div>
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                            </Row>


                            <Row>
                          


                            <Col>
                                <div className="mb-3">
                                  <Label
                                    htmlFor="password"
                                    className="form-label"
                                  >
                                    Password{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    // placeholder="Enter password"
                                    type="password"
                                    onChange={(e) => {
                                      validation.handleChange(e);
                                      if (
                                        e.target.value ===
                                        validation.values.confirm_password
                                      ) {
                                        setPasswordMatch(true);
                                      } else {
                                        setPasswordMatch(false);
                                      }
                                    }}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.password || ""}
                                    invalid={
                                      validation.touched.password &&
                                      (validation.errors.password ||
                                        !passwordMatch)
                                    }
                                  />
                                  {validation.touched.password &&
                                  (validation.errors.password ||
                                    !passwordMatch) ? (
                                    <FormFeedback type="invalid">
                                      <div>
                                        {validation.errors.password ||
                                          "Password and Confirm Password must match"}
                                      </div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>

                          

                            <Row>
                           

                              <Col>
                                <div className="mb-3">
                                  <Label
                                    htmlFor="confirm_password"
                                    className="form-label"
                                  >
                                    Confirm Password{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    // placeholder="Confirm Password"
                                    onChange={(e) => {
                                      validation.handleChange(e);
                                      if (
                                        e.target.value ===
                                        validation.values.password
                                      ) {
                                        setPasswordMatch(true);
                                      } else {
                                        setPasswordMatch(false);
                                      }
                                    }}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.confirm_password || ""
                                    }
                                    invalid={
                                      validation.touched.confirm_password &&
                                      (validation.errors.confirm_password ||
                                        !passwordMatch)
                                    }
                                  />
                                  {validation.touched.confirm_password &&
                                  (validation.errors.confirm_password ||
                                    !passwordMatch) ? (
                                    <FormFeedback type="invalid">
                                      <div>
                                        {validation.errors.confirm_password ||
                                          "Password and Confirm Password must match"}
                                      </div>
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>


                            
                         
                           
                            <Row></Row>

                            <Link
                              onClick={() => {
                                // toggleSignIn();
                              }}
                              className="text-dark"
                            >
                              <p className="">
                                Already have an account ?<strong> Login</strong>
                              </p>
                            </Link>

                            <div className="mt-2 mb-5">
                              <button
                                className="btn  w-100 fw-bolder"
                                type="submit"
                                disabled={error ? null : loading}
                                style={{
                                  backgroundColor: "#322675",
                                  color: "white",
                                }}
                              >
                                {error ? null : loading ? (
                                  <Spinner size="sm" className="me-2">
                                    {" "}
                                    Loading...{" "}
                                  </Spinner>
                                ) : null}
                                Register
                              </button>
                            </div>
                          </Form>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-4 text-center">
                                    <p className="mb-0">Already have an account ? <Link to="/login" className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default Register;
