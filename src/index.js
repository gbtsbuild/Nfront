// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Optional: base styles like body/background/font
import App from "./App"; // ✅ Main component that handles routing

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
