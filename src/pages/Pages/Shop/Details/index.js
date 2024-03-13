import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { RiInstagramFill } from "react-icons/ri";
import { CSSTransition } from 'react-transition-group';
import Row1 from "./Row1";
import RelatedParts from "../../../../Components/Customer/common/Band/Slider/RelatedParts";
import RecentlyViewedParts from "../../../../Components/Customer/common/Band/Slider/RecentlyViewedParts";
import './style.css'

import { toast } from "react-hot-toast";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";

const ProductDescription = () => {
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    toast.success("Item added to cart!");
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      toast.success("Item added to favorites!");
    }
  };

  const shareUrl = "https://example.com/product";

  const instagramUrl = `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;

  const [mainImage, setMainImage] = useState(
    "https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-schematics-of-many-parts-of-a-car-image_2679107.jpg"
  );

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <>
      <div className="home">
        <div
          className="p-2 container"
          style={{ border: "none", height: "auto" }}
        >
          <Row className="row g-3 p-4">
            <Col style={{ backgroundColor: "" }} xxl={7} className="mt-5 mb-5">
              <div className="home-title">
                <div className="d-flex gap-3">
                  <div>
                    <h1 className=" fs-5" style={{ color: "#00d084" }}>
                      Steering Rack Details
                    </h1>
                  </div>
                </div>

                <h1
                  className="fw-bolder "
                  style={{ fontSize: "4rem", width: "max-content" }}
                >
                  Shop Vehicles Parts
                </h1>
                <div className="pilot">
                  <div className="pilot-left">
                    <div className="trustpilot">
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/trstpilot-logo.svg"
                        alt="img"
                        className="img-fluid"
                      ></img>
                      <span className="mt-2 fw-bolder">Trustpilot</span>
                      <div className="five-stars">
                        <img
                          src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/trustpilot-star.svg"
                          alt="img"
                          className="img-fluid"
                        ></img>
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

                  <div className="pilot-left">
                    <div className="trustpilot">
                      <img
                        src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/google-logo.svg"
                        alt="google"
                        className="img-fluid mt-3"
                      ></img>
                      <div className="five-stars">
                        <IoStar
                          style={{
                            color: "gold",
                            marginLeft: "0.1rem",
                          }}
                          className="p-1 fs-5"
                        />
                        <IoStar
                          style={{
                            color: "gold",
                            marginLeft: "0.1rem",
                          }}
                          className="p-1 fs-5"
                        />
                        <IoStar
                          style={{
                            color: "gold",
                            marginLeft: "0.1rem",
                          }}
                          className="p-1 fs-5"
                        />
                        <IoStar
                          style={{
                            color: "gold",
                            marginLeft: "0.1rem",
                          }}
                          className="p-1 fs-5"
                        />
                        <IoStar
                          style={{
                            color: "gold",
                            marginLeft: "0.1rem",
                          }}
                          className="p-1 fs-5"
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

              <div className="pilot">
                <div className="pilot-left">
                  <div className=""></div>
                  <div className="first-review mt-4">
                    {/* <Button
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
                    </Button> */}
                  </div>
                </div>
              </div>
            </Col>
            <Col xxl={5}>
              <img
                src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/product-dt-bannner-img.png"
                alt="car"
                className="mt-5 "
              ></img>
            </Col>
          </Row>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div className="container m-4">
          {/* <Row className="mt-5">
          <Col md={6}>
            <Card>
              <CardBody>
                <CardTitle tag="h5">Product Details</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Quantity
                </CardSubtitle>
                <Row>
                  <Col md={3}>
                    <Button
                      color="primary"
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity === 1}
                    >
                      -
                    </Button>
                  </Col>
                  <Col md={6}>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="form-control"
                    />
                  </Col>
                  <Col md={3}>
                    <Button
                      color="primary"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row> */}

          <div className="row g-3">
          <Col>
      <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px' }} className="p-2">
        <CSSTransition in={true} timeout={300} classNames="image-transition">
          <img src={mainImage} alt="steer" style={{ borderRadius: '12px' }} />
        </CSSTransition>
      </div>
      <div className="row g-3 p-2 d-flex justify-content-center gap-2">
        <Col
          style={{ borderRadius: '12px', cursor: 'pointer', boxShadow: 'none' }}
          className="p-2 card"
          onClick={() => handleImageClick('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/shop-big-01.png')}
        >
          <img
            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/shop-big-01.png"
            alt="steer"
            style={{ borderRadius: '12px' }}
          />
        </Col>
        <Col
          style={{ borderRadius: '12px', cursor: 'pointer', boxShadow: 'none' }}
          className="p-2 card"
          onClick={() => handleImageClick('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/shop-big-01.png')}
        >
          <img
            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/shop-big-01.png"
            alt="steer"
            style={{ borderRadius: '12px' }}
          />
        </Col>
        <Col
          style={{ borderRadius: '12px', cursor: 'pointer', boxShadow: 'none' }}
          className="p-2 card"
          onClick={() => handleImageClick('https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-schematics-of-many-parts-of-a-car-image_2679107.jpg')}
        >
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-schematics-of-many-parts-of-a-car-image_2679107.jpg"
            alt="steer"
            style={{ borderRadius: '12px' }}
          />
        </Col>
      </div>
    </Col>
            <Col>
              <div>
                <h3>
                  Steering system (steering wheel, steering column, power
                  steering pump)
                </h3>
                <p className="fw-lighter fs-5">
                  This is not an exhaustive list, but it covers many of the
                  major components found in a typical car.
                </p>

                <Row className="align-items-center mt-5">
                  <Col xs="auto">
                    <Button
                      style={{
                        backgroundColor: "#f3f3f3",
                        border: "1px solid transparent",
                        color: "black",
                      }}
                      onClick={decrement}
                      className="p-3"
                      disabled={quantity === 1}
                    >
                      -
                    </Button>
                  </Col>
                  <Col xs="auto">
                    <span style={{ margin: "0 10px" }}>{quantity}</span>
                  </Col>
                  <Col xs="auto">
                    <Button
                      style={{
                        backgroundColor: "#f3f3f3",
                        border: "1px solid transparent",
                        color: "black",
                      }}
                      onClick={increment}
                      className="p-3"
                    >
                      +
                    </Button>
                  </Col>
                  <Col xs="auto">
                    <Button
                      style={{
                        backgroundColor: "#00d084",
                        border: "1px solid transparent",
                        color: "black",
                        width: "max-content",
                      }}
                      onClick={handleAddToCart}
                      className="p-3 px-4"
                    >
                      Add to Cart
                    </Button>
                  </Col>
                  <Col xs="auto">
                    <Button
                      style={{
                        backgroundColor: "#f3f3f3",
                        border: "1px solid transparent",
                        color: isLiked ? "#00d084" : "black",
                        borderRadius: "50%",
                      }}
                      onClick={toggleLike}
                      className="p-3"
                    >
                      {isLiked ? <FaHeart /> : <FaRegHeart />}
                    </Button>
                  </Col>
                </Row>

                <div className="mt-5">
                  <hr style={{ border: "1px solid #dbdbdb" }} />
                </div>

                <div>
                  <p>
                    <b className="mx-2">SKU:</b>D32-5H23{" "}
                  </p>
                  <p>
                    <b className="mx-2">Category:</b>Category{" "}
                  </p>
                  <p>
                    <b className="mx-2">Tags:</b>Nissan, Steering, parts{" "}
                  </p>
                  <div className="d-flex justify-content align-items-center">
                    <div className="mx-2 fw-bolder">Share:</div>
                    <div className="d-flex">
                      <FacebookShareButton url={shareUrl}>
                        <Button
                          style={{
                            backgroundColor: "white",
                            border: "1px solid #e0e0e0",
                            color: "black",
                            borderRadius: "50%",
                          }}
                          className="p-3"
                        >
                          <CiFacebook style={{ color: "#00d084" }} />
                        </Button>
                      </FacebookShareButton>
                      <TwitterShareButton url={shareUrl}>
                        <Button
                          style={{
                            backgroundColor: "white",
                            border: "1px solid #e0e0e0",
                            color: "black",
                            borderRadius: "50%",
                          }}
                          className="p-3 mx-2"
                        >
                          <CiTwitter style={{ color: "#00d084" }} />
                        </Button>
                      </TwitterShareButton>
                      <RedditShareButton url={instagramUrl}>
                        <Button
                          style={{
                            backgroundColor: "white",
                            border: "1px solid #e0e0e0",
                            color: "black",
                            borderRadius: "50%",
                          }}
                          className="p-3 mx-2"
                        >
                          <RiInstagramFill style={{ color: "#00d084" }} />
                        </Button>
                      </RedditShareButton>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>

      <Row1 />

      <div className="container">
        <RelatedParts />
      </div>

      <div className="container">
        <RecentlyViewedParts />
      </div>
    </>
  );
};

export default ProductDescription;
