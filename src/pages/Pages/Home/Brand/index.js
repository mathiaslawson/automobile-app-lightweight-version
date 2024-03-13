import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Brand.css";
import {Link} from 'react-router-dom'

const Brand = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  const brands = [
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/suzuki.svg",
      alt: "Suzuki",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/bmw.svg",
      alt: "BMW",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/toyota.svg",
      alt: "Toyota",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/tesla.svg",
      alt: "Tesla",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/honda.svg",
      alt: "Honda",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/mazda.svg",
      alt: "Mazda",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/suzuki.svg",
      alt: "Suzuki",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/bmw.svg",
      alt: "BMW",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/toyota.svg",
      alt: "Toyota",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/tesla.svg",
      alt: "Tesla",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/honda.svg",
      alt: "Honda",
    },
    {
      image:
        "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/mazda.svg",
      alt: "Mazda",
    },
  ];

  return (
    <div className="d-flex justify-content-center">
      <div data-aos="fade-in" className="brands mb-5">
        <div className="horizontal-grid mt-5">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item m-3">
              <div
                className="p-5 home"
                style={{
                  width: "max-content",
                  height: "auto",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <div className="brand-container">
                  <img
                    src={brand.image}
                    alt={brand.alt}
                    width="100"
                    height="100"
                  />
                  <img
                    src={
                      "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/bmw-car.svg"
                    }
                    alt="suzuki"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      
        <div className="brand-cat mb-5 mt-5">
          <h4>There are 30+ Brands Categories Available</h4>
         <Link to="/single-brand">
         <button>View More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
