import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { CartContext } from "../context/CartContext";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const navigate = useNavigate();
  const [stockFilter, setStockFilter] = useState("all");
  const { search } = useContext(SearchContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
                const initialQuantities = {};
        data.forEach((product) => {
          initialQuantities[product.id] = 0;
        });
        setQuantities(initialQuantities);
      
      });
  }, []); 

  useEffect(() => {
    if (Object.keys(quantities).length > 0) {
      localStorage.setItem('shopQuantities', JSON.stringify(quantities));
    }
  }, [quantities]);
  
  useEffect(() => {
    return () => { };}, []);
  
  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };
  
  const handleDecrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) - 1) }));
  };
  
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setMainImage(product.image);
  };
  
  const closePopup = () => {
    setSelectedProduct(null);
    setMainImage(null);
  };
  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    
    const matchesStock =
      stockFilter === "all"
        ? true
        : stockFilter === "in"
        ? product.available > 0
        : product.available === 0;

    return matchesSearch && matchesStock;
  });
  
  const handleAddToCart = (product, quantity) => {
    if (quantity > 0) {
      addToCart(product, quantity);
            setQuantities(prev => ({ ...prev, [product.id]: 0 }));
      navigate('/checkout');
    }
  };
  
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-2 mb-4">
          <div style={{ padding: '20px', border: 'none' }}>
            <h4
              className="mb-3 mt-4"
              style={{
                color: '#202435',
                fontFamily: 'Dosis',
                fontSize: '19px',
                fontWeight: '600',
              }}
            >
              Availability
            </h4>

            <div
              className="mb-3"
              style={{
                color: '#71778E',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: '400',
              }}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stock"
                  id="all"
                  checked={stockFilter === "all"}
                  onChange={() => setStockFilter("all")}
                />
                <label className={`form-check-label ${stockFilter === "all" ? "active-filter" : ""}`} htmlFor="all">All</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stock"
                  id="inStock"
                  checked={stockFilter === "in"}
                  onChange={() => setStockFilter("in")}
                />
                <label className={`form-check-label ${stockFilter === "in" ? "active-filter" : ""}`} htmlFor="inStock">In Stock</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stock"
                  id="outStock"
                  checked={stockFilter === "out"}
                  onChange={() => setStockFilter("out")}
                />
                <label className={`form-check-label ${stockFilter === "out" ? "active-filter" : ""}`} htmlFor="outStock">Out of Stock</label>
              </div>
            </div>

            <div className="mt-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/shop-fil.png`}
                alt="Sidebar Banner"
                style={{ width: '100%', border: 'none' }}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          {/* Hero Section */}
          <div className="position-relative mb-4 w-100" style={{ height: '240.47px' }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/shop-her.png`}
              alt="Shop Banner"
              className="w-100 h-100"
              style={{
                objectFit: 'fill',
                borderRadius: '8px',
                border: '1px solid #EDEEF5',
              }}
            />
            <h2
              className="position-absolute fw-bold text-white"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '25px',
              }}
            >
              <span
                style={{
                  color: ' #202435',
                  fontFamily: 'Inter',
                  fontSize: '24px',
                  fontWeight: '200',
                }}
              >
                Organic Meals Prepared
              </span>
              <br />
              <span
                style={{
                  color: ' #202435',
                  fontFamily: 'Inter',
                  fontSize: '30px',
                  fontWeight: '600',
                }}
              >
                Delivered to{' '}
                <span style={{ color: ' #00B853' }}>
                  your Home
                </span>
              </span>
              <br />
              <span
                style={{
                  color: ' #9B9BB4',
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  fontWeight: '400',
                }}
              >
                Fully prepared & delivered nationwide
              </span>
            </h2>
          </div>

          {/* Products Grid */}
          <div className="row">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="col-6 col-md-4 col-lg-3 mb-4"
                onClick={() => handleProductClick(product)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="d-flex flex-column justify-content-between h-100"
                  style={{
                    borderStyle: 'solid',
                    borderWidth: '0px 1px 1px 0px',
                    borderColor: '#EDEEF5',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}${product.image}`}
                    alt={product.title}
                    style={{
                      height: '200px',
                      objectFit: 'contain',
                      padding: '10px',
                      width: '100%',
                    }}
                  />
                  <div className="card-body p-2 text-center">
                    <h6 className="fw-bold" style={{ fontSize: '15px' }}>
                      {product.title}
                    </h6>
                    <p className={`fw-bold mb-1 ${product.available > 0 ? 'text-success' : 'text-danger'}`} style={{ fontSize: '13px' }}>
                      {product.available > 0 ? 'IN STOCK' : 'OUT OF STOCK'}
                    </p>
                    <div className="d-flex justify-content-center align-items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-warning">★</span>
                      ))}
                      <span className="text-muted ms-2" style={{ fontSize: '12px' }}>
                        1 review
                      </span>
                    </div>
                    <h5 className="text-danger fw-bold">${product.price}</h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center px-3 pb-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDecrement(product.id);
                      }}
                      className="btn btn-light text-dark border"
                      style={{ borderRadius: '50%' }}
                    >
                      <FaMinus />
                    </button>
                    <div className="fw-bold">{quantities[product.id] || 0}</div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIncrement(product.id);
                      }}
                      className="btn text-white border"
                      style={{ backgroundColor: '#FFD700', borderRadius: '50%' }}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Popup */}
      {selectedProduct && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
        >
          <div
            className="bg-white p-4 rounded"
            style={{ maxWidth: '800px', width: '90%', maxHeight: '90%', overflowY: 'auto' }}
          >
            <div className="text-end">
              <button onClick={closePopup} className="btn-close"></button>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={`${process.env.PUBLIC_URL}${mainImage || selectedProduct.image}`} alt={selectedProduct.title} className="img-fluid rounded mb-3"/>
                <div className="d-flex gap-2">
                  {(selectedProduct.extraImages || [selectedProduct.image]).map((img, idx) => (
                    <img
                      key={idx}
                      src={`${process.env.PUBLIC_URL}${img}`}
                      alt={`Thumbnail ${idx}`}
                      className="img-thumbnail"
                      style={{ width: '80px', height: '80px', objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => setMainImage(img)}
                    />
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <h3 style={{ color: '#35AFA0', fontSize: '22px', fontWeight: '500' }}>
                  {selectedProduct.title}
                </h3>
                <p style={{ color: '#000000ff' }}>{selectedProduct.brand}</p>
                <p style={{ color: ' #3f3f3fa4', fontSize: '16px', fontWeight: '500' }}>
                  {selectedProduct.description}
                </p>
                <p style={{ color: ' #3f3f3fa4', fontSize: '16px', fontWeight: '500' }}>
                  <strong style={{ color: '#35AFA0' }}>Ingredients:</strong>{' '}
                  {selectedProduct.ingredients?.join(', ')}
                </p>
                <p className="text-danger">
                  <strong style={{ color: '#35AFA0' }}>Delivery:</strong> {selectedProduct.delivery}
                </p>
                <h4 className="text-danger">${selectedProduct.price}</h4>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#F3F5F9',
                    borderRadius: '8px',
                    height: '50px',
                    width: '100%',
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDecrement(selectedProduct.id);
                      }}
                      className="btn text-dark"
                    >
                      <FaMinus />
                    </button>

                    <div className="fw-bold fs-5 text-center" style={{ minWidth: '30px' }}>
                      {quantities[selectedProduct.id] || 0}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIncrement(selectedProduct.id);
                      }}
                      className="btn text-black"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button
                  className="btn mt-3 w-100 text-white"
                  style={{ backgroundColor: '#35AFA0' }}
                  onClick={() => handleAddToCart(selectedProduct, quantities[selectedProduct.id] || 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;