import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import '../styles/about.css'
import plant from '../assets/images/plant.jpg'
import List from '../Vision/list'
const About = () => {
  return (
    <>
    <section className='about'>
      <Container className='about_container'>
        <Row>
          <Col lg='6'>
            <div className="about_content">
            <div className="About_subtitle d-flex align-items-center ">
                  <Subtitle
                    subtitle={"About the project"}
                    style={{ backgroundColor: "green", color: "white" }}
                  />
                </div>
                <h3>AI Based Smart Irrigation System with Autonomous Growth Monitoring and Decision Making {" "}</h3>
                <p>In an era where water scarcity and food security present growing challenges, our team of dedicated undergraduates from Lovely Professional University has developed a cutting-edge solution. We proudly introduce the AI-based irrigation system, a technological marvel designed to revolutionize the way we approach farming. By integrating advanced AI with practical farming needs, we aim to create a future where water is utilized efficiently, and crop yields are both predictable and maximized.</p>
  
            </div>
          </Col >

          <Col lg='2'>
            <div className='plant-img'>
            <img src={plant} alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='mission'>
      <Container className='mission_container '>
        <Row className='mission-row'>
          <Col lg='3'>
          <div className='mission-title'>
            <h1>VISION AND STRATEGIES</h1>
          </div>
          </Col>
          <List/>
        </Row>
      </Container>
    </section>
    
    </>
  )
}

export default About