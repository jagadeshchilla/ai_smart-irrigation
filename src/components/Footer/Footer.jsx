import React from 'react';
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/ai.png';

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/projects",
    display: "Projects",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const Footer = () => {

  const year=new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt='' />
              <p>The company itself is a very successful company. They are blinded to get in, they provide to do it herself.</p>

              <div className='social__links d-flex align-items-center gap-4'>
                <span>
                  <Link to='https://www.youtube.com/'><i class='ri-youtube-line'></i></Link>
                </span>
                <span>
                  <Link to='https://github.com/'><i class='ri-github-fill'></i></Link>
                </span>
                <span>
                  <Link to='https://twitter.com/JagadeshChilla'><i class="ri-twitter-x-line"></i></Link>
                </span>
                <span>
                  <Link to='https://www.instagram.com/jagadeshreddy45/'><i class='ri-instagram-line'></i></Link>
                </span>
              </div>
            </div>

          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>
              <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-map-pin-line'></i>
                  </span>
                  Address:
                </h6>
                <p className='mb-0'>Usa</p>
              </ListGroupItem>
              <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-map-line'></i>
                  </span>
                  Email:
                </h6>
                <p className='mb-0'>Agro68@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-phone-fill'></i>
                  </span>
                  Phone:
                </h6>
                <p className='mb-0'>+01234567890</p>
              </ListGroupItem>
                
                
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>Copyright {year}, design and develop by Alex and his co.All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer