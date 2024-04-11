import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Videopart from "../shared/Videopart";
import Videopart1 from "../shared/Videopart1";
import "../styles/dashboard.css";
const Monitor = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button className="live1-btn" variant="primary" onClick={handleShow}>
        Click Here!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Monitor Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tabs
            defaultActiveKey="sensor"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="sensor" title="Growth stage detection">
              <Videopart />
            </Tab>
            <Tab eventKey="disease" title="Disease Detection">
              <Videopart1/>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Monitor;
