import React from "react";

import { Col, Row } from "reactstrap";
import Accordion from "./Accordion";
import Comments from "./Comments";

function Index({ minimal }) {
  return (
    <>
      <div>
        <div className="mt-5">
          <h4 style={{display: minimal === true ? "none" : ''}}>
            FAQ’s & Latest Answer
            <img
              src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
              alt="line"
              width="50"
              className="mx-2"
            ></img>
          </h4>
        </div>

        <div className="p-3">
          <Row>
            <Col xxl={8}>
              <div style={{ display: minimal === true ? "none" : "" }}>
                <Accordion />
              </div>

              <div className="mt-5">
                <h4>
                  {minimal === true ? "Review" : "Latest User Question"}
                  <img
                    src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
                    alt="line"
                    width="50"
                    className="mx-2"
                  ></img>
                </h4>
              </div>

              <Comments />
            </Col>
            <Col xxl={4}></Col>
          </Row>
        </div>
        {/* <div className="mt-5">
          <h4>
            Engine Performance
            <img
              src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
              alt="line"
              width="50"
              className="mx-2"
            ></img>
          </h4>
        </div> */}

        {/* <div
        
          className="p-3"
        >
          <Row>
            <Col
              xxl={8}
            
            >
            table
            </Col>
            <Col xxl={4}></Col>
          </Row>
        </div> */}
      </div>
    </>
  );
}

export default Index;
