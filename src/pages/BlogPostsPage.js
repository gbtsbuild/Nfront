import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Adjust if your CSS is elsewhere
import BlogPostsPage from "./pages/BlogPostsPage";
function BlogPostsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h2>GBTS Blog Posts</h2>
        <p className="tagline">
          All About The Right Materials for Your Projects
        </p>
      </section>

      <main className="page-container">
        <h1>Our Latest Blog Posts</h1>
        <p>
          Stay updated with industry trends, product highlights, and helpful
          tips from GBTS Builders Solution Ltd.
        </p>

        <section className="blog-grid">
          <article className="blog-card">
            <img src="/images/blog1.jpg" alt="Trendy Roofing Options" />
            <h3>
              <Link to="/blog-post1">
                Top Roofing Materials for Modern Homes
              </Link>
            </h3>
            <p>
              Discover the latest roofing materials that combine style,
              durability, and sustainability for your next project.
            </p>
            <Link to="/blog-post1" className="cta-button">
              Read More
            </Link>
          </article>

          <article className="blog-card">
            <img
              src="https://collection.cloudinary.com/dcxga7ojb/f1cc302a2750706d339e759857842839"
              alt="Security measures are non-negotiable"
            />
            <h3>
              Securing Your Asset: an Appraisal of Innovative Locks and CCTV
            </h3>
            <p>
              Everyone would want to do everything within their ambit to
              guarantee the safety and security of their lives.
            </p>
            <p>
              In the same vein, the security of highly valued assets such as
              documents and property is just as crucial.
            </p>
            <Link to="/blog-posts2" className="read-more">
              Read More
            </Link>
          </article>

          <article className="blog-card">
            <img src="/images/blog2.jpg" alt="Home Improvement Tips" />
            <h3>
              <Link to="/blog-post2">Simple Home Improvement Projects</Link>
            </h3>
            <p>
              Learn how to enhance your space with budget-friendly updates that
              add style and function.
            </p>
            <Link to="/blog-post2" className="cta-button">
              Read More
            </Link>
          </article>

          <article className="blog-card">
            <img src="/images/blog3.jpg" alt="Sustainable Building" />
            <h3>
              <Link to="/blog-post3">Sustainable Building Materials</Link>
            </h3>
            <p>
              Explore the eco-friendly materials that can reduce your carbon
              footprint and save costs over time.
            </p>
            <Link to="/blog-post3" className="cta-button">
              Read More
            </Link>
          </article>

          {/* Add more blog cards as needed */}
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

export default BlogPostsPage;
