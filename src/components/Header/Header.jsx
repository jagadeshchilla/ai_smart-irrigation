import React ,{useRef, useEffect}from 'react';
import { Container, Row, Button} from 'reactstrap'
import { NavLink, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/images/ai.png'
import "./header.css";

const nav_links=[
  {
    path:'/home',
    display:'Home'
  },
  
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/profile',
    display:'Profile'
  },
  
  {
    path:'/services',
    display:'Services'
  }

]
const Header = () => {

const headerRef = useRef(null)
const menuRef = useRef(null)


const stickyHeaderFunc = () =>{
  window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
      headerRef.current.classList.add('sticky__header')
    }else{
      headerRef.current.classList.remove('sticky__header')
    }
  })
}

useEffect(() => {
  stickyHeaderFunc()
  return window.removeEventListener('scroll', stickyHeaderFunc)
})

  const toggleMenu  = () => menuRef.current.classList.toggle('show__menu');
  return (
    <header className="header" ref={headerRef}>
      <Container className='nav'>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* =================logo========== */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/*==========logo end======*/}
            {/*==========menu start======*/}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5 ">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/*==========menu end======*/}

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button
                  className="btn primary__btn"
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  <Link to="/contact" style={{ color: "white" }}>
                    ContactUs
                  </Link>
                </Button>
              </div>
              <span className="mobile_menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
