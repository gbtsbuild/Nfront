import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
("react-router-dom");
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactUsPage";

// Additional pages imports (create these components similarly)
import RoofingsPage from "./pages/RoofingsPage";
import HandToolsPage from "./pages/HandToolsPage";
import LocksKnobsPage from "./pages/LocksKnobsPage";
import SecurityCamerasPage from "./pages/SecurityCamerasPage";
import AppliancesPage from "./pages/AppliancesPage";

import ReturnPolicyPage from "./pages/ReturnPolicyPage";
import FAQPage from "./pages/FAQPage";
import TermsPage from "./pages/TermsPage";
import BlogPostsPage from "./pages/BlogPostsPage";

import "./HomePage.css";

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
