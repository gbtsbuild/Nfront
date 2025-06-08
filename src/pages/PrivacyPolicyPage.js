import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Adjust if your CSS is elsewhere
import PrivacyPolicyPage from "./pages/PrivacyPolicyPages";

function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h2>Privacy Policy</h2>
        <p className="tagline">
          {" "}
          The following is the Privacy Policy of GBTS Builders Solution Ltd
        </p>
      </section>
      <main className="page-container">
        <h3>Privacy Policy</h3>

        <p>
          At GBTS Builders Solution Ltd, we value your privacy and are committed
          to protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard your data when you visit our
          website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and payment details when you:
        </p>
        <ul>
          <li>Make a purchase</li>
          <li>Subscribe to our newsletter</li>
          <li>Contact us via forms or email</li>
        </ul>
        <p>
          We also collect non-personal information like browser type, IP
          address, and website usage statistics to improve our services.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>Your information may be used to:</p>
        <h2>3. Data Protection</h2>
        <p>
          We implement security measures such as SSL encryption, firewalls, and
          secure data storage to protect your information. However, no system is
          100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information. We may share your
          data with trusted partners for essential services (e.g., payment
          processing) but only under strict confidentiality agreements.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. To exercise these rights or withdraw consent, please
          contact us at{" "}
          <a href="mailto:ask@gbtsbuildingmaterials.com">
            ask@gbtsbuildingmaterials.com
          </a>
          .
        </p>

        <h2>6. Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience. You can
          disable cookies in your browser settings, but some features may not
          work as intended.
        </p>

        <h2>7. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the revised date. Please review it
          periodically.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at:
        </p>
        <p>
          Email:{" "}
          <a href="mailto:ask@gbtsbuildingmaterials.com">
            ask@gbtsbuildingmaterials.com
          </a>
          <br />
          Phone: <a href="tel:+2347017742003">+2347017742003</a>
        </p>
      </main>

      <footer>
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

export default PrivacyPolicyPage;
