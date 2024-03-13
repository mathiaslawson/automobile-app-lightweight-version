import React from "react";
import { Container, Col, Row, Card, Button } from "reactstrap";
import {Link} from 'react-router-dom'

const galleryItems = [
  {
    title: "Host Statistics",
    description: "this is t",
    details: "this is the per",
  },
  // Add more gallery items as needed
];

function Row4() {
  return (
    <>
      <Container className="p-5">
        <div>
          <div className="text-center mt-5 mb-5">
            <h1 className="fw-bolder">Automobile Gallery</h1>
          </div>

          <Row className="g-3">
            <Col xxl={4}>
              <Card className="w-100" style={{ padding: "0px", boxShadow: "none", border: '1px solid transparent' }}>
                <img
                  src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/gallery-01.png"
                  alt="img"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                ></img>
              </Card>
            </Col>
            <Col xxl={4}>
              <Card className="w-100" style={{ padding: "0px", boxShadow: "none", border: '1px solid transparent' }}>
                <img
                  src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/gallery-02.png"
                  alt="img"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                ></img>
              </Card>
            </Col>
            <Col xxl={4}>
              <Card className="w-100" style={{ padding: "0px", boxShadow: "none", border: '1px solid transparent' }}>
                <img
                  src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/gallery-03.png"
                  alt="img"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                ></img>
              </Card>
            </Col>
            <Col xxl={4}>
              <Card className="w-100" style={{ padding: "0px", boxShadow: "none", border: '1px solid transparent' }}>
                <img
                  src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/gallery-04.png"
                  alt="img"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                ></img>
              </Card>
            </Col>
            <Col xxl={4}>
              <Card className="w-100" style={{ padding: "0px", boxShadow: "none", border: '1px solid transparent' }}>
                <img
                  src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/gallery-05.png"
                  alt="img"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                ></img>
              </Card>
            </Col>
            <Col xxl={4}>
              <Card className="w-100" style={{ padding: "0px", boxShadow: "none", border: '1px solid transparent' }}>
                <img
                  src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/gallery-06.png"
                  alt="img"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                ></img>
              </Card>
            </Col>
            
          </Row>
        </div>

        <div className="text-center mt-5">
          <Link to="/single-brand">
          <Button style={{backgroundColor: '#00d084', width: 'max-content', border: 'none', color: 'black'}}className="px-5 py-3 fw-bolder">View More</Button></Link>
          
        </div>
      </Container>
    </>
  );
}

export default Row4;
