import React from "react";
import "../styles/HomePage.css"; // Ensure this CSS is properly imported in HomePage or App

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to GBTS Builders Solution Ltd</h1>
        <p>Your One-Stop-Store for Quality Building Materials</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
