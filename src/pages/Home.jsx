import React from 'react'
import '../styles/home.css';
import { Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/h3.jpg'
import heroImg02 from '../assets/images/h2.png'
import her0video from '../assets/images/video.mp4'
import Subtitle from './../shared/Subtitle';
import worldImg from '../assets/images/icon2.jpg';
import Stats from '../components/stats/Stats';
import UseCases from '../components/UseCases/UseCases';
import TechList from '../Tech/TechList';
import ImagesGallery from '../components/Gallery/ImagesGallery';
import TeamList from '../components/team/TeamList';
import Newsletter from '../shared/Newsletter';


const Home = () => {
  return (
    <>
      {/* ====== hero section start =======*/}
      <section>
        <Container className="hc">
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle
                    subtitle={"Know Before You Go"}
                    style={{ backgroundColor: "green", color: "white" }}
                  />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  AI IN IRRIGATION{" "}
                  <span className="highlight"> CASE STUDIES </span>
                </h1>
                <p>
                  Artificial Intelligence (AI) plays a crucial role in
                  revolutionizing agriculture by offering advanced tools and
                  techniques to improve efficiency, productivity, and
                  sustainability. AI applications in agriculture encompass
                  various aspects such as precision farming, crop monitoring,
                  pest detection, yield prediction, and resource optimization.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box hero__video-box mt-4">
                <video src={her0video} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== hero section end ======= */}
      {/* ====== case study filter start ======= */}
      <section className="importance ">
        <Container className="imp_add">
          <Row>
            <Col lg="6">
              <div className="content ">
                <h1>
                  <b>Why AI is important in Agriculture?</b>
                </h1>
                <p>
                  The farming sector faces multiple risks and uncertainties due
                  to changing climatic conditions and market trends, which
                  results in significant production losses and wasted resources.
                  While decades of experience coupled with ever-more precise
                  weather data have helped farmers make educated guesses, there
                  is still too much success variability.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="content1">
                <p>
                  <b>
                    <i>
                      "Smallholder farmers own 470 out of 570 million farms
                      worldwide. They don't have the requisite capital, lack the
                      skills to use technology, or are unaware of the solutions
                      available to help them farm better and drive
                      profitability. More than 70% of farmers worldwide lack
                      access to proper capital, two-thirds of them struggle to
                      use technology and more than 50% are not aware of the
                      existing solutions. We need to work together to educate,
                      train and scale our efforts to deliver the benefits of
                      digitalisation, AI, farm mechanization, and ML to
                      farmers."
                    </i>
                  </b>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======== Stats Start ============= */}
      <section className="stats">
        <Container>
          <h1 className="stats_head">Ai in agriculture: market stats</h1>
          <div className="stats_check">
            <Stats />
          </div>
        </Container>
      </section>
      {/* ======== Stats End ============= */}
      <section className="cases">
        <Container className="case_container">
          <Row>
            <div className="hero__subtitle d-flex align-items-center ">
              <Subtitle
                subtitle={"Examples"}
                style={{ backgroundColor: "green", color: "white" }}
              />
            </div>
            <h1>Use Cases of Agriculture</h1>

            <UseCases />
          </Row>
        </Container>
      </section>

      <section className="Tech">
        <Container className="tech_container">
          <Row>
            <Col lang="3">
              <Subtitle subtitle={"Technologies"} />
              <h5 className="Tech_title">
                <i>Technologies Used in Agriculture</i>
              </h5>
            </Col>
            <TechList />
          </Row>
        </Container>
      </section>
      <section className="Know">
        <Container className="know_conatainer curved-border">
          <Row>
            <div className="know_title">
              <h1>Know About Our Project</h1>
              <p>
                <i>
                  AI drip irrigation refers to the integration of artificial
                  intelligence (AI) technology with drip irrigation systems to
                  optimize water usage and improve agricultural efficiency. This
                  approach leverages AI algorithms to analyze various data
                  sources such as weather forecasts, soil moisture levels, crop
                  type, and historical data to make real-time decisions about
                  when and how much water to deliver to crops through drip
                  irrigation.
                </i>
              </p>
            </div>
            <div className='buttons'>
            <a
                href="/projects"
                className="btn btn-success  know_button"
              >
                Get started
              </a>
              <a href="/about" className="btn2 " style={{ "color":"white"}}>
                Learn more <i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </Row>
        </Container>
      </section>
      <section className='gallery'>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className='gallery__title'>Visit our project gallery</h2>
            </Col>
            <Col lg='12'>
                <ImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='t'>
        <Container className='team'>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Our Team'} />
              <h2 className='team-title'>Meet My Team</h2>
            </Col>
            <TeamList/>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>

  );
}

export default Home