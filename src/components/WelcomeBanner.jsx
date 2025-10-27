import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeBanner.css';

export default function WelcomeBanner({ onClose }) {
  return (
    <div className="welcome-banner">
      <div className="welcome-content">
        <p>
          👋 Welcome! Sign in to access exclusive features and personalized content
        </p>
        <div className="welcome-actions">
          <Link to="/login" className="welcome-signin">Sign In</Link>
          <Link to="/signup" className="welcome-signup">Create Account</Link>
        </div>
      </div>
      <button className="welcome-close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  );
}