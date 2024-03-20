import { Col, Container, Row, Card, Spinner } from "reactstrap";
import StarRatings from "react-star-ratings";
// import FilterSelect from "../components/FilterSelect";
// import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import data from "../../../utils/Products";
// import ShopList from "../components/ShopList";
// import Banner from "../components/Banner/Banner";
// import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

import RangeFilter from "../../../Components/Filters/RangeFilter";
import { Button } from "reactstrap";
import { FaCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import "./style.css";
import RatingList from "./RatingComponent";
import AddtoCart from "../../../Components/Hooks/AddToCart";

const Row2 = () => {
  const products = data();

  console.log(products);

  const [filterList, setFilterList] = useState(
    products.filter((item) => item.category !== "")
  );
  //   useWindowScrollToTop();

  const options = [
    { value: "Food", label: "Food" },
    { value: "Accessories", label: "Accessories" },
    { value: "Wearables", label: "Wearables" },
    { value: "Gadgets", label: "Gadgets" },
    { value: "Beverages", label: "Beverages" },
    { value: "Frozen Foods", label: "Frozen Foods" },
    { value: "Grocery & Staples", label: "Grocery & Staples" },
    { value: "Meats & Seafood", label: "Meats & Seafood" },
    { value: "Household Needs", label: "Household Needs" },
    { value: "Breakfast & Dairy", label: "Breakfast & Dairy" },
  ];

  const brandOptions = [
    { value: "In Stock", label: "In Stock" },
    { value: "On Sale", label: "On Sale" },
  ];

  const statusOptions = [
    { value: "Nike", label: "Nike" },
    { value: "Jordans", label: "Jordans" },
    { value: "Adidas", label: "Adidas" },
    { value: "Peak", label: "Peak" },
  ];

  const leftStyle = {
    width: "100%",
    border: "",
    height: "200px", // Set the desired height
    backgroundImage:
      'url("https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg")',
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "7px",
  };

  const longStyle = {
    width: "100%",
    border: "",
    height: "62svh", // Set the desired height
    backgroundImage:
      'url("https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif")',
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "7px",
  };

  const [loading, setLoading] = useState(false);

  const CategoryItem = ({ title, count, isSelected, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleClick = () => {
      onClick(title);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    return (
      <div
        className="d-flex mt-3 align-items-center"
        style={{
          justifyContent: "space-between",
          cursor: "pointer",
          color: isHovered || isSelected ? "#fff" : "inherit",
          backgroundColor: isHovered || isSelected ? "black" : "transparent",
          padding: "0.5rem",
          borderRadius: "4px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          className="fw-bolder"
          style={{
            color: isHovered || isSelected ? "#fff" : "inherit",
            backgroundColor: isHovered || isSelected ? "black" : "transparent",
            padding: "0.5rem",
            borderRadius: "4px",
          }}
        >
          <FaCircle style={{ color: "#00d084" }} className="mx-2" /> {title}
        </div>
        <div className="fw-lighter">({count})</div>
      </div>
    );
  };

  const categories = [
    { title: "Car Servicing", count: 30 },
    { title: "Car Buying Advice", count: 30 },
    { title: "Car Rental", count: 30 },
    { title: "Driving", count: 30 },
    { title: "Hyndai", count: 30 },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (title) => {
    setSelectedCategory(title);
  };

  return (
    <Fragment>
      {loading ? (
        <>
          <div className="d-flex justify-content-center mt-5 align-items-center">
            <Spinner />
          </div>
        </>
      ) : (
        <section className="filter-bar w-100">
          <Container className="filter-bar-container p-1 fluid">
            <Row className="">
              <Col
                xl={4}
                style={{ border: "1px solid #e5e6ec", borderRadius: "10px" }}
                className="px-4 mb-5"
              >
                <Col
                  md={8}
                  className="mt-5 home p-4 w-100"
                  style={{ borderRadius: "10px" }}
                >
                  <h4 className="fw-bolder">Product Category</h4>
                  <div className="mt-4">
                    {categories.map((category, index) => (
                      <CategoryItem
                        key={index}
                        title={category.title}
                        count={category.count}
                        isSelected={category.title === selectedCategory}
                        onClick={handleCategoryClick}
                      />
                    ))}
                  </div>
                </Col>

                <Col>
                  <RangeFilter setFilterList={setFilterList} />
                </Col>
                <Col
                  md={8}
                  className="mt-5 home w-100 p-4"
                  style={{ borderRadius: "10px" }}
                >
                  <h4 className="fw-bolder">Product Ratings</h4>
                  {/* <CheckFilter
                  setFilterList={setFilterList}
                  options={statusOptions}
                /> */}
                <RatingList />
                </Col>
                <Col
                  md={8}
                  className="mt-5 mb-5 w-100"
                  style={{ borderRadius: "10px" }}
                >
                  <h4 className="fw-bolder">Recent Products</h4>
                  {/* <CheckFilter
                  setFilterList={setFilterList}
                  options={brandOptions}
                /> */}
                  <div>
                    <Link to="/shop-details" style={{ textDecoration: "none" }}>
                      <Card
                        style={{ padding: "0px", boxShadow: "none" }}
                        className="w-100"
                      >
                        <div className="d-flex mt-3">
                          <div className="fw-bolder">
                            <img
                              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/recent-prodect-img-01.png"
                              alt="img"
                            ></img>
                          </div>
                          <div className="fw-lighter mt-3">
                            <div className="fw-bolder">GHC 214.00</div>
                            <div>Steering Rack Advance Auto Parts.</div>
                          </div>
                        </div>
                      </Card>
                    </Link>

                    <Link to="/shop-details" style={{ textDecoration: "none" }}>
                      <Card
                        style={{ padding: "0px", boxShadow: "none" }}
                        className="w-100"
                      >
                        <div className="d-flex mt-3">
                          <div className="fw-bolder">
                            <img
                              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/recent-prodect-img-02.png"
                              alt="img"
                            ></img>
                          </div>
                          <div className="fw-lighter mt-3">
                            <div className="fw-bolder">GHC 214.00</div>
                            <div>New Oil Filter Fit For Ys400.</div>
                          </div>
                        </div>
                      </Card>
                    </Link>

                    <Link to="/shop-details" style={{ textDecoration: "none" }}>
                      <Card
                        style={{ padding: "0px", boxShadow: "none" }}
                        className="w-100"
                      >
                        <div className="d-flex mt-3">
                          <div className="fw-bolder">
                            <img
                              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/recent-prodect-img-03.png"
                              alt="img"
                            ></img>
                          </div>
                          <div className="fw-lighter mt-3">
                            <div className="fw-bolder">GHC 214.00</div>
                            <div>Tech master Carbon ceramic brakes.</div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                </Col>
                {/* <Col md={8} className="mt-2">
                <div style={longStyle}>
                
                </div>
              </Col> */}
              </Col>
              <Col xl={8} className="d-flex" style={{ flexWrap: "wrap" }}>
                <Row>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>

          
                </Row>
                <Row>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: ' Tech master New Brand Carbon ceramic brakes.', qty: 1})
                            }}
                          >s
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>

          
                </Row>
                <Row>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>

          
                </Row>
                <Row>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>
                  <div className="col">
                   
                      <div
                        className="p-2 card-border"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="">
                          <div
                            style={{ position: "relative" }}
                            className="d-flex justify-content-between mb-3"
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                borderRadius: "4px",
                              }}
                              className="p-1 text-light fw-bolder px-3"
                            >
                              -10%
                            </div>
                            <div
                              style={{
                                backgroundColor: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="p-1 text-light fw-bolder "
                              onClick={() => {
                                toast.success("Part Added to Wishlist");
                              }}
                            >
                              <CiHeart
                                style={{ color: "black" }}
                                className="fs-5 heart-part"
                              />
                            </div>
                          </div>
                          <img
                            src={
                              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/Product-01.png"
                            }
                            alt="suv"
                            className=""
                            style={{
                              borderRadius: "6px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>

                        <div className="text-center mt-4">
                          <Button
                            style={{
                              backgroundColor: "#00d084",
                              border: "none",
                              width: "max-content",
                            }}
                            className="w-50 p-2 text-dark fw-bolder"
                            onClick={() => {
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                toast.success("Part Added to Cart");
                              }, 3000);
                               AddtoCart({name: 'Steering system (steering wheel, steering column, power steering pump)', qty: 1})
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>

                        <div className="mt-5">
                        <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/shop-details"
                      className="card-border"
                    >
                          <h4 className="fs-5">
                            Tech master New Brand Carbon ceramic brakes.
                          </h4>
                          </Link>
                          <div className="fw-lighter">GHC 214.00</div>
                        </div>

                      </div>
                   
                  </div>

          
                </Row>
              
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </Fragment>
  );
};

export default Row2;
