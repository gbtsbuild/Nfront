import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h4>GBTS Builders Solution Ltd</h4>
        <p className="tagline">Your One-Stop-Store for Building Materials</p>
      </section>

      {/* Main Content */}
      <main>
        {/* Featured Product */}
        <section className="featured-products">
          <h2>Featured Product of the Week</h2>
          <div className="product">
            <img
              src="https://res.cloudinary.com/dcxga7ojb/image/upload/v1748376893/Lock4.jpg"
              alt="Featured Product"
            />
            <h3>Home Security Smart Lock</h3>
            <p className="price">₦108,000</p>
            <p className="description">
              Keyless, wireless & app enabled. Records those who entered & exited. It can be controlled remotely from anywhere in the world.
            </p>
            <a className="cta-button" href="products.html">Shop Now</a>
          </div>
        </section>

        {/* Category Sections */}
        <div className="section-container">
          <section>
            <h2>Roofings</h2>
            <img src="https://res.cloudinary.com/dcxga7ojb/image/upload/v1748453709/roofnw1.jpg" alt="Roofings" />
            <p>Discover our wide range of roofing materials that combine durability with elegance.</p>
            <a className="cta-button" href="roofings.html">Explore Roofings</a>
          </section>
        </div>
        {/* ... other sections like Hand Tools, Locks & Knobs, etc. */}
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-links">
          <a href="about-us.html">About Us</a>
          <a href="contact-us.html">Contact Us</a>
          <a href="return-policy.html">Return Policy</a>
          <a href="faq.html">FAQ</a>
          <a href="terms.html">Terms of Service</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="blog-posts.html">Blog</a>
        </div>
        <address>
          Shop 1 Jubilee Market, Ikare Akoko 342211, Ondo State, Nigeria.<br />
          Email: <a href="mailto:ask@gbtsbuildingmaterials.com">ask@gbtsbuildingmaterials.com</a><br />
          Phone: <a href="tel:+2347017742003">+2347017742003</a>
        </address>
        <div className="social-media">
          <a href="https://facebook.com/profile.php?id=61575683557550&mibextid=JRoKGi" target="_blank">rel="noopener noreferrer"<i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/gbtsstores" target="_blank">rel="noreferrer"<i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com/gbtsstores" target="_blank"> rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://pinterest.com/gbtsstores" target="_blank"> rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a>
          <a href="https://wa.me/7017742003" target="_blank"> rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
        <p className="copyright">© 2025 GBTS Builders Solution Ltd.</p>
      </footer>
    </div>
  );
};

export default Home;