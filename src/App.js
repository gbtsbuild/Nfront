import React from "react";
// ...inside App component, before <Routes>:
<nav>
  <Link to="/">Home</Link> |{" "}
  <Link to="/about-us">About Us</Link> |{" "}
  <Link to="/contact-us">Contact Us</Link>
</nav>
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactUsPage";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about-us">AboutUs</Link></li>
            <li><Link to="/contact-us">ContactUs</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;