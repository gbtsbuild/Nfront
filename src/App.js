import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/HomePage.css";

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
import "./styles/HomePage.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/roofings" element={<RoofingsPage />} />
        <Route path="/hand-tools" element={<HandToolsPage />} />
        <Route path="/locks-knobs" element={<LocksKnobsPage />} />
        <Route path="/security-cameras" element={<SecurityCamerasPage />} />
        <Route path="/appliances" element={<AppliancesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/return-policy" element={<ReturnPolicyPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/blog-posts" element={<BlogPostsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
