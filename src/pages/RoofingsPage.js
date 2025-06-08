import React from "react";
import { Link } from "react-router-dom";
import ".pages/HomePage.css"; // Adjusted path: because HomePage.css is in /src/pages

function RoofingsPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Roofings</h2>
          <p>
            Discover top-quality roofing materials for every project.
            Durability, style, and value—built for you by GBTS Builders Solution
            Ltd.
          </p>
        </div>
      </section>
      <main className="page-container">
        <h2>Our Roofing Products</h2>
        <p>Content for roofings goes here...</p>
        {/* Add actual roofing products or information here as needed */}
      </main>
      <footer>
        <div className="footer-links">
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/return-policy">Return Policy</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/terms">Terms of Service</Link>
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

export default RoofingsPage;
