import React, { useState, useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext"; 

const Checkout = () => {
  const { cart, setCart, clearCart } = useContext(CartContext); 
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    contact: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    postalCode: "",
    city: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart); 
  };

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity + delta),
          }
        : item
    );
    setCart(updatedCart); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.contact.trim()) {
      newErrors.contact = "Email or mobile phone number is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country/Region is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before checkout.");
      return;
    }
    
    if (validateForm()) {
      clearCart(); 
      setOrderPlaced(true);
    }
  };

  const getTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 5;
  const totalWithDelivery = getTotal() + deliveryFee;

  if (orderPlaced) {
    return (
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="alert alert-success" style={{ backgroundColor: '#e5e7e6', borderColor: '#c3e6cb', color: '#000000' ,border: 'none' }}>
              <h4 className="alert-heading">✓ Order Placed Successfully!</h4>
              <p>Thank you for your order. Your items will be shipped soon.</p>
              <hr />
              <p className="mb-0">You will receive a confirmation email shortly.</p>
            </div>
            <button 
              className="btn btn-primary mt-3"
              onClick={() => navigate("/")}   style={{ backgroundColor: 'rgba(97, 173, 177, 1)', color: '#000000' ,border: 'none' }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="p-4 border-end" style={{ borderColor: "#ccc" }}>
            <h4 className="mb-4 text-black" style={{ fontWeight: 'bold' }}>Contact</h4>
            <input 
              type="text" 
              name="contact"
              className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
              style={{ color: '#707070', height: '50px', border: '1px solid blue' }} 
              placeholder="Email or mobile phone number"
              value={formData.contact}
              onChange={handleInputChange}
            />
            {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
            
            <div className="form-check d-flex align-items-center" style={{ marginTop: '15px' }}>
              <input className="form-check-input me-2" type="checkbox" id="newsOffers" />
              <label className="form-check-label" htmlFor="newsOffers">Email me with news and offers</label>
            </div>
            
            <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                <h4 className="mb-4 text-black" style={{ fontWeight: 'bold', marginTop: '15px' }}>Delivery</h4>
                <input 
                  type="text" 
                  name="country"
                  className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                  placeholder="Country/Region" 
                  style={{ color: '#707070', height: '50px', fontSize: '12px' }}
                  value={formData.country}
                  onChange={handleInputChange}
                />
                {errors.country && <div className="invalid-feedback">{errors.country}</div>}
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input 
                    type="tel" 
                    name="firstName"
                    className="form-control" 
                    placeholder="First name (optional)" 
                    style={{ color: '#707070', height: '50px', fontSize: '14px' }}
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input 
                    name="lastName"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    placeholder="Last name" 
                    style={{ color: '#707070', height: '50px', fontSize: '14px' }}
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
              </div>
              
              <input 
                name="address"
                className={`form-control mb-4 ${errors.address ? 'is-invalid' : ''}`}
                placeholder="Address" 
                style={{ color: '#707070', height: '50px', fontSize: '14px' }}
                value={formData.address}
                onChange={handleInputChange}
              />
              {errors.address && <div className="invalid-feedback mb-2">{errors.address}</div>}
              
              <input 
                name="apartment"
                className="form-control mb-4"
                placeholder="Apartment, suite, etc. (optional)" 
                style={{ color: '#707070', height: '50px', fontSize: '14px' }}
                value={formData.apartment}
                onChange={handleInputChange}
              />

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input 
                    type="tel" 
                    name="postalCode"
                    className="form-control" 
                    placeholder="Postal code (optional)" 
                    style={{ color: '#707070', height: '50px', fontSize: '14px' }}
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    name="city"
                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                    placeholder="City" 
                    style={{ color: '#707070', height: '50px', fontSize: '14px' }}
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                </div>
              </div>
              
              <div className="form-check d-flex align-items-center" style={{ marginTop: '15px' }}>
                <input className="form-check-input me-2" type="checkbox" id="saveInfo" />
                <label className="form-check-label" htmlFor="saveInfo">Save this information for next time</label>
              </div>
              
              <div className="mb-3">
                <h4 className="mb-4 text-black" style={{ fontWeight: 'bold', marginTop: '15px' }}>Shipping method</h4>
                <input 
                  type="text" 
                  className="form-control" 
                  readOnly 
                  placeholder="5$" 
                  style={{ color: '#707070', height: '50px', border: '1px sold blue', backgroundColor: '#F0F5FF', fontSize: '12px' }}
                />
              </div>
              
              <div className="mb-3">
                <h4 className="mb-1 text-black" style={{ fontWeight: 'bold', marginTop: '15px' }}>Payment</h4>
                <p style={{ color: '#707070', fontSize: '13px' }}>All transactions are secure and encrypted.</p>
              </div>
              
              <button 
                type="submit"
                className="btn w-100 text-white" 
                style={{ backgroundColor: '#35AFA0', fontSize: '20px', height: '50px' }}
              >
                Pay now
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4">
            {cart.length === 0 ? (
              <p className="text-danger">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-3">
                  <img
                    src={`${process.env.PUBLIC_URL}${item.image}`}
                    alt={item.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                    className="me-3"
                  />
                  <div className="flex-grow-1">
                    <h5 className="mb-1" style={{ fontSize: '14px' }}>{item.name}</h5>
                    <p className="mb-1" style={{ fontSize: '14px' }}>
                      {item.price} EGP × {item.quantity} = <strong>{item.price * item.quantity} EGP</strong>
                    </p>
                    <div className="d-flex align-items-center" style={{ backgroundColor: '#F3F4F7', width: '80px', borderRadius: '13px', fontSize: '18px', fontWeight: 'bold' }}>
                      <button className="btn btn-sm me-2" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="btn btn-sm ms-2" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <button
                    className="btn btn-sm btn-danger"
                    style={{ borderRadius: '8px' }}
                    onClick={() => removeItem(item.id)}
                  > &times;
                  </button>
                </div>
              ))
            )}
            <div className="text-start">
              <p style={{ fontSize: '14px' }}>Subtotal: <strong style={{ marginLeft: '40px' }}>{getTotal()} $</strong></p>
              <p style={{ fontSize: '14px', marginTop: '-13px' }}>Shipping: <strong style={{ marginLeft: '40px' }}>{deliveryFee} $</strong></p>
              <h5 style={{ marginTop: '-13px' }}>Total: <strong style={{ marginLeft: '48px' }}>{totalWithDelivery} $</strong></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;