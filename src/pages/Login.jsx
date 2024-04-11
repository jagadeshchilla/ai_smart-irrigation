import React, { useState,useContext } from 'react'

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link,useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { useHistory } from 'react-router-dom';
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'


const Login = () => {

  


  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt='' />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>

                <h2>Login</h2>

                <Form >
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email'  />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id='password'  />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit' >
                    <Link className='btn secondary__btn auth__btn'to='/dashboard'>Login</Link>
                  </Button>
                </Form>
                <p> Don't have an account? <Link to='/profile'>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login