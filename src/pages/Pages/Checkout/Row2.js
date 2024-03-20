import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import img from "./img.png";
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

function Row2() {
  const [method, setMethod] = useState("pal");
  const navigate = useNavigate()

  return (
    <>
      <div className="container">
        <Row className="mt-5 mb-5">
          <Col>
            {" "}
            <div className="mt-4">
              <div
                style={{
                  background:
                    "linear-gradient(30deg, #ebd3d3, #e8edef, #a8dcbe, #becdd5)",
                  borderRadius: "10px",
                }}
                className="p-2 py-4"
              >
                <div className="mx-3 p-4">
                  <h3>Billing Information</h3>
                  {/* <p className="fw-ligther">
                    If choose this car to contact easily with us.
                  </p> */}

                  <form>
                    <div className="mb-3 mt-4 ">
                      <label
                     
                        className="form-label fw-lighter"
                      >
                        Full Name*
                      </label>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="John Doe"
                      />
                    </div>
                    <Row>
                      <div className="mb-3 mt-4 col-xl-6">
                        <label
                       
                          className="form-label fw-lighter"
                        >
                          Phone*
                        </label>
                        <input
                          type="email"
                          className="form-control p-3"
                          id="exampleFormControlInput1"
                          placeholder="Ex- +800-13* ** ***"
                        />
                      </div>
                      <div className="mb-3 mt-4 col-xl-6">
                        <label
                       
                          className="form-label fw-lighter"
                        >
                          Email (Optional)*
                        </label>
                        <input
                          type="email"
                          className="form-control p-3"
                          id="exampleFormControlInput1"
                          placeholder="Ex- info@gmail.com"
                        />
                      </div>
                    </Row>

                    <div className="mb-3 mt-4">
                      <label
                     
                        className="form-label fw-lighter"
                      >
                        Address*
                      </label>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Osu, Accra"
                      />
                    </div>

                    <Row>
                      <div className="mb-3 mt-4 col-xl-6">
                        <label
                       
                          className="form-label fw-lighter"
                        >
                          Street Address*
                        </label>
                        <input
                          type="email"
                          className="form-control p-3"
                          id="exampleFormControlInput1"
                          placeholder="(+233) 000 000 000"
                        />
                      </div>
                      <div className="mb-3 mt-4 col-xl-6">
                        <label
                       
                          className="form-label fw-lighter"
                        >
                          Postal Code*
                        </label>
                        <input
                          type="email"
                          className="form-control p-3"
                          id="exampleFormControlInput1"
                          placeholder="(+233) 000 000 000"
                        />
                      </div>
                    </Row>

                    <div className="mb-3 mt-4 ">
                      <label
                     
                        className="form-label fw-lighter"
                      >
                        Short Notes*
                      </label>
                      <textarea
                        className="form-control p-3"
                        id="exampleFormControlTextarea1"
                        placeholder="Write something ..."
                        rows="3"
                      ></textarea>
                    </div>

                    <Button
                      className="btn btn-dark text-dark w-100 p-3 fw-bolder"
                      style={{ backgroundColor: "#00d084", border: "none" }}
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="mt-4">
              <div
                style={{
                  background:
                    "linear-gradient(30deg, #ebd3d3, #e8edef, #a8dcbe, #becdd5)",
                  borderRadius: "10px",
                }}
                className="p-2 py-4"
              >
                <div className="mx-3 p-4">
                  <h3 className="fw-bolder">Order Summary</h3>
                  {/* <p className="fw-ligther">
                    If choose this car to contact easily with us.
                  </p> */}

                  <Col
                    md={8}
                    className="mt-5 mb-5 w-100"
                    style={{ borderRadius: "10px" }}
                  >
                    {/* <CheckFilter
                  setFilterList={setFilterList}
                  options={brandOptions}
                /> */}
                    <div className="w-100">
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
                                backgroundColor: "white",
                                color: "black",
                                border: "none",
                              }}
                            >
                              <p className="fw-bolder">-</p>
                            </Button>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                              }}
                              className="fw-bolder p-2 px-3"
                            >
                              01
                            </div>
                            <Button
                              style={{
                                backgroundColor: "white",
                                color: "black",
                                border: "none",
                              }}
                            >
                              <p className="fw-bolder">+</p>
                            </Button>
                          </div>
                        </div>
                        <div className="mx-5" style={{ color: "red" }}>
                          X
                        </div>
                      </div>
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
                                backgroundColor: "white",
                                color: "black",
                                border: "none",
                              }}
                            >
                              <p className="fw-bolder">-</p>
                            </Button>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                              }}
                              className="fw-bolder p-2 px-3"
                            >
                              01
                            </div>
                            <Button
                              style={{
                                backgroundColor: "white",
                                color: "black",
                                border: "none",
                              }}
                            >
                              <p className="fw-bolder">+</p>
                            </Button>
                          </div>
                        </div>
                        <div className="mx-5" style={{ color: "red" }}>
                          X
                        </div>
                      </div>
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
                                backgroundColor: "white",
                                color: "black",
                                border: "none",
                              }}
                            >
                              <p className="fw-bolder">-</p>
                            </Button>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                              }}
                              className="fw-bolder p-2 px-3"
                            >
                              01
                            </div>
                            <Button
                              style={{
                                backgroundColor: "white",
                                color: "black",
                                border: "none",
                              }}
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
                        <h6 className="fw-bolder">Select Payment Method</h6>
                      </div>
                      <div className="d-flex gap-2">
                        <div
                          className="card p-4"
                          style={{
                            boxShadow: "none",
                            border: method === "pal" ? "1px solid #00d084" : "",
                          }}
                          onClick={() => {
                            setMethod("pal");
                          }}
                        >
                          <div className="text-center">
                            <img
                              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/PayPal.svg"
                              alt="paypal"
                              width="50"
                            ></img>
                          </div>
                        </div>
                        <div
                          className="card p-4"
                          style={{
                            boxShadow: "none",
                            border:
                              method === "stripe" ? "1px solid #00d084" : "",
                          }}
                          onClick={() => {
                            setMethod("stripe");
                          }}
                        >
                          <div className="text-center">
                            <img
                              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/Stripe.svg"
                              alt="paypal"
                              width="50"
                            ></img>
                          </div>
                        </div>
                        <div
                          className="card p-4"
                          style={{
                            boxShadow: "none",
                            border:
                              method === "offline" ? "1px solid #00d084" : "",
                          }}
                          onClick={() => {
                            setMethod("offline");
                          }}
                        >
                          <div className="text-center">
                            <img
                              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/Offline.svg"
                              alt="paypal"
                              width="50"
                            ></img>
                          </div>
                        </div>
                      </div>

                      {
                        <div
                          className="mt-3"
                          style={{
                            display: method === "stripe" ? "" : "none",
                          }}
                        >
                          <form>
                            <div className="mb-3 mt-4 col-xl-12">
                              <label
                             
                                className="form-label fw-lighter"
                              >
                                Card Number
                              </label>
                              <input
                                type="email"
                                className="form-control p-3"
                                id="exampleFormControlInput1"
                                placeholder="1234 1234 1234 1234"
                              />
                            </div>

                            <Row>
                              <div className="mb-3 mt-4 col-xl-6">
                                <label
                               
                                  className="form-label fw-lighter"
                                >
                                  Expiry
                                </label>
                                <input
                                  type="email"
                                  className="form-control p-3"
                                  id="exampleFormControlInput1"
                                  placeholder="MM/YY"
                                />
                              </div>
                              <div className="mb-3 mt-4 col-xl-6">
                                <label
                               
                                  className="form-label fw-lighter"
                                >
                                  CVC
                                </label>
                                <input
                                  type="email"
                                  className="form-control p-3"
                                  id="exampleFormControlInput1"
                                  placeholder="CVC"
                                />
                              </div>
                            </Row>
                          </form>
                        </div>
                      }
                      <div className="mt-3">
                        <Button
                          className="w-100 p-3 fw-bolder"
                          style={{
                            backgroundColor: "#00d084",
                            color: "black",
                            border: "none",
                          }}
                          onClick={()=>{
                            toast.success("Order Place Successfully, Check your Dashbord to view purchases")
                            navigate('/purchases')
                          }}
                        >
                          Place Order
                        </Button>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Row2;
