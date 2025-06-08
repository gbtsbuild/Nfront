import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Adjust path if the CSS file is elsewhere
import FAQPage from "./pages/FAQPage";

function FAQPage() {
  return (
    <>
      Questions
      <main className="page-container">
        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>1. What products do you sell?</h3>
        <p>
          We offer a wide range of high-quality building materials including
          cement, steel, roofing sheets, paints, plumbing supplies, electrical
          fittings, tiles, and more.
        </p>

        <h3>2. Do you deliver?</h3>
        <p>
          Yes! We offer reliable delivery services for all orders. Delivery fees
          and timelines vary depending on your location and order size.
        </p>

        <h3>3. How can I place an order?</h3>
        <p>
          You can place an order directly through our website by browsing our
          products and adding items to your cart. For bulk orders or custom
          requests, you can also contact us directly.
        </p>

        <h3>4. Do you offer discounts on bulk purchases?</h3>
        <p>
          Yes, we provide special pricing and discounts on large quantity
          orders. Please reach out to our sales team for a custom quote.
        </p>

        <h3>5. What payment methods do you accept?</h3>
        <p>
          We accept major payment methods including PayPal, Google Pay,
          credit/debit cards, bank transfers, mobile payments, etc. depending on
          your location and choice.
        </p>

        <h3>6. Can I return or exchange a product?</h3>
        <p>
          Yes, returns or exchanges are allowed within 7 days of purchase,
          provided the item is unused and in original condition. Some exclusions
          apply—please see our return policy for details.
        </p>

        <h3>7. Do you provide product installation services?</h3>
        <p>
          While we don’t directly offer installation, we can connect you with
          trusted professionals in your area.
        </p>

        <h3>8. How do I contact customer support?</h3>
        <p>
          You can reach us via the contact form on our website, email us at{" "}
          <a href="mailto:ask@gbtsbuildingmaterials.com">
            ask@gbtsbuildingmaterials.com
          </a>
          , or call us at <a href="tel:+2347017742003">+2347017742003</a>.
        </p>

        <h3>9. Where are you located?</h3>
        <p>
          We have our store at Shop 1, Jubilee market, Ikare Akoko 342211, Ondo
          State, Nigeria. We intend to have several other branches within and
          beyond Nigeria as we move onward in the pursuit of our vision.
        </p>

        <h3>10. Are your products certified and of high quality?</h3>
        <p>
          Absolutely. We only source from trusted manufacturers and ensure all
          products meet industry standards.
        </p>
      </main>
      <footer>
        <div className="footer-links">
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/return-policy">Return Policy</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/terms">Terms of Service</Link>
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

export default FAQPage;
