import React, { useState } from "react";
import "./Purchase.css"
import {Link} from 'react-router-dom'

const CarsData = [
  {
    id: 1,
    name: "Toyota Camry",
    price: 25000,
    image:
      "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-1.png",
  },
  {
    id: 2,
    name: "Honda Civic",
    price: 22000,
    image:
      "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-1.png",
  },
  {
    id: 3,
    name: "Ford Mustang",
    price: 35000,
    image:
      "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-1.png",
  },
  {
    id: 4,
    name: "Chevrolet Corvette",
    price: 60000,
    image:
      "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/product-img-1.png",
  },
];

const CarsPurchasePage = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center fs-5 fw-bolder">Purchases</div>
      <div className="text-center text-muted mb-4 mt-3">
        <p>
          {" "}
          Review your past car purchases effortlessly. Our purchase history
          feature provides a quick snapshot of your previous transactions,
          making it easy to track your buying journey. Explore your history now
          and relive your car-buying experiences!{" "}
        </p>
      </div>
      <div>
        {CarsData.map((car) => (
        <Link   key={car.id} to="/details">
          <div
          
            onClick={() => handleCarSelect(car)}
            className="mt-5 car-item"
          >
            <div className="d-flex align-items-center gap-3">
              <div>
                <img
                  src={car.image}
                  alt={car.name}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                    width: "160px",
                    height: "100px",
                  }}
                />
              </div>
              <div>
                {" "}
                <h5 className="fw-bolder">{car.name}</h5>
                <p className="text-muted">GHC{car.price}</p>
              </div>
            </div>
          </div>
        </Link>
        ))}
      </div>
      {/* {selectedCar && (
        <div>
          <h2>Selected Car:</h2>
          <img src={selectedCar.image} alt={selectedCar.name} />
          <h3>{selectedCar.name}</h3>
          <p>Price: ${selectedCar.price}</p>
          <button>Purchase</button>
        </div>
      )} */}
    </div>
  );
};

export default CarsPurchasePage;