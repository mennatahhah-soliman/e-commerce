import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
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
    updateLocalStorage(updatedCart);
  };
  const getTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 5;
  const totalWithDelivery = getTotal() + deliveryFee;
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 mb-4  ">
        <div className="p-4  border-end" style={{ borderColor: "#ccc" }}>
          <h4 className="mb-4 text-black" style={{fontWeight:'bold'}}>Contact</h4>
          <input type="text" className="form-control" style={{color:'#707070',height:'50px' ,border:'1px solid blue'}} placeholder="Email or mobile phone number" />
            <div className="form-check d-flex align-items-center" style={{marginTop:'15px'}}>
  <input className="form-check-input me-2" type="checkbox" id="newsOffers" />
  <label className="form-check-label" htmlFor="newsOffers">Email me with news and offers</label>
</div>
            <form>
              <div className="mb-3">
                <h4 className="mb-4 text-black" style={{fontWeight:'bold',marginTop:'15px'}}>Delivery</h4> 
                <input type="text" className="form-control" placeholder="Country/Region" style={{color:'#707070',height:'50px' ,fontSize:'12px'}}/>
              </div>
            <div className="row" >
  <div className="col-md-6 mb-3" >
    <input type="tel" className="form-control" placeholder="First name (optional)" style={{color:'#707070' ,height:'50px',fontSize:'14px'}} />
  </div>
  <div className="col-md-6 mb-3">
    <input className="form-control" placeholder="Last name" style={{color:'#707070' ,height:'50px',fontSize:'14px'}}></input>
  </div>
     </div>
    <input className="form-control mb-4 " placeholder="Address" style={{color:'#707070' ,height:'50px',fontSize:'14px'}}></input>
        <input className="form-control mb-4 " placeholder="Apartment, suite, etc. (optional)" style={{color:'#707070' ,height:'50px',fontSize:'14px'}}></input>

           <div className="row" >
  <div className="col-md-6 mb-3" >
    <input type="tel" className="form-control" placeholder="Postal code (optional)" style={{color:'#707070' ,height:'50px',fontSize:'14px'}} />
  </div>
  <div className="col-md-6 ">
    <input className="form-control" placeholder="City" style={{color:'#707070' ,height:'50px',fontSize:'14px'}}></input>
  </div>
</div>
                   <div className="form-check d-flex align-items-center " style={{marginTop:'15px'}}>
  <input className="form-check-input me-2" type="checkbox" id="newsOffers" />
  <label className="form-check-label" htmlFor="newsOffers">Save this information for next time</label>
</div>
     <div className="mb-3">
                <h4 className="mb-4 text-black" style={{fontWeight:'bold',marginTop:'15px'}}>Shipping method</h4> 
                <input type="text" className="form-control"  readOnly placeholder="5$" style={{color:'#707070',height:'50px',border:'1px sold blue',backgroundColor:'#F0F5FF' ,fontSize:'12px'}}/>
              </div>
               <div className="mb-3">
                <h4 className="mb-1 text-black" style={{fontWeight:'bold',marginTop:'15px'}}>Payment</h4> 
                <p style={{color:'#707070' ,fontSize:'13px'}} >All transactions are secure and encrypted.</p>
              </div>
              
              <button className="btn w-100 text-white" style={{ backgroundColor: '#35AFA0',fontSize:'20px', height:'50px' }}>  Pay now  </button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 ">
    
            {cart.length === 0 ? (
              <p className="text-danger">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                    className="me-3"
                  />
                  <div className="flex-grow-1">
                    <h5 className="mb-1" style={{fontSize:'14px'}}>{item.name}</h5>
                    <p className="mb-1 " style={{fontSize:'14px'}} >
                      {item.price} EGP × {item.quantity} = <strong>{item.price * item.quantity} EGP</strong>
                    </p>
                    <div className="d-flex align-items-center" style={{backgroundColor:'#F3F4F7', width:'80px', borderRadius:'13px', fontSize:'18px' ,fontWeight:'bold'}}>
                      <button className="btn btn-sm  me-2" style={{}} onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="btn btn-sm  ms-2" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <button
                    className="btn btn-sm btn-danger "style={{borderRadius:'8px '}}
                    onClick={() => removeItem(item.id)}
                  >  &times;
                  </button>
                </div>
              ))
            )}
            <div className="text-start ">
              <p style={{fontSize:'14px' }}>Subtotal: <strong style={{marginLeft:'40px'}}>{getTotal()} $</strong></p>
              <p style={{fontSize:'14px',marginTop:'-13px'}}>Shipping: <strong style={{marginLeft:'40px'}}>{deliveryFee} $</strong></p>
              <h5 style={{marginTop:'-13px'}}>Total: <strong style={{marginLeft:'48px'}}>{totalWithDelivery} $</strong></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
