import React from 'react';
import './Purchase.css';

const Purchase = () => {
  const handlePurchase = (tier) => {
    // TODO: Implement purchase functionality
    console.log(`Selected tier: ${tier}`);
  };

  return (
    <div className="purchase-container">
      <h1 className="purchase-title">Choose Your Perfect Web Solution</h1>
      <p className="purchase-subtitle">Select the package that best fits your business needs</p>
      
      <div className="pricing-cards">
        <div className="pricing-card basic">
          <div className="card-header">
            <h2>Basic Commercial</h2>
            <div className="price">
              <span className="amount">$200</span>
              <span className="period">/one-time</span>
            </div>
          </div>
          <div className="card-content">
            <ul className="features-list">
              <li>Professional Static Website</li>
              <li>Services Showcase</li>
              <li>Achievement Portfolio</li>
              <li>Contact Form Integration</li>
              <li>Basic SEO Setup</li>
              <li>Mobile Responsive Design</li>
              <li>Social Media Integration</li>
              <li>2 Rounds of Revisions</li>
            </ul>
            <p className="perfect-for">Perfect for: Small businesses and professionals starting their online presence</p>
            <button 
              onClick={() => handlePurchase('basic')}
              className="purchase-button basic-button"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="pricing-card professional">
          <div className="popular-tag">Most Popular</div>
          <div className="card-header">
            <h2>Professional Interactive</h2>
            <div className="price">
              <span className="amount">$500</span>
              <span className="period">/one-time</span>
            </div>
          </div>
          <div className="card-content">
            <ul className="features-list">
              <li>All Basic Features, plus:</li>
              <li>User Authentication System</li>
              <li>Dynamic Content Management</li>
              <li>Advanced Backend Integration</li>
              <li>Custom Database Design</li>
              <li>E-commerce Capabilities</li>
              <li>Advanced Analytics</li>
              <li>Multiple Page Templates</li>
              <li>Premium UI/UX Design</li>
              <li>4 Rounds of Revisions</li>
            </ul>
            <p className="perfect-for">Perfect for: Growing businesses needing advanced functionality</p>
            <button 
              onClick={() => handlePurchase('professional')}
              className="purchase-button pro-button"
            >
              Go Professional
            </button>
          </div>
        </div>

        <div className="pricing-card enterprise">
          <div className="card-header">
            <h2>Enterprise AI Solution</h2>
            <div className="price">
              <span className="amount">$1,500</span>
              <span className="period">/one-time</span>
            </div>
          </div>
          <div className="card-content">
            <ul className="features-list">
              <li>All Professional Features, plus:</li>
              <li>AI-Powered Search & Recommendations</li>
              <li>Intelligent Chatbot Integration</li>
              <li>Advanced Analytics Dashboard</li>
              <li>Custom AI Model Training</li>
              <li>Scalable Cloud Infrastructure</li>
              <li>Advanced Security Features</li>
              <li>Real-time Data Processing</li>
              <li>Premium Support Package</li>
              <li>Unlimited Revisions</li>
            </ul>
            <p className="perfect-for">Perfect for: Enterprises needing cutting-edge AI solutions</p>
            <button 
              onClick={() => handlePurchase('enterprise')}
              className="purchase-button enterprise-button"
            >
              Go Enterprise
            </button>
          </div>
        </div>
      </div>

      <section className="comparison-section">
        <h2>Detailed Comparison</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>Basic</th>
                <th>Professional</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Responsive Design</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Contact Form</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>User Authentication</td>
                <td>-</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Backend Services</td>
                <td>Basic</td>
                <td>Advanced</td>
                <td>Enterprise</td>
              </tr>
              <tr>
                <td>AI Integration</td>
                <td>-</td>
                <td>-</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Revisions</td>
                <td>2 Rounds</td>
                <td>4 Rounds</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Support</td>
                <td>Email</td>
                <td>Email & Chat</td>
                <td>24/7 Priority</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Purchase;