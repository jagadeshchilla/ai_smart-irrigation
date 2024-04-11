import React from "react";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../styles/dashboard.css";
import SideLayout from "./SideLayout";
import Subtitle from "./../shared/Subtitle";
import SideLayout1 from "./SideLayout1";

const Dashboard = () => {
  return (
    <section>
      <Container className="slide">
        <Row className="slide-row">
          <Subtitle
            subtitle={"Dashboard"}
            style={{ backgroundColor: "green", color: "white" }}
          />
          <Col lg='4'className="slide-column gap-1">
            <SideLayout />
          </Col>
          <Col><SideLayout1/></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;
