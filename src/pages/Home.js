import React, { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
   const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [mainProducts, setMainProducts] = useState([]);


useEffect(() => {
  fetch("/products.json")
    .then((res) => res.json())
    .then((data) => setMainProducts(data))
    .catch((err) => console.error("Error loading main products", err));
}, []);
  const format = (value) => value.toString().padStart(2, '0');
const [time, setTime] = useState({
    hours: 120,
    minutes: 14,
    seconds: 36,
    milliseconds: 49,
  });
  useEffect(() => {
    fetch("/smallproduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products", err));

      const updateItemsPerPage = () => {
            const width = window.innerWidth; 

    if (width < 768) {
      setItemsPerPage(2); 
    } else if (width >= 768 && width < 992) {
      setItemsPerPage(3); 
    } else {
      setItemsPerPage(5); 
    }
  };

  updateItemsPerPage(); 
  window.addEventListener("resize", updateItemsPerPage);

  return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);
   useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds, milliseconds } = prev;

        if (milliseconds > 0) {
          milliseconds--;
        } else {
          milliseconds = 59;
          if (seconds > 0) {
            seconds--;
          } else {
            seconds = 59;
            if (minutes > 0) {
              minutes--;
            } else {
              minutes = 59;
              if (hours > 0) {
                hours--;
              } else {
                clearInterval(interval);
              }
            }
          }
        }

        return { hours, minutes, seconds, milliseconds };
      });
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 250;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div className="container my-4">
      <div style={{
        backgroundColor: '#FFEEF2',
        color: '#C72551',
        padding: '20px 20px',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: '500',
        fontFamily: 'Inter'
      }}>
        Super discount for your <span style={{ fontWeight: 'bold', color: '#C72551' }}>first purchase.</span>
        <span style={{
          color: '#C72551',
          backgroundColor: '#FFEEF2',
          borderRadius: '15px',
          padding: '4px 10px',
          border: '1px dotted #C72551',
          margin: '0 10px',
        }}>
          FREE25BAC
        </span>
        <span style={{ color: '#999', fontSize: '14px' }}>Use discount code in checkout!</span>
      </div>
    
          <div style={{
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      gap: '30px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      fontFamily:'Inter'
    }}>
      <div style={{
        width: '600px',
        height: '350px',
backgroundImage: `url(/images/home1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'black',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '40px',
        borderRadius: '12px',
      }}>
        <div style={{ maxWidth: '300px' }}>
          <p style={{fontSize:'16px'}}>Exclusive Offer <strong style={{backgroundColor:'#00B85333', padding:' 2px 10px',borderRadius:'15px',marginLeft:'10px'}}>-20% Off</strong></p>
          <h3 style={{ fontSize: '38px', fontWeight: 'bold' }}>Gerthesim Tend Inder Prosur</h3>
          <p style={{ fontSize: '18px', marginTop: '10px',fontWeight:'400px',color:'#202435' }}>
            Only this week. Don’t miss...
          </p>
          <p style={{ fontSize: '12px',color:'#202435' }}>from <strong style={{ fontSize: '30px', marginLeft: '10px',fontWeight:'400px',color:'#D51243' }}>$7.99</strong></p>
          <button className=" " style={{backgroundColor:'#ED174A', borderRadius:'15px', border:'none', padding:'4px 16px',color:'white', fontSize:'14px'}} 
          onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </div>
      <div style={{
        width: '600px',
        height: '350px',
        backgroundImage: `url(/images/home2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: '#fff',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '40px',
        borderRadius: '12px',
      }}>
      <div style={{ maxWidth: '300px' }}>
          <p style={{fontSize:'16px'}}>Exclusive Offer <strong style={{backgroundColor:'#00B85333', padding:' 2px 10px',borderRadius:'15px',marginLeft:'10px'}}>-20% Off</strong></p>
          <h3 style={{ fontSize: '38px', fontWeight: 'bold' }}>Gerthesim Tend Inder Prosur</h3>
          <p style={{ fontSize: '18px', marginTop: '10px',fontWeight:'400px',color:'white' }}>
            Only this week. Don’t miss...
          </p>
          <p style={{ fontSize: '12px',color:'white' }}>from <strong 
          style={{ fontSize: '30px', marginLeft: '10px',fontWeight:'400px',color:'#D51243' }}>$7.99</strong></p>
          <button className=" " 
          style={{backgroundColor:'#35AFA0', borderRadius:'15px', border:'none', padding:'4px 16px',color:'white', fontSize:'14px'}} onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </div>
    </div>

<div className="container my-5 position-relative" style={{ fontFamily: 'Inter' }}>
  <button
    className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
    onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
    disabled={startIndex === 0}
    style={{ zIndex: 10 }}
  >
    <FaChevronLeft />
  </button>

  <div className="d-flex flex-wrap justify-content-center gap-3 px-3">
    {products.slice(startIndex, startIndex + itemsPerPage).map((product) => (

      <div
        key={product.id}
        className="card border-1 text-center shadow-sm"
        style={{
          flex: "1 1 150px", 
          maxWidth: "200px",
          minWidth: "140px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/shop")}
      >
        <img
          src={product.image}
          className="card-img-top mx-auto"
          alt={product.name}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
            marginTop: "15px",
          }}
        />
        <div className="card-body">
          <h6 className="card-title fw-bold">{product.name}</h6>
          <p className="card-text text-muted">{product.items} items</p>
        </div>
      </div>
    ))}
  </div>

  <button
    className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
    onClick={() =>
      setStartIndex((prev) =>
        prev + 5 < products.length ? prev + 1 : prev
      )
    }
    disabled={startIndex + 5 >= products.length}
    style={{ zIndex: 10 }}
  >
    <FaChevronRight />
  </button>
