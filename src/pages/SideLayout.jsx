import React from "react";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { FaRegUserCircle } from "react-icons/fa";
import "../styles/dashboard.css";
import { PiPlantLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import farmer from "../assets/images/farmer.jpg";
import { PiPottedPlant } from "react-icons/pi";
import { RiPlantLine } from "react-icons/ri";
import Switch from "@mui/material/Switch";
import { FaDisease } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BiBeenHere } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
const label = { inputProps: { "aria-label": "Switch demo" } };
const SideLayout = () => {
  return (
    <section>
      <Container >
        <Row className="dashboard-title">
          <Col lg="1">
            <PiPlantLight className="plant" />
          </Col>
          <Col>
            <h6 className="plant-title">Agro Value</h6>
          </Col>

          <Row>
            <Col lg="1" className="farmer">
              <img src={farmer} />
            </Col>

            <Col>
              <Col className="farmer-name gap-2">
                <Col lg="1">
                  <CiUser />
                </Col>
                <h5>NaveenBabu</h5>
              </Col>
              <Col className="farmer-crop ">
                <Col lg="2">
                  <PiPottedPlant />
                </Col>
                <h5>Pomegranate</h5>
              </Col>
            </Col>
          </Row>
          <Row className="search">
            <div className="search-bar">
              <Form className="d-flex align-items-center gap-4">
                <FormGroup className="d-flex gap-3 form__group form__group-last">
                  <div>
                    <input type="text" placeholder="Search" />
                  </div>
                </FormGroup>
                <span className="search__icon" type="submit">
                  <i class="ri-search-line"></i>
                </span>
              </Form>
            </div>
          </Row>
        </Row>
        <Row className="dashboard-data">
          <Col lg="9">
            <h5 className="data">Data</h5>
          </Col>
          <Col>Details</Col>

          <Row className="soil">
            <Col className="data-col" lg="1">
              <RiPlantLine className="data-plant" />
            </Col>
            <Col className="data-title gap-5">
              <h6>Soil Sensor data</h6>
              <Switch {...label} defaultChecked />
            </Col>
          </Row>
          <Row>
            <Col className="data-col" lg="1">
              <FaDisease className="data-plant" />
            </Col>
            <Col className="data-title gap-5">
              <h6>Disease detection</h6>
              <Switch {...label} defaultChecked />
            </Col>
          </Row>
          <Row>
            <Col lg="9">
              <h5 className="data">Settings</h5>
            </Col>
            <Col>Details</Col>
            <Row>
              <div className="settings d-flex gap-3">
                <Col lg="1">
                  <FaRegBell className="settings-item" />
                </Col>
                <Col>
                  <h6 className="settings-title">Alerts</h6>
                </Col>
              </div>
              <div className="settings d-flex gap-3">
                <Col lg="1">
                  <IoWaterOutline className="settings-item" />
                </Col>
                <Col>
                  <h6 className="settings-title">Irrigation</h6>
                </Col>
              </div>
            </Row>
            <Row className="setting">
              <div className="settings d-flex gap-3">
                <Col lg="1">
                  <MdOutlineHealthAndSafety className="settings-item" />
                </Col>
                <Col>
                  <h6 className="settings-title">Soil Health</h6>
                </Col>
              </div>
              <div className="settings d-flex gap-3">
                <Col lg="1">
                  <FaEye className="settings-item" />
                </Col>
                <Col>
                  <h6 className="settings-title">Sensor</h6>
                </Col>
              </div>
              <div className="settings d-flex gap-3">
                <Col lg="1">
                  <FaPlus className="settings-item" />
                </Col>
                <Col>
                  <h6 className="settings-title">Add </h6>
                </Col>
              </div>
            </Row>
          </Row>
          <Row>
            <Col lg="2">
              <IoLogOutOutline className="data-last" />
            </Col>
            <Col lg="8">
              <BiBeenHere className="data-last" />
            </Col>
            <Col lg="1">
              <FaQuestion className="data-last" />
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default SideLayout;
