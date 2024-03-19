import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import ImageSlider from "./Slider";
import IntSlider from "./IntSlider";
import VideoSlider from "./VideoSlider";
import ColorSlider from "./ColorSlider";
import { Button } from "reactstrap";
import { ReactComponent as Panelleft } from "../../../../assets/svg/panelLeft.svg";
import { ReactComponent as Panelright } from "../../../../assets/svg/panelRight.svg";
import { ReactComponent as VideoClip } from "../../../../assets/svg/videosclip.svg";
import { ReactComponent as Interior } from "../../../../assets/svg/interior.svg";
import { ReactComponent as Exterior } from "../../../../assets/svg/exterior.svg";
import { ReactComponent as Colors } from "../../../../assets/svg/colors.svg";
import { ReactComponent as Check } from "../../../../assets/svg/check.svg";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { toast } from "react-hot-toast";
import { Spinner } from "reactstrap";

function Index() {
  const [view, setView] = useState("exterior");

  const [showNumber, setShowNumber] = useState(false);

  const [formData, setFormData] = useState({
    name: "John Doe" || "",
    email: "john@gmail.com" || "",
    phone: "+233559690060" || "",
    message: "I have an old sendan like this , want meet and trade" || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, sending data to an API
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully");
      setFormData({})
    }, 3000);
  };

  return (
    <>
      <div className="mt-2 mb-5">
        <Row>
          <Col xxl={8}>
            <div>
              {view === "exterior" ? (
                <ImageSlider />
              ) : view === "interor" ? (
                <IntSlider />
              ) : view === "video" ? (
                <VideoSlider />
              ) : view === "colors" ? (
                <ColorSlider />
              ) : (
                <>
                  <p className="d-flex justify-content-center">Error Loading</p>
                </>
              )}

              {/* menu */}
              <div
                className="mt-3 d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div
                  className="mt-3 d-flex gap-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setView("exterior");
                  }}
                >
                  <Panelright />
                  <p style={{ color: view === "exterior" ? "#00d084" : "" }}>
                    <Exterior className="mx-2" />
                    Exterior (3)
                  </p>
                  <Panelleft />
                </div>
                <div
                  className="mt-3 d-flex gap-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setView("interor");
                  }}
                >
                  <Panelright />
                  <p style={{ color: view === "interor" ? "#00d084" : "" }}>
                    <Interior className="mx-2" /> Interior (15)
                  </p>
                  <Panelleft />
                </div>
                <div
                  className="mt-3 d-flex gap-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setView("video");
                  }}
                >
                  <Panelright />
                  <p style={{ color: view === "video" ? "#00d084" : "" }}>
                    {" "}
                    <VideoClip className="mx-2" />
                    Video Clip
                  </p>
                  <Panelleft />
                </div>
                <div
                  className="mt-3 d-flex gap-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setView("colors");
                  }}
                >
                  <Panelright />
                  <p style={{ color: view === "colors" ? "#00d084" : "" }}>
                    {" "}
                    <Colors className="mx-2" />
                    Colors
                  </p>
                  <Panelleft />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4>
                Car Info
                <img
                  src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                  alt="line"
                  width="50"
                  className="mx-2"
                ></img>
              </h4>
            </div>

            <div
              className="mt-3 d-flex"
              style={{ justifyContent: "space-between" }}
            >
              <div className="mt-3 d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/mileage.svg"
                    alt="img"
                  ></img>
                </div>
                <div>
                  <p className="fw-bolder">
                    25,100 miles
                    <p className="fw-lighter" style={{ color: "gray" }}>
                      Mileage
                    </p>
                  </p>
                </div>
              </div>
              <div className="mt-3 d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/engine.svg"
                    alt="img"
                  ></img>
                </div>
                <div>
                  <p className="fw-bolder">
                    22,231 cc
                    <p className="fw-lighter" style={{ color: "gray" }}>
                      Engine
                    </p>
                  </p>
                </div>
              </div>
              <div className="mt-3 d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/fuel.svg"
                    alt="img"
                  ></img>
                </div>
                <div>
                  <p className="fw-bolder">
                    Petrol + Gas
                    <p className="fw-lighter" style={{ color: "gray" }}>
                      Fuel Type
                    </p>
                  </p>
                </div>
              </div>
              <div className="mt-3 d-flex gap-2" style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/icon/condition.svg"
                    alt="img"
                  ></img>
                </div>
                <div>
                  <p className="fw-bolder">
                    Used Car
                    <p className="fw-lighter" style={{ color: "gray" }}>
                      Condition
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4>
                Key Features
                <img
                  src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                  alt="line"
                  width="50"
                  className="mx-2"
                ></img>
              </h4>
            </div>

            <div className="text-start">
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Premium Wheel
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Moonroof
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Premium Audio
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Navigation
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Front Heated Seats
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Premium Seat Material
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Bluetooth
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Premium Seat Material
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Front Heated Seats
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Remote Engine Start
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Blind Spot System
                  </div>
                  <div className="mt-2">
                    <Check className="mx-2" />
                    Multi-Zone Climate Control
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={4}>
            <div
              className="w-100 d-grid gap-2 mt-5 p-4"
              style={{ border: "1px dashed #e0e0e0", borderRadius: "10px" }}
            >
              {" "}
              <div className="text-center mt-2 mb-2">
                {/* img */}
                <img
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D"
                  alt="profile"
                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>
              <div className="text-center">
                <h4>Local Office in Ghana</h4>
                <h6 className="text-muted">AutoMobile Gh</h6>
                <p className="fw-bolder">Daniel James</p>
                <p><img src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1ec-1f1ed.svg" alt="flag" style={{width: '30px', height:'30px'}}></img></p>
                <p className="text-muted">English</p>
              </div>
              <Button
                className="btn btn-dark text-dark w-100 p-3 fw-bolder"
                style={{ backgroundColor: "#00d084", border: "none" }}
                onClick={() => {
                  setShowNumber(true);
                  if (showNumber) {
                    window.open("tel:+233559590050", "_self");
                  }
                }}
              >
                <BsTelephone className="mx-2" />
                {showNumber ? "+233559590050" : "  Show Number"}
              </Button>
              <Button
                className="btn btn-dark text-light w-100 p-3 fw-bolder"
                style={{
                  backgroundColor: "black",
                  border: "1px solid #e0e0e0",
                }}
                onClick={() => {
                  window.location.href = "mailto:mathiaslawson70@gmail.com";
                }}
              >
                <MdOutlineMailOutline className="mx-2" /> Email Now
              </Button>
              <Button
                className="btn btn-dark text-dark w-100 p-3 fw-bolder"
                style={{ backgroundColor: "#00d264", border: "none" }}
                onClick={() => {
                  window.open("https://wa.me/+233559690060", "_blank");
                }}
              >
                <FaWhatsapp className="mx-2" />
                Whatsapp
              </Button>
            </div>

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
                  <h3>To More Enquiry</h3>
                  <p className="fw-ligther">
                    If choose this car to contact easily with us.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-4">
                      <label htmlFor="name" className="form-label">
                        Name*
                      </label>
                      <input
                        type="text"
                        className="form-control p-3 "
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 mt-4">
                      <label htmlFor="email" className="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="form-control p-3"
                        id="email"
                        name="email"
                        placeholder="Ex-info@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 mt-4">
                      <label htmlFor="phone" className="form-label">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        className="form-control p-3"
                        id="phone"
                        name="phone"
                        placeholder="(+233) 000 000 000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 mt-4">
                      <label htmlFor="message" className="form-label">
                        Message*
                      </label>
                      <textarea
                        className="form-control p-3"
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="btn btn-dark text-dark w-100 p-3 fw-bolder"
                      style={{ backgroundColor: "#00d084", border: "none" }}
                      disabled={loading}
                    >
                      {loading ? (
                        <Spinner size={"sm"} />
                      ) : (
                        <LuSend className="mx-2" />
                      )}{" "}
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Index;
