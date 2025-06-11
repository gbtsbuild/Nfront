import React from "react";
import { Link } from "react-router-dom";

function TermsPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Terms of Service</h2>
          <p>
            The following is the Terms of Service of GBTS Builders Solution Ltd.
          </p>
        </div>
      </section>

      <main className="page-container">
        <h2>Terms and Conditions</h2>
        <p>
          Welcome to GBTS Builders Solution Ltd. By using our website and
          services, you agree to comply with and be bound by the following terms
          and conditions.
        </p>

        <h3>1. Use of the Website</h3>
        <p>
          The content of this website is for your general information and use
          only. It is subject to change without notice.
        </p>

        <h3>2. Intellectual Property</h3>
        <p>
          All trademarks, logos, and content on this site are the property of
          GBTS Builders Solution Ltd or its partners. Unauthorized use is
          prohibited.
        </p>

        <h3>3. Product Availability</h3>
        <p>
          We strive to ensure accurate product information and availability.
          However, errors may occur, and we reserve the right to correct them at
          any time without prior notice.
        </p>

        <h3>4. Pricing and Payment</h3>
        <p>
          Prices listed on our website are subject to change without notice.
          Payment must be made in full before dispatch of orders.
        </p>

        <h3>5. Limitation of Liability</h3>
        <p>
          We are not liable for any indirect or consequential damages resulting
          from your use of our website or products.
        </p>

        <h3>6. Returns and Refunds</h3>
        <p>
          Please refer to our <Link to="/return-policy">Return Policy</Link> for
          detailed information about returning products and obtaining refunds.
        </p>

        <h3>7. Privacy Policy</h3>
        <p>
          Your privacy is important to us. Please read our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link> to understand how we
          collect and use your information.
        </p>

        <h3>8. Governing Law</h3>
        <p>
          These terms are governed by the laws of Nigeria. Any disputes shall be
          resolved in the courts of Nigeria.
        </p>

        <h3>9. Changes to Terms</h3>
        <p>
          GBTS Builders Solution Ltd reserves the right to update these terms at
          any time. Users are encouraged to check this page periodically for
          updates.
        </p>
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
        <address style={{ fontSize: "0.85em" }}>
          Shop 1 Jubilee Market, Ikare Akoko 342211, Ondo State, Nigeria.
          <br />
          Email:{" "}
          <a href="mailto:ask@gbtsbuildingmaterials.com">
            ask@gbtsbuildingmaterials.com
          </a>
          <br />
          Phone: <a href="tel:+2347017742003">+2347017742003</a>
        </address>
        <div className="social-media">
          <a
            href="https://facebook.com/profile.php?id=61575683557550&mibextid=JRoKGi"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/gbtsstores" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/gbtsstores"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://pinterest.com/gbtsstores"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="https://wa.me/7017742003" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <p className="copyright">© 2025 GBTS Builders Solution Ltd.</p>
      </footer>
    </>
  );
}

export default TermsPage;
