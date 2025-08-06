import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
<div style={{ backgroundColor: '#35AFA0' }} className="text-white py-2 small">
  <div className="container d-flex justify-content-center">
    <span className="text-center">
      Due to current circumstances, there may be slight delays in order processing
    </span>
  </div>
</div>
      {/* Top Bar */}
      <div className="bg-white py-2 border-bottom" style={{ fontSize: '17px' }}>
        <div className="container d-flex justify-content-between">
          <div  className="d-none d-md-block">
            <NavLink to="/about" className="head me-3 text-decoration-none text-muted">About </NavLink>
            <NavLink to="/contact" className="head me-3 text-decoration-none text-muted">Contact</NavLink>
          </div>
        <div className="d-flex align-items-center gap-4">
  {/* Left Info with Icon */}
  <div className="d-flex align-items-center gap-2 text-muted top-info-bar" >
<FontAwesomeIcon icon={faHand}  style={{ color: '#35AFA0' }} />
    <small>100% Secure delivery without contacting the courier</small>
    <span className="mx-3" style={{ color: '#ccc' }}>|</span>
    <small>Need help? Call Us:<span style={{ color: '#35AFA0', fontWeight:'bold'}}>+0020 500</span> </small>
    <span className="mx-2" style={{ color: '#ccc' }}>|</span>
  </div>

  <div className="dropdown">
    <button className=" head btn btn-link dropdown-toggle text-muted text-decoration-none p-0" 
      type="button" data-bs-toggle="dropdown" aria-expanded="false">
      English
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Arabic</a></li>
      <li><a className="dropdown-item" href="#">French</a></li>
      <li><a className="dropdown-item" href="#">German</a></li>
    </ul>
  </div>

  <div className="dropdown">
    <button className=" head btn btn-link dropdown-toggle text-muted text-decoration-none p-0"
      type="button" data-bs-toggle="dropdown" aria-expanded="false">  USA
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">EGP</a></li>
      <li><a className="dropdown-item" href="#">EUR</a></li>
      <li><a className="dropdown-item" href="#">GBP</a></li>
    </ul>
  </div>
</div>
        </div>
      </div>
      <div className="py-3 bg-white">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
<div className="fs-3 fw-bold s" style={{ color: '#35AFA0' }}>
  <FontAwesomeIcon icon={faCartShopping} className="me-2" />Basket</div>

        {/* Search */}
<div className="input-group w-50" style={{ backgroundColor: '#f8f9fa' }}>
  <input type="text" className="form-control border-end-0" placeholder="Search for products, fruits, meat..."style={{ backgroundColor: '#f8f9fa' }} />
  <span className="input-group-text  border-start-0">
    <FontAwesomeIcon icon={faSearchengin} className="text-muted" />
  </span>
</div>

<div className="d-flex gap-2 fs-5" onClick={() => navigate('/Checkout')}>
    <span style={{  color:'#7c7d7eff'}}>$0.00</span>
<div style={{ position: 'relative' }}>
  <a  style={{  color:'#dee2e6'}}>
    <FontAwesomeIcon icon={faShoppingCart} size="lg" onClick={() => navigate('/Checkout')} />
  </a>
  <span
    style={{
      position: 'absolute',
      top: '-8px',
      right: '-10px',
      background: '#fa4e3fff',
      color: 'white',
      borderRadius: '50%',
      padding: '2px 6px',
      fontSize: '12px',
    }}  >  0
  </span>
   </div>
   </div>
  </div>
  </div>
  <nav className="py-1 border-bottom" style={{ borderColor: '#dee2e6' }}>
  <div className="container d-flex justify-content-between align-items-center">
    <div className="d-none d-lg-block" style={{ width: '150px' }}></div>
<div className="dropdown d-lg-none w-100 px-3">
  <button
    className="btn text-white fw-bold dropdown-toggle w-100 text-center"
    style={{ backgroundColor: '#35AFA0', borderRadius: '13px' }}  type="button" data-bs-toggle="dropdown"  aria-expanded="false">
    All Categories <i className="fas fa-chevron-down ms-1"></i>
  </button>
  
  <ul className="dropdown-menu text-center w-100">
    <li className="dropdown-item no-focus"onClick={() => navigate('/')} >  Home</li>
    <li onClick={() => navigate('/shop')} className="dropdown-item no-focus"> Shop</li>
    <li onClick={() => navigate('/blog')} className="dropdown-item no-focus">Blog</li>
    <li onClick={() => navigate('/about')} className="dropdown-item no-focus">About</li>
    <li onClick={() => navigate('/contact')} className="dropdown-item no-focus">Contact</li>
  </ul>
</div>


    <div className="flex-grow-1 d-none d-lg-flex justify-content-center align-items-center gap-5 m-3">
      <NavLink to="/" className="head text-muted text-decoration-none fw-medium">Home</NavLink>
      <NavLink to="/shop" className="head text-muted text-decoration-none fw-medium">
        <FontAwesomeIcon icon={faShop} className="me-2" /> Shop
      </NavLink>
      <NavLink to="/blog" className="head text-muted text-decoration-none fw-medium">
        <FontAwesomeIcon icon={faBlog} className="me-2" /> Blog
      </NavLink>
      <NavLink to="/about" className="head text-muted text-decoration-none fw-medium">About</NavLink>  
      <NavLink to="/contact" className="head text-muted text-decoration-none fw-medium">Contact</NavLink>
    </div>
    <div className="d-none d-lg-block" style={{ width: '150px' }}></div>

  </div>
</nav>


    

    </div>
  );
}

export default Header;
