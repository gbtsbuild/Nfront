// src/components/Footer.js

import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css"; // Optional: if you want to style it separately

function Footer() {
  return (
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
  );
}

export default Footer;