</div>

<div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mb-1 text-center"
 style={{ fontFamily: 'Inter' }}>
  <div>
    <h3 className="text-success">Special Offers of the Week!</h3>
    <p style={{ color: '#9B9BB4', marginTop: '-10px' }}>
      Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.
    </p>
  </div>

  <div className="d-flex align-items-center mt-2 mt-md-0">
    <div className="time-box">{format(time.hours)}</div>
    <div className="colon">:</div>
    <div className="time-box">{format(time.minutes)}</div>
    <div className="colon">:</div>
    <div className="time-box">{format(time.seconds)}</div>
    <div className="colon">:</div>
    <div className="time-box">{format(time.milliseconds)}</div>
  </div>
</div>

    
<div className="d-flex justify-content-center flex-wrap gap-5 mb-5 mt-5" style={{border:'1px solid red'}} onClick={() => navigate('/shop')}>
  {mainProducts.slice(0, 4).map((product) => (
    <div
      key={product.id}
      className="card-home"
      style={{
        width: "270px",
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#fff',
        cursor: 'pointer',
        overflow: 'hidden'
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          height: '190px',
          objectFit: 'contain',
          padding: '10px',
          width: '100%',
        }}
      />
      <div className="card-body text-center p-2" >
        <h6 className="fw-bold" style={{ fontSize: '14px' }}>{product.title}</h6>
        <p className="text-success fw-bold mb-1" style={{ fontSize: '12px' }}>IN STOCK</p>
        <div className="d-flex justify-content-center align-items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-warning">★</span>
          ))}
          <span className="text-muted ms-2" style={{ fontSize: '11px' }}>1 review</span>
        </div>
        <h5 className="text-danger fw-bold" style={{ fontSize: '16px' }}>${product.price}</h5>

  <div className="d-flex justify-content-center align-items-center mb-2">
          <span className="text-muted ms-2" style={{ fontSize: '11px' }}>the available products:  </span>
            <span className="text-warning ">{product.available}</span>
        </div>
      </div>
    </div>
  ))}
