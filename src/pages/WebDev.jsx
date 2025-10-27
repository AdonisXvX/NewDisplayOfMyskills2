import React from 'react';

export default function WebDev() {
  return (
    <div className="section-page">
      <h1>Web Development Services</h1>
      <div className="section-content">
        <p>
          Specializing in modern web development with a focus on performance and user experience.
          From responsive websites to complex web applications, we deliver solutions that drive results.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h3>Frontend Development</h3>
            <p>React.js, Vue.js, and modern JavaScript frameworks</p>
          </div>
          <div className="service-item">
            <h3>Backend Development</h3>
            <p>Node.js, Express, and database integration</p>
          </div>
          <div className="service-item">
            <h3>Full Stack Solutions</h3>
            <p>End-to-end web application development</p>
          </div>
        </div>
      </div>
    </div>
  );
}