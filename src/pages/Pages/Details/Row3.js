import React from "react";
import Slider from "../../../Components/Customer/common/Slider";
import { Container, Button } from "reactstrap";
import {Link} from 'react-router-dom'

function Row3() {
  return (
    <>
      <div className="" style={{ backgroundColor: "#faf8fb" }}>
        <div className='container2'>
          <div>
            <h5 className="text-start mt-5" style={{ color: "#00d084" }}>
              Similar Car
            </h5>
            <h2 className="text-start fw-bolder">
              Similar Car From This Brand
            </h2>
          </div>
          <Slider />
          <div className="text-center mt-5">
            <p>
              There will be 100+ Similar Car
              <Link to="/single-brand">
                <Button
                  style={{
                    backgroundColor: "#00d084",
                    width: "max-content",
                    border: "none",
                    color: "black",
                  }}
                  className="px-5 py-3 fw-bolder mx-2"
                >
                  View More
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row3;
