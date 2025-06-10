import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Adjust the path if your CSS file is elsewhere
import securityCamerasImg from "./images/security-cameras.jpg"; // <-- Import your image

function SecurityCamerasPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Security Cameras</h2>
          <p>Shop Innovative Cameras that Give You Peace of Mind</p>
        </div>
      </section>

      <main className="page-container">
        <h2>Security Cameras</h2>
        <p>Content for security cameras goes here...</p>
        {/* Add actual security camera products or information here as needed */}
      </main>
      <footer className="footer">
        <div className="footer-links">
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/return-policy">Return Policy</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/blog-posts">Blog</Link>
        </div>
        <address>
          Shop 1 Jubilee Market, Ikare Akoko 342211, Ondo State, Nigeria.
          <br />
          Email:{" "}
          <a href="mailto:ask@gbtsbuildingmaterials.com">
            ask@gbtsbuildingmaterials.com
          </a>
          <br />
          Phone: <a href="tel:+2347017742003">+2347017742003</a>
        </address>
        <p className="copyright">© 2025 GBTS Builders Solution Ltd.</p>
      </footer>
    </>
  );
}

export default SecurityCamerasPage;
