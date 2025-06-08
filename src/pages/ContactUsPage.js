import React from "react";
import { Link } from "react-router-dom";
import "../HomePage.css"; // Ensure this file exists and contains your styles

function ContactUsPage() {
  return (
    <>
                 
        {/* Hero Section */}
      <section className="hero">
        <h4>GBTS Builders Solution Ltd</h4>
        <p className="tagline">Various Ways to Contact us</p>
      </section>         

      <main className="page-container">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, inquiries, or feedback, feel free to reach out to us using the form below or through our contact details.
        </p>

        <section className="contact-form">
          <form action="mailto:ask@gbtsbuildingmaterials.com" method="post" encType="text/plain">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="contact-info">
          <h3>Our Contact Information</h3>
          <p><strong>Address:</strong> Shop 1, Jubilee market, Ikare Akoko 342211, Ondo State, Nigeria</p>
          <p><strong>Email:</strong> <a href="mailto:ask@gbtsbuildingmaterials.com">ask@gbtsbuildingmaterials.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+2347017742003">+2347017742003</a></p>
        </section>
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
          Shop 1 Jubilee Market, Ikare Akoko 342211, Ondo State, Nigeria.<br />
          Email: <a href="mailto:ask@gbtsbuildingmaterials.com">ask@gbtsbuildingmaterials.com</a><br />
          Phone: <a href="tel:+2347017742003">+2347017742003</a>
        </address>
        <div className="social-media">
          <a href="https://facebook.com/profile.php?id=61575683557550&mibextid=JRoKGi" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/gbtsstores" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com/gbtsstores" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://pinterest.com/gbtsstores" target="_blank" rel="noreferrer"><i className="fab fa-pinterest"></i></a>
          <a href="https://wa.me/7017742003" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
        <p className="copyright">© 2025 GBTS Builders Solution Ltd.</p>
      </footer>
    </>
  );
}

export default ContactUsPage;