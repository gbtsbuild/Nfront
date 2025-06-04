import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: base styles like body/background/font
import HomePage from './HomePage'; // Make sure this matches your main component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);