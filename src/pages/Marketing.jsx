import React from 'react';

export default function Marketing() {
  return (
    <div className="section-page">
      <h1>Meta Marketing Solutions</h1>
      <div className="section-content">
        <p>
          Strategic meta-marketing solutions to boost your brand's digital presence.
          We leverage cutting-edge social media platforms and meta-advertising tools.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h3>Social Media Marketing</h3>
            <p>Facebook, Instagram, and Meta platforms optimization</p>
          </div>
          <div className="service-item">
            <h3>Meta Advertising</h3>
            <p>Targeted campaigns and audience engagement</p>
          </div>
          <div className="service-item">
            <h3>Analytics & Reporting</h3>
            <p>Data-driven insights and performance tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
}