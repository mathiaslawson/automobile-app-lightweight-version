import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Progress,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faClock,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const MechanicDashboard = ({ user }) => {
  const mechanicStats = {
    totalJobs: 125,
    completedJobs: 98,
    pendingJobs: 27,
    averageCompletionTime: 2.5, // hours
    jobsPerMonth: [10, 15, 20, 25, 18, 22, 30, 28, 25, 20, 18, 15],
  };

  const {
    totalJobs,
    completedJobs,
    pendingJobs,
    averageCompletionTime,
    jobsPerMonth,
  } = mechanicStats;

  const completedJobsPercentage = (completedJobs / totalJobs) * 100;
  const pendingJobsPercentage = (pendingJobs / totalJobs) * 100;

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label:
          user?.role === "customer"
            ? "Customer Data"
            : user?.role === "dealer"
            ? "Dealer Data"
            : user?.role === "sub"
            ? "Sub Dealer Data"
            : user?.role === "mech"
            ? "Mechanic Data"
            : "Customer Data",
        data: jobsPerMonth,
        fill: false,
        borderColor: "#007bff",
        tension: 0.1,
      },
    ],
  };

  return (
    <Container fluid>
      <Row className="p-3">
        <Col xs="12" sm="6" md="3">
          <Card
            style={{
              height: "140px",
              boxShadow: "none",
              border: "1px solid transparent",
              borderRadius: "0px",
              backgroundColor: "#00d084",
              color: "white",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                <div className="d-flex justify-content-between">
                  <div>
                    <FontAwesomeIcon icon={faWrench} className="mr-2" />
                  </div>
                  <div>
                    <p className="" style={{ color: "white" }}>
                      {" "}
                      Total Jobs
                    </p>
                  </div>
                </div>
              </CardTitle>
              <CardText className="fs-2 fw-lighter">{totalJobs}</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
          <Card
            style={{
              height: "140px",
              boxShadow: "none",
              border: "1px solid transparent",
              borderRadius: "0px",
              backgroundColor: "#8b3af8",
              color: "white",
              opacity: "0.9",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                <div className="d-flex justify-content-between">
                  <div>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-success"
                    />
                  </div>

                  <div>
                    <p className="" style={{ color: "white" }}>
                      {" "}
                      Completed Jobs
                    </p>
                  </div>
                </div>
              </CardTitle>
              <CardText className="fs-2 fw-lighter">
                {completedJobs} ({completedJobsPercentage.toFixed(2)}%)
              </CardText>
              <Progress value={completedJobsPercentage} />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
          <Card
            style={{
              height: "140px",
              boxShadow: "none",
              border: "1px solid transparent",
              borderRadius: "0px",
              backgroundColor: '#ffa518', 
              color: 'white', 
              opacity: '0.9'
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                <div className="d-flex justify-content-between">
                  <div>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      className="mr-2 text-danger"
                    />
                  </div>

                  <div>
                    <p className="" style={{ color: "white" }}>Pending Jobs</p>
                  </div>
                </div>
              </CardTitle>
              <CardText className="fs-2 fw-lighter">
                {pendingJobs} ({pendingJobsPercentage.toFixed(2)}%)
              </CardText>
              <Progress value={pendingJobsPercentage} />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
          <Card
            style={{
              height: "140px",
              boxShadow: "none",
              border: "1px solid transparent",
              borderRadius: "0px",
              backgroundColor: "#ff5722",
              color: 'white', 
              opacity: '0.9'
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                <div className="d-flex justify-content-between">
                  <div>
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                  </div>

                  <div>
                    <p>
                      <p className="" style={{ color: "white" }}>Avg Completion Time</p>
                    </p>
                  </div>
                </div>
              </CardTitle>
              <CardText className="fs-2 fw-lighter">{averageCompletionTime} hours</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                {user?.role === "customer"
                  ? "Customer Data"
                  : user?.role === "dealer"
                  ? "Dealer Data"
                  : user?.role === "sub"
                  ? "Sub Dealer Data"
                  : user?.role === "mech"
                  ? "Mechanic Data"
                  : "Customer Data"}
              </CardTitle>
              <Line data={chartData} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const Dashboard = ({ user }) => {
  return (
    <CardBody
      className="pt-0"
      style={{
        backgroundColor: "transparent",
        border: "1px solid transparent",
        borderRadius: "10px",
        boxShadow: "none",
        outline: "none",
      }}
    >
      <div>
        <MechanicDashboard user={user} />
      </div>
    </CardBody>
  );
};

export default Dashboard;
