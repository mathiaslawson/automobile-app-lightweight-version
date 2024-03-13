import React from "react";
import { Container } from "reactstrap";

function Row2() {
  return (
    <>
      <Container className="p-5">
        <div>
          <div className="text-center">
            <p style={{ color: "#00d084" }} className="">
              (Since-1994)
            </p>
            <h4>Welcome to Automobile</h4>
          </div>

          <div className="text-center mt-5">
            <p className="fs-4 fw-lighter" style={{lineHeight: '2.5rem'}}>
              We're passionate car agency we're thrilled to have you join our
              community of automotive enthusiasts and professionals. Whether
              you're a passionate driver, a car owner, or someone who loves all
              things automotive, you've come to the right place.At Drivco, we
              strive to create a space where people can connect, share
              knowledge, and explore the exciting world of automobiles. From
              discussing the latest car models and technologies to sharing
              driving tips and tricks, we're here to fuel your love for
              everything on wheels.Feel free to ask any questions you have, seek
              advice, or simply engage in friendly conversations with fellow
              members. Our community is full of experts and enthusiasts who are
              eager to share their insights and experiences. Buckle up and enjoy
              your journey with Drivco!
            </p>
          </div>
          <div className="text-center mt-5">
            <p className="fw-lighter" style={{}}>
              John Doe
            </p>
            <p className="fw-bolder" style={{}}>
            (CEO & Founder)
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Row2;
