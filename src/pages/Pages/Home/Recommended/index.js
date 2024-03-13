import React from "react";
import "./Recommended.css";

import { Button } from "reactstrap";

const Recommended = () => {
  return (
    <div className="" style={{ backgroundColor: "black", color: "white", height: 'auto', marginTop: '10rem' }}>
      <div className=" mt-5 p-2 d-flex justify-content-evenly align-items-center">
        <div className="">
          <h4>Recommended Car</h4>
          <h2>Not sure, Which Car is Best?</h2>
        </div>
        <div>
          <img
            src={
              "https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/recommended-img.png"
            }
            alt="think"
          
            className="img-fluid"
       
          />
        </div>
        <div className="">
          <p className="fw-lighter">
            A car that is dependable and has a low risk of breakdowns is highly
            desirable.
          </p>
          <Button
            style={{
              width: "max-content",
              backgroundColor: "#00d084",
              border: "none",
            }}
          >
            Show me best car
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
