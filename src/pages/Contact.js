import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div>
       <div className="contact-page py-5">
      {/* Section: Get In Touch */}
      <div className="text-center mb-5" style={{fontFamily:'Inter'}}>
        <h2 className="" style={{fontWeight:'400px' ,fontSize:'40px'}}>Get In Touch</h2>
        <p className="text-black w-70 mx-auto">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita <br />
quaerat unde quam dolor culpa veritatis inventore, aut commodi eum <br />
veniam vel.        </p>
      </div>

<div className="container mb-5">
  <div className="row g-4 justify-content-center">
    <div className="col-md-6 col-lg-4 d-flex justify-content-center">
      <div className="card shadow-sm d-flex align-items-center justify-content-center text-center"
        style={{
          borderRadius: '7px',
          backgroundColor: '#F3F3F6',
          border: '1px',
          width: '100%',
          maxWidth: '300px',
          minHeight: '200px',
        }}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <FontAwesomeIcon icon={faLocationDot} style={{marginBottom:'20px' , width:'33px',height:'33px', color:'#35AFA0'}} />
          <h6 className="fw-bold mb-2">102 Street 2714 Donovan</h6>
          <p className="text-muted">Lorem ipsum dolar site amet discont</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 d-flex justify-content-center">
      <div className="card shadow-sm d-flex align-items-center justify-content-center text-center"
        style={{
          borderRadius: '7px',
          backgroundColor: '#F3F3F6',
          border: '1px',
          width: '100%',
          maxWidth: '300px',
          minHeight: '200px',
        }}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <FontAwesomeIcon icon={faPhoneVolume} style={{marginBottom:'20px' , width:'33px',height:'33px', color:'#35AFA0'}} />
          <h6 className="fw-bold mb-2">+02 1234 567 88</h6>
          <p className="text-muted">Lorem ipsum dolar site amet discont</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 d-flex justify-content-center">
      <div className="card shadow-sm d-flex align-items-center justify-content-center text-center"
        style={{
          borderRadius: '7px',
          backgroundColor: '#F3F3F6',
          border: '1px',
          width: '100%',
          maxWidth: '300px',
          minHeight: '200px',
        }}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
      <FontAwesomeIcon icon={faEnvelope} style={{marginBottom:'20px' , width:'33px',height:'33px', color:'#35AFA0'}} />
      <h6 className="fw-bold mb-2">info@example.com</h6>
          <p className="text-muted">Lorem ipsum dolar site amet discont</p>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="container">
<div className="bg-white p-4 p-md-5 shadow rounded mx-auto" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-4">
            <h3 style={{fontWeight:'400px' ,fontSize:'40px',fontFamily:'Inter'}}>Send Us</h3>
            <p className="text-black" style={{fontWeight:'400px' ,fontSize:'15px',fontFamily:'Inter'}}>
              Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.
            </p>
          </div>
    <form>
  <div className="row mb-3">
    <div className="col-md-6 mb-3 mb-md-0">
      <p className="mb-1 fw-semibold">Name</p>
      <label htmlFor="name" className="form-label"></label>
      <input
        type="text"
        id="name"
        className="form-control border-0"
        style={{ backgroundColor: '#F3F4F7' }}
      />
    </div>
    <div className="col-md-6">
      <p className="mb-1 fw-semibold">Email *</p>
      <label htmlFor="email" className="form-label"></label>
      <input
        type="email"
        id="email"
        className="form-control border-0"
        style={{ backgroundColor: '#F3F4F7' }}
        required
      />
    </div>
  </div>
  <div className="mb-3">
    <p className="mb-1 fw-semibold">Phone Number</p>
    <label htmlFor="phone" className="form-label"></label>
    <input
      type="tel"
      id="phone"
      className="form-control border-0"
      style={{ backgroundColor: '#F3F4F7' }}
    />
  </div>
  <div className="mb-3">
    <p className="mb-1 fw-semibold">Your Message</p>
    <label htmlFor="message" className="form-label"></label>
    <textarea
      id="message"
      className="form-control border-0"
      style={{ backgroundColor: '#F3F4F7' }}
      rows="5"
    ></textarea>
  </div>
<button
  type="submit"
  className="btn text-white"
  style={{
    backgroundColor: '#35AFA0',
    borderRadius: '4px',
    width: '160px',
    height: '48px',
  }}
>  Send Message
</button>
</form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
