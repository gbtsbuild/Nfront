import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Main pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

// Category/Product pages
import RoofingsPage from "./pages/RoofingsPage";
import HandToolsPage from "./pages/HandToolsPage";
import LocksKnobsPage from "./pages/LocksKnobsPage";
import SecurityCamerasPage from "./pages/SecurityCamerasPage";
import AppliancesPage from "./pages/AppliancesPage";

// Info/Support/Blog pages
import ReturnPolicyPage from "./pages/ReturnPolicyPage";
import FAQPage from "./pages/FAQPage";
import TermsPage from "./pages/TermsPage";
import BlogPostsPage from "./pages/BlogPostsPage";

// CSS (adjust path if needed)
import "./HomePage.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/roofings">Roofings</Link>
          </li>
          <li>
            <Link to="/hand-tools">Hand Tools</Link>
          </li>
          <li>
            <Link to="/locks-knobs">Locks & Knobs</Link>
          </li>
          <li>
            <Link to="/security-cameras">Security Cameras</Link>
          </li>
          <li>
            <Link to="/appliances">Appliances</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/return-policy">Return Policy</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>
          </li>
          <li>
            <Link to="/blog-posts">Blog</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/roofings" element={<RoofingsPage />} />
        <Route path="/hand-tools" element={<HandToolsPage />} />
        <Route path="/locks-knobs" element={<LocksKnobsPage />} />
        <Route path="/security-cameras" element={<SecurityCamerasPage />} />
        <Route path="/appliances" element={<AppliancesPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/return-policy" element={<ReturnPolicyPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/blog-posts" element={<BlogPostsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
