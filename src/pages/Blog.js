import React from 'react';
const Blog = () => {
  return (
    <div>
      <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="mb-5">
            <img
              src="/images/blog1.png" 
              alt="blog1"
              className="img-fluid rounded"  />
            <h5 className="mt-3" style={{color:'#9B9BB4',fontSize:'13px',fontWeight:'600px',fontFamily:'Inter'}}>GROCERY</h5>
            <h3 className="fw-bold" style={{color:'#202435',fontSize:'39px',fontWeight:'600px',fontFamily:'Inter'}}>
            But I must explain to you how all this mistaken idea
            </h3>
            <p className="text-muted" style={{color:'#9B9BB4',fontSize:'13px',fontWeight:'600px',fontFamily:'Inter'}}>Jan 13 2025 • Share 15K</p>
            <p className="text-black" style={{fontSize:'18px',fontWeight:'400px',fontFamily:'Inter'}}>
Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,
vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...            </p>
          </div>
          <div className="mb-5">
            <img
              src="/images/blog2.png" 
              alt="blog2"
              className="img-fluid rounded"
            />
            <h5 className="mt-3" style={{color:'#9B9BB4',fontSize:'13px',fontWeight:'600px',fontFamily:'Inter'}}>GROCERY</h5>
            <h3 className="fw-bold" style={{color:'#202435',fontSize:'39px',fontWeight:'600px',fontFamily:'Inter'}}>
              The Problem With Typefaces on the Web
            </h3>
            <p className="text-muted" style={{color:'#9B9BB4',fontSize:'13px',fontWeight:'600px',fontFamily:'Inter'}}>Jan 13 2025 • Share 15K</p>
            <p className="text-black" style={{fontSize:'18px',fontWeight:'400px',fontFamily:'Inter'}}>
Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,
vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...            </p>
          </div>
        </div>

        <div className="col-lg-4">
<div className="col-lg-4">
  <div className="mb-5">
    <h6 className="fw-bold text-uppercase mb-3 border-bottom pb-2"  style={{width:'230px' , color:'#000000ff',fontSize:'17px',fontWeight:'600px',fontFamily:'Inter'}}>Recent Posts</h6>
    <ul className="list-unstyled" style={{width:'230px' , color:'#000000ff',fontSize:'17px',fontWeight:'500px',fontFamily:'Inter'}}>
      <li className="mb-3 d-flex align-items-center gap-2">
        <img
          src="/images/blog11.png"
          alt="Post"
          className="rounded-circle"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
        <a href="#" className="text-decoration-none text-dark small">
          Dill must explain to you how all this mistaken idea
        </a>
      </li>
      <li className="mb-3 d-flex align-items-center gap-2">
        <img
          src="/images/blog22.png"
          alt="Post"
          className="rounded-circle"
          style={{width: '50px', height: '50px', objectFit: 'cover' }}
        />
        <a href="#" className="text-decoration-none text-dark small">
          The Problem With Typefaces on the Web
        </a>
      </li>
      <li className="mb-3 d-flex align-items-center gap-2">
        <img
          src="/images/blog3.png"
          alt="Post"
          className="rounded-circle"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
        <a href="#" className="text-decoration-none text-dark small">
          English Breakfast Tea With Tasty Donut Desserts
        </a>
      </li>
    </ul>
  </div>
</div>
    <div className="mb-5">
      <h5 className="fw-bold" style={{width:'230px' , color:'#191313ff',fontSize:'17px',fontWeight:'600px',fontFamily:'Inter',marginBottom:'30px'}}>SOCIAL MEDIA</h5>
      <div className="d-flex flex-column gap-2">
              <button className="btn w-100" style={{backgroundColor:'#3B5998',color:'white'}}>Facebook</button>
              <button className="btn  w-100"  style={{backgroundColor:'#CC2366',color:'white'}}>Instagram</button>
              <button className="btn w-100"  style={{backgroundColor:'#1DA1F2',color:'white'}}>Twitter</button>
              <button className="btn w-100"  style={{backgroundColor:'#FF4500',color:'white'}}>Reddit</button>
              <button className="btn  w-100"  style={{backgroundColor:'#E60023',color:'white'}}>Pinterest</button>
            </div>
          </div>
            <h5 className="fw-bold" style={{width:'230px' , color:'#191313ff',fontSize:'17px',fontWeight:'600px',fontFamily:'Inter',marginBottom:'30px'}}>Widget Banner</h5>
          <div className="mb-5">
            <img
              src="/images/shop-fil.png"
              alt="Banner"
              className="img-fluid rounded"
            />
          </div>
          {/* Tags */}
          <div className="mb-5">
                <h6 className="fw-bold text-uppercase mb-3 border-bottom pb-2"  
                style={{width:'230px' , color:'#000000ff',fontSize:'17px',fontWeight:'600px',fontFamily:'Inter'}}>TAGS</h6>
            <div className="d-flex flex-wrap gap-2">
              {['ecommerce', 'food', 'grocery', 'store', 'online', 'shop', 'store', 'shopify'].map((tag, i) => (
                <span key={i} className="badge  px-2 py-1" 
                style={{backgroundColor:'#EDEEF5', width:'99px',fontSize:'14px',fontWeight:'300px',fontFamily:'Inter' ,color:'#000000'}}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Blog;
