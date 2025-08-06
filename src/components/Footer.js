import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen,faPhoneVolume, faTruck, faPercent, faTags  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div>
       <div style={{marginTop:'100px'}}>
      <section style={{
          backgroundColor: "#35AFA0",
          position: "relative",
          color: "white",
          overflow: "hidden",
        }}>
        <img src={`${process.env.PUBLIC_URL}/images/footer1.png`}
  alt="discount"
          style={{
            position: "absolute",
            right: "250px",
            bottom:"0px",
            top:"auto",
            maxHeight: "280px",
          }}/>

        <div className="container" style={{padding: "100px  20px" ,fontFamily:'Inter'}}>
          <p>$20 discount for your first order</p>
          <h2 style={{fontWeight: "bold" ,fontSize:'40px' }}>Join our newsletter and get...</h2>
          <p style={{fontSize:'14px', color:'#E3E4E6'
           }}>Join our email subscription now to get updates <br />on promotions and coupons</p>
          <div className="position-relative" style={{ maxWidth: "500px", marginTop: "20px" }}>
  <input  type="email"className="form-control pe-5"placeholder="Your email address"
    style={{ height: "50px", paddingRight: "100px" }}/>
  <button type="button"className=" position-absolute"
    style={{
      top: "0px",
      right: "5px",
      backgroundColor: "#35AFA0",
       color:"white" ,
      height: "40px",
      padding: "0 15px",
      fontSize: "14px",
      border:"none"
    }}  >
    Subscribe
  </button>
</div>
        </div>
      </section>

    <section className="py-3 border-top border-bottom" style={{ color: '#8f8f8fff', backgroundColor: '#F7F8FD' }}>
  <div className="container d-flex justify-content-center text-center flex-wrap align-items-center gap-3">
    
    <div className="d-flex align-items-center gap-2">
      <FontAwesomeIcon icon={faBoxOpen} className="me-2 fs-5" />
      <span>Everyday fresh products</span>
    </div>

    <div className="vr" style={{ height: '20px', backgroundColor: '#8f8f8fff', width: '1px' }}></div>

    <div className="d-flex align-items-center gap-2">
      <FontAwesomeIcon icon={faTruck} className="me-2 fs-5" />
      <span>Free delivery for order over $70</span>
    </div>

    <div className="vr" style={{ height: '20px', backgroundColor: '#8f8f8fff', width: '1px' }}></div>
    <div className="d-flex align-items-center gap-2">
      <FontAwesomeIcon icon={faPercent} className="me-2 fs-5" />
      <span>Daily Mega Discounts</span>
    </div>
    <div className="vr" style={{ height: '20px', backgroundColor: '#8f8f8fff', width: '1px' }}></div>
    <div className="d-flex align-items-center gap-2">
      <FontAwesomeIcon icon={faTags} className="me-2 fs-5" />
      <span>Best price on the market</span>
    </div>
  </div>
</section>

  <section className="py-5 border-top" style={{ backgroundColor: '#F7F8FD' }}>
  <div className="container">
    <div className="row justify-content-center text-center text-md-start">
      {[
        {
          title: "FRUIT & VEGETABLES",
          items: ["Fresh Vegetables", "Herbs & Seasonings", "Fresh Fruits", "Cuts & Sprouts", "Exotic Fruits & Veggies", "Packaged Produce", "Party Trays"]
        },
        {
          title: "BREAKFAST & DAIRY",
          items: ["Milk & Flavoured Milk", "Butter and Margarine", "Cheese", "Eggs Substitutes", "Honey", "Marmalades", "Sour Cream and Dips", "Yogurt"]
        },
        {
          title: "MEAT & SEAFOOD",
          items: ["Breakfast Sausage", "Dinner Sausage", "Beef", "Chicken", "Sliced Deli Meat", "Shrimp", "Wild Caught Fillets", "Crab and Shellfish", "Farm Raised Fillets"]
        },
        {
          title: "BEVERAGES",
          items: ["Water", "Sparkling Water", "Soda & Pop", "Coffee", "Milk & Plant-Based Milk", "Tea & Kombucha", "Drink Boxes & Pouches", "Craft Beer", "Wine"]
        },
        {
          title: "BREADS & BAKERY",
          items: ["Milk & Flavoured Milk", "Butter and Margarine", "Cheese", "Eggs Substitutes", "Honey", "Marmalades", "Sour Cream and Dips", "Yogurt"]
        }
      ].map((category, idx) => (
        <div className="col-6 col-md-2 mb-4" key={idx}>
          <h5>{category.title}</h5>
          <ul className="list-unstyled small" style={{ color: '#8f8f8fff' }}>
            {category.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


<footer className="bg-white border-top py-4">
  <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-4">
    <div style={{ color: '#8f8f8fff' }}>
      <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start text-black">
        <FontAwesomeIcon icon={faPhoneVolume} style={{ fontSize: '24px', color: '#35AFA0' }} />
        <strong style={{ fontSize: '20px', lineHeight: '1.2' }}>
          8 800 <br /> 555-55
        </strong>
      </div>
      <div>Working 8:00 - 22:00</div>
    </div>
    <div className="d-flex flex-column flex-md-row align-items-center gap-3">
      <div>
        <span>
          Download App on Mobile: <br />
          <strong style={{ color: '#8f8f8fff', fontSize: '14px' }}>
            15% discount on your first purchase
          </strong>
        </span>
      </div>
      <div className="d-flex align-items-center gap-2">
        <img src={`${process.env.PUBLIC_URL}/images/footer2.png`}
alt="App Store" style={{ height: "30px" }} />
        <img src={`${process.env.PUBLIC_URL}/images/footer3.png`}
 alt="Google Play" style={{ height: "30px" }} />
      </div>
      <div className="d-flex align-items-center gap-2">
        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '20px', color: '#35AFA0' }} />
        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '20px', color: '#35AFA0' }} />
        <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '20px', color: '#35AFA0' }} />
      </div>
    </div>

  </div>
</footer>

    </div>
    </div>
  );
}

export default Footer;