</div>

     <div style={{
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      gap: '30px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      fontFamily:'Inter'
    }}>
      <div style={{
        width: '350px',
        height: '230px',
backgroundImage: `url(/images/crad1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'black',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '40px',
        borderRadius: '12px',
      }}>
        <div style={{ maxWidth: '200px' }}>
          <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>Organic Breakfast</h3>
          <p style={{ fontSize: '18px', marginTop: '10px',fontWeight:'400px',color:'#ED174A' }}>
            Bacola Weekend Discount
          </p>
          <button className=" " style={{backgroundColor:'#FF6048', borderRadius:'15px', border:'none', padding:'4px 16px',color:'white', fontSize:'14px'}} 
          onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </div>
      <div style={{
        width: '350px',
        height: '230px',
backgroundImage: `url(/images/crad2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'black',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '40px',
        borderRadius: '12px',
      }}>
        <div style={{ maxWidth: '200px' }}>
                    <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>Organic <br />
                       Baby Food</h3>
          <p style={{ fontSize: '18px', marginTop: '10px',fontWeight:'400px',color:'#ED174A' }}>
            Bacola Weekend Discount
          </p>
          <button className=" " style={{backgroundColor:'#FF6048', borderRadius:'15px', border:'none', padding:'4px 16px',color:'white', fontSize:'14px'}} 
          onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </div>
      <div style={{
        width: '350px',
        height: '230px',
        backgroundImage: `url(/images/crad3.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: '#fff',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '40px',
        borderRadius: '12px',
      }}>
      <div style={{ maxWidth: '200px' }}>
          <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>Organic Breakfasts</h3>
          <p style={{ fontSize: '18px', marginTop: '10px',fontWeight:'400px',color:'white' }}>
            Bacola Weekend Discount
          </p>
    
          <button className=" " 
          style={{backgroundColor:'#35AFA0', borderRadius:'15px', border:'none', padding:'4px 16px',color:'white', fontSize:'14px'}} onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </div>
    </div>


<div className="container my-5" style={{border:' 1px solid #EDEEF5',fontFamily:'Inter',fontWeight:'300px'}}>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="row">
             <div className="col-6 d-flex flex-column justify-content-center">
      {[
        'Beverages',
        'Biscuits & Snacks',
        'Breads & Bakery',
        'Breakfast & Dairy',
        'Frozen Foods',
        'Fruits & Vegetables',
        'Grocery & Staples',
        'Household Needs',
      ].map((item, index) => (
        <p key={index} className="mb-2 ps-3" style={{ fontSize: '25px' }}>
          {item}
        </p>
      ))}
    </div>
            <div className="col-6 position-relative ">
              <img src="/images/home8.png"  alt="Offer" style={{  width: '100%'  }}
              />
              <div
                className="position-absolute text-white offer-text"
                style={{
                  top: '20%',
                  left:0,
                  marginLeft:'20px',
                  padding: '10px 20px',
                    color:'black',
                    fontSize:"20px",
                    maxWidth:"300px"
                }}  >
                <span style={{color:'#ED174A'}}>delicious <br /><span style={{color:'black' ,fontSize:'28px', fontWeight:'200px'}}>all products</span></span>
                <h3 style={{color:'black', fontWeight:'bold' ,fontSize:'33px'}}>The freshest of</h3>
              <p style={{color:'#9B9BB4'}}>Just in Bacola</p>  
              </div>
            </div>
          </div>
          </div>
        <div className="col-lg-6 d-flex justify-content-center gap-4 flex-wrap">
          {mainProducts.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="card-home"
              style={{
                width: "170px",
                border: 'none',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
              onClick={() => navigate('/shop')}  >
              <img  src={product.image} alt={product.title}
                style={{
                  height: '190px',
                  objectFit: 'contain',
                  padding: '10px',
                  width: '100%',
                }}
              />
              <div className="card-body text-center p-2">
                <h6 className="fw-bold" style={{ fontSize: '14px' }}>{product.title}</h6>
                <p className="text-success fw-bold mb-1" style={{ fontSize: '12px' }}>IN STOCK</p>
                <div className="d-flex justify-content-center align-items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-warning">★</span>
                  ))}
                  <span className="text-muted ms-2" style={{ fontSize: '11px' }}>1 review</span>
                </div>
                <h5 className="text-danger fw-bold" style={{ fontSize: '16px' }}>${product.price}</h5>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
