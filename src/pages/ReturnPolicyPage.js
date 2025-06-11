import React from "react";
import { Link } from "react-router-dom";

function ReturnPolicyPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Return Policy</h2>
          <p>
            The following is the Return Policy of GBTS Builders Solution Ltd
          </p>
        </div>
      </section>

      <main className="page-container">
        <h2>Return Policy</h2>
        <p>
          At GBTS Builders Solution Ltd, your satisfaction is our top priority.
          If you are not completely satisfied with your purchase, we are here to
          help. Please read our return policy below for details on how to return
          or exchange your items.
        </p>

        <h3>1. Eligibility for Returns</h3>
        <ul>
          <li>
            Returns or exchanges are accepted within <strong>7 days</strong> of
            receiving your order.
          </li>
          <li>
            Items must be unused, in their original condition, and with all
            original packaging, tags, manuals, and accessories included.
          </li>
          <li>
            Certain products, such as custom orders, special orders, opened
            electrical items, or items marked as “final sale,” are not eligible
            for return. Please check with our team if you are unsure.
          </li>
        </ul>

        <h3>2. Return Process</h3>
        <ol>
          <li>
            Contact our customer support at{" "}
            <a href="mailto:ask@gbtsbuildingmaterials.com">
              ask@gbtsbuildingmaterials.com
            </a>{" "}
            or call <a href="tel:+2347017742003">+2347017742003</a> within 7
            days of receiving your product to initiate a return.
          </li>
          <li>
            Provide your order number, reason for return, and photos (if
            applicable).
          </li>
          <li>
            Our team will review your request and provide return instructions
            and the return address.
          </li>
        </ol>

        <h3>3. Return Shipping</h3>
        <ul>
          <li>
            Customers are responsible for the cost of return shipping, except in
            cases of defective or incorrect items received.
          </li>
          <li>
            We recommend using a trackable shipping service and retaining your
            shipping receipt.
          </li>
        </ul>

        <h3>4. Refunds & Exchanges</h3>
        <ul>
          <li>
            Once your return is received and inspected, we will notify you of
            the approval or rejection of your refund or exchange.
          </li>
          <li>
            If approved, refunds will be processed to your original payment
            method within 5–10 business days.
          </li>
          <li>
            Exchanges will be shipped as soon as the returned product is
            received and inspected.
          </li>
        </ul>

        <h3>5. Damaged or Defective Items</h3>
        <ul>
          <li>
            If you receive a damaged or defective product, please contact us
            immediately with photos and details.
          </li>
          <li>
            We will arrange for a replacement or refund at no additional cost to
            you.
          </li>
        </ul>

        <h3>6. Contact Us</h3>
        <p>
          For any questions about returns, exchanges, or our policy, please
          contact us at:
          <br />
          <a href="mailto:ask@gbtsbuildingmaterials.com">
            ask@gbtsbuildingmaterials.com
          </a>{" "}
          or call <a href="tel:+2347017742003">+2347017742003</a>.
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

export default ReturnPolicyPage;
