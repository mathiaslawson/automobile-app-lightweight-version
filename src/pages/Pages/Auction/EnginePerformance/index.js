import React from "react";
import Table from "./Table";
import { Col, Row } from "reactstrap";

function index() {
  return (
    <>
      <div>
        <div className="mt-5">
          <h4>
            Engine Performance
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
              <Table />
            </Col>
            <Col xxl={4}></Col>
          </Row>
        </div>
        <div className="mt-5">
          <h4>
            Engine Performance
            <img
              src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
              alt="line"
              width="50"
              className="mx-2"
            ></img>
          </h4>
        </div>

        <div
        
          className="p-3"
        >
          <Row>
            <Col
              xxl={8}
            
            >
              <Table />
            </Col>
            <Col xxl={4}></Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default index;
