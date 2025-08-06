import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Blog from './pages/Blog';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/blog" element={<Blog />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
