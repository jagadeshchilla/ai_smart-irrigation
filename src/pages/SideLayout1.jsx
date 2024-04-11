import React, { useState } from "react";
import "../styles/dashboard.css";
import video from "../assets/images/video1.mp4";
import { IoMdLink } from "react-icons/io";
import { Container, Row, Col } from "reactstrap";
import Projects from "../pages/Projects";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Videopart from "../shared/Videopart";
import charts from "../assets/images/charts.png";
import Sensor from "../shared/Sensor";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import agro from "../assets/images/agro.jpg";
import agro1 from "../assets/images/agro1.jpg";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Videopart1 from "../shared/Videopart1";
import Monitor from "./Monitor";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
const SideLayout1 = () => {
  const values = true;
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <section>
      <Container>
        <Row className="d-flex gap-1">
          <Col lg="1" className="video_item">
            <h5>Support farmers in diversefacets of farm management</h5>
            <div className="link-body d-flex gap-3">
              <Col className="link-col" lg="1">
                <IoMdLink className="link" />
              </Col>
              <Col className="link-title">
                <h6>Connect the farm</h6>
              </Col>
            </div>
          </Col>
          <Col className="dash-content">
            <img src={charts} alt="" />
          </Col>
        </Row>
        <Row>
          <Col className="live">
            <h1 className="live-title">Living Monitoring</h1>
            <div className="d-flex gap-2">
              <div>
                <Monitor/>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="accordance">
            <h1 className="acc-title">Sensor Data</h1>
            <div className="d-flex gap-2">
              <div>
                <Button
                  className=" acc-btn me-2 mb-2"
                  onClick={() => handleShow(values)}
                >
                  Sensor Data
                </Button>

                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Data</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Sensor />
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="weather-all">
          <Col lg="5">
            <div className="weather">
              <img src={agro} alt="" />
            </div>
          </Col>

          <Col>
            <div className="weather1">
              <img src={agro1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SideLayout1;
