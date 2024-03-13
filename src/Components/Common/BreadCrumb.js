import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const BreadCrumb = ({ title, pageTitle }) => {
    return (
        <React.Fragment>
            <Row style={{display: 'none'}}>
                <Col xs={12} >
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between" style={{backgroundColor: '#f9f9f9', boxShadow: 'none', color: "white", fontWeight: 'lighter'}}>
                        <p className="mb-sm-0 text-dark">{title}</p>

                        <div className="page-title-right text-dark">
                            <ol className="breadcrumb m-0  text-dark">
                                <li className="breadcrumb-item  text-dark" style={{color: 'white'}}><Link to="#" style={{color: 'black'}}>{pageTitle}</Link></li>
                                <li className="breadcrumb-item active  text-dark">{title}</li>
                            </ol>
                        </div>

                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BreadCrumb;