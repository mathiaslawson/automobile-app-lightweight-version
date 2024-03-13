import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer" style={{backgroundColor: '#f2f2f7'}}>
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            {new Date().getFullYear()} © Gashie Technologies.
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by Gashie Technologies
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;