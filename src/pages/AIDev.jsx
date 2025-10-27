import React from 'react';

export default function AIDev() {
  return (
    <div className="section-page">
      <h1>AI Development</h1>
      <div className="section-content">
        <p>
          Cutting-edge artificial intelligence solutions for modern businesses.
          From machine learning models to AI-powered applications, we bring intelligence to your systems.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h3>Machine Learning</h3>
            <p>Custom ML models and predictive analytics</p>
          </div>
          <div className="service-item">
            <h3>AI Integration</h3>
            <p>Embedding AI capabilities in existing systems</p>
          </div>
          <div className="service-item">
            <h3>Natural Language Processing</h3>
            <p>Text analysis and language understanding solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}