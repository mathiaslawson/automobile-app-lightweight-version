import React from "react";
import { Container, Row, Col } from "reactstrap";

const steps = ["Step 1", "Step 2", "Step 3"]; // Add your steps as needed

function HorizontalStepper() {
  return (
    <Container>
      <Row>
        {steps.map((label, index) => (
          <Col key={index} className="text-center">
            <div className={`step-label ${index === 0 ? "completed-step" : ""}`}>
              {index + 1}
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        {steps.map((label, index) => (
          <Col key={index}>
            <div className={`step-content ${index === 0 ? "active-step" : ""}`}>
              <h5>{label}</h5>
              {/* Add your static information for each step */}
              {index === 0 && <p>Information for Step 1</p>}
              {index === 1 && <p>Information for Step 2</p>}
              {index === 2 && <p>Information for Step 3</p>}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HorizontalStepper;
