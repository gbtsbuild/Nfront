import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const categories = [
  {
    name: 'Roofings',
    link: '/roofings',
    image: '/images/roofings.jpg'
  },
  {
    name: 'Hand Tools',
    link: '/hand-tools',
    image: '/images/hand-tools.jpg'
  },
  {
    name: 'Locks & Knobs',
    link: '/locks-knobs',
    image: '/images/locks-knobs.jpg'
  },
  {
    name: 'Security Cameras',
    link: '/security-cameras',
    image: '/images/security-cameras.jpg'
  },
  {
    name: 'Appliances',
    link: '/appliances',
    image: '/images/appliances.jpg'
  }
];

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>GBTS Builders Solution Ltd</h1>
          <p className="tagline">Your One-Stop-Store for Building Materials</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Why Choose GBTS */}
      <section className="why-choose section-spacing">
        <h2 className="section-title">Why Choose GBTS?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <i className="fas fa-truck"></i>
            <h3>Fast Delivery</h3>
            <p>Nationwide delivery of all materials at unbeatable speed.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-check-circle"></i>
            <h3>Quality Assurance</h3>
            <p>We sell genuine and durable building products.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>Our experts are always ready to help with your inquiries.</p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="featured-products section-spacing">
        <h2 className="section-title">Shop by Category</h2>
        <div className="products-grid">
          {categories.map((item, idx) => (
            <div className="product-card" key={idx}>
              <div className="product-image">
                <img src={item.image} alt={item.name} />
                <div className="product-overlay">
                  <h3>{item.name}</h3>
                </div>
              </div>
              <Link to={item.link}>
                <button className="product-button">Explore</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="blog-excerpts section-spacing">
        <h2 className="section-title">From Our Blog</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <h3>Top 5 Roofing Materials in 2025</h3>
            <p>Explore the most durable and cost-effective options for your next building project.</p>
            <Link to="/blog-posts" className="read-more">Read More</Link>
          </div>
          <div className="blog-card">
            <h3>Why Smart Locks Are Changing Home Security</h3>
            <p>Learn how keyless entry systems can secure your property and simplify access.</p>
            <Link to="/blog-posts" className="read-more">Read More</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/return-policy">Return Policy</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/blog-posts">Blog</Link>
        </div>
        <address>
          Shop 1 Jubilee Market, Ikare Akoko 342211, Ondo State, Nigeria.<br />
          Email: <a href="mailto:ask@gbtsbuildingmaterials.com">ask@gbtsbuildingmaterials.com</a><br />
          Phone: <a href="tel:+2347017742003">+2347017742003</a>
        </address>
        <div className="social-media">
          <a href="https://facebook.com/profile.php?id=61575683557550" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/gbtsstores" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com/gbtsstores" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://pinterest.com/gbtsstores" target="_blank" rel="noreferrer"><i className="fab fa-pinterest"></i></a>
          <a href="https://wa.me/7017742003" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
        <p className="copyright">© 2025 GBTS Builders Solution Ltd.</p>
      </footer>
    </div>
  );
};

export default HomePage;