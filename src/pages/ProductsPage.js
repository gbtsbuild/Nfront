import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Adjust path as needed

const productsData = [
  {
    id: 1,
    category: "Roofings",
    image:
      "https://res.cloudinary.com/dcxga7ojb/image/upload/v1747685814/roof5.jpg",
    title: "Classic Roofing Sheets",
    price: "₦65,000",
    description: "Durable and stylish sheets for your perfect roof.",
  },
  {
    id: 2,
    category: "Hand Tools",
    image:
      "https://res.cloudinary.com/dcxga7ojb/image/upload/v1747730406/istockphoto-596042932-612x612_1_ryfysn.jpg",
    title: "Precision Screwdriver Set",
    price: "₦5,000",
    description: "High-quality tools for professional use.",
  },
  {
    id: 3,
    category: "Locks & Knobs",
    image:
      "https://res.cloudinary.com/dcxga7ojb/image/upload/v1747730443/Lock3.jpg",
    title: "Home Security Smart Lock",
    price: "₦108,000",
    description: "Keyless, wireless & app enabled for total control.",
  },
  {
    id: 4,
    category: "Security Cameras",
    image:
      "https://res.cloudinary.com/dcxga7ojb/image/upload/v1747726295/cam.jpg",
    title: "Smart Surveillance Camera",
    price: "₦85,000",
    description: "Advanced security technology for your peace of mind.",
  },
  {
    id: 5,
    category: "Appliances",
    image:
      "https://res.cloudinary.com/dcxga7ojb/image/upload/v1747726416/appliances.jpg",
    title: "Energy-Efficient Refrigerator",
    price: "₦250,000",
    description: "Modern design and energy-saving performance.",
  },
];

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Our Products</h1>
          <p>Our Wide Range of Products</p>
        </div>
      </section>
      <main className="page-container">
        <h2>Our Products</h2>
        <div className="products-header">
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Roofings">Roofings</option>
              <option value="Hand Tools">Hand Tools</option>
              <option value="Locks & Knobs">Locks & Knobs</option>
              <option value="Security Cameras">Security Cameras</option>
              <option value="Appliances">Appliances</option>
            </select>
          </div>
        </div>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="price">{product.price}</p>
                <p>{product.description}</p>
                <a href="#" className="cta-button">
                  View Product
                </a>
              </div>
            ))
          ) : (
            <p>No matching products found.</p>
          )}
        </div>
      </main>
      <footer>
        <div className="footer-links">
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/return-policy">Return Policy</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/blog">Blog</Link>
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
        <p className="copyright">© 2025 GBTS Builders Solution Ltd.</p>
      </footer>
    </>
  );
};

export default ProductsPage;
