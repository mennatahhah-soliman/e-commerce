import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faCartShopping, faShoppingCart, faShop, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { search, setSearch } = useContext(SearchContext);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <header>
      <div style={{ backgroundColor: "#35AFA0" }} className="text-white py-2 small">
        <div className="container d-flex justify-content-between align-items-center">
          <span>
            <FontAwesomeIcon icon={faHand} className="me-2" />
            Secure delivery without contacting courier
          </span>
          <div className="d-none d-md-block">
            <NavLink to="/about" className="text-white text-decoration-none me-3">
              About
            </NavLink>
            <NavLink to="/contact" className="text-white text-decoration-none">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      
      <div className="py-3 bg-white border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <div
            className="fs-3 fw-bold"
            style={{ color: "#35AFA0", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <FontAwesomeIcon icon={faCartShopping} className="me-2" />
            Basket
          </div>
          
          <div className="input-group w-50">
            <input type="text" className="form-control" placeholder="Search products..." value={search}
              onChange={(e) => {  setSearch(e.target.value);
                if (e.target.value.trim()) navigate("/shop");
              }} />
            <span className="input-group-text bg-white">
              <FontAwesomeIcon icon={faSearchengin} />
            </span>
          </div>

          <div onClick={() => navigate("/checkout")} style={{ cursor: "pointer" }}  className="d-flex align-items-center gap-2"  >

            <div style={{ position: "relative" }}>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  background: "#fa4e3f",
                  color: "#fff",
                  borderRadius: "50%",
                  fontSize: "12px",
                  padding: "2px 6px",
                }}
              >
                {totalItems}
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="py-2 border-bottom">
        <div className="container d-flex justify-content-center gap-5">
          <NavLink to="/" className="text-muted text-decoration-none">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-muted text-decoration-none">
            <FontAwesomeIcon icon={faShop} className="me-1" />
            Shop
          </NavLink>
          <NavLink to="/blog" className="text-muted text-decoration-none">
            <FontAwesomeIcon icon={faBlog} className="me-1" />
            Blog
          </NavLink>
          <NavLink to="/about" className="text-muted text-decoration-none">
            About
          </NavLink>
          <NavLink to="/contact" className="text-muted text-decoration-none">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;