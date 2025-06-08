import React from "react";
import { Link } from "react-router-dom";
import ".pages/HomePage"; // Optional: Create a CSS file if needed

const AboutPage = () => {
  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <h2>About Us</h2>
        <p className="tagline">
          Find Out More About Our Company - GBTS Builders Solution Ltd
        </p>
      </section>

      <p>
        Welcome to <strong>GBTS Builders Solution Ltd</strong> – your reliable
        source for all building materials and home improvement needs. Our
        company is committed to providing quality products that meet both
        functionality and aesthetic standards.
      </p>

      <h3>Our Story</h3>
      <p>
        Founded in October 2023, GBTS Builders Solution Ltd was created to
        bridge the gap between premium building materials and affordability. Our
        passion lies in offering homeowners, contractors, and businesses a
        one-stop solution for their construction and renovation needs.
      </p>

      <h3>Our Mission</h3>
      <p>
        Our mission is to deliver exceptional quality, service, and value. We
        aim to simplify the buying process for building materials while offering
        competitive pricing and a wide range of products.
      </p>

      <h3>Our Products</h3>
      <p>
        Our catalog includes everything from roofings and hand tools to locks,
        security cameras, and appliances. Each product is carefully sourced to
        meet the highest standards of durability and design.
      </p>

      <h3>Why Choose Us?</h3>
      <ul>
        <li>Extensive product selection</li>
        <li>Competitive pricing</li>
        <li>Fast and reliable delivery</li>
        <li>Exceptional customer service</li>
        <li>Trusted by homeowners and professionals alike</li>
      </ul>

      <h3>Contact Us</h3>
      <p>
        We’d love to hear from you! Reach out via our{" "}
        <Link to="/contact-us">Contact Page</Link>, email us at{" "}
        <a href="mailto:ask@gbtsbuildingmaterials.com">
          ask@gbtsbuildingmaterials.com
        </a>
        , or call us at <a href="tel:+2347017742003">+2347017742003</a>.
      </p>
    </main>
  );
};

export default AboutPage;
