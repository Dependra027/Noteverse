import React from 'react';
import './Privacy.css'; // Import the CSS for styling

const Privacy = () => {
  return (
    <div className="privacy-policy-container">
      <section className="privacy-policy-header">
        <h1>Privacy Policy</h1>
        <p>Protecting your privacy is our top priority.</p>
      </section>

      <section className="privacy-policy-content">
        <div className="privacy-policy-description">
          <h2>Introduction</h2>
          <p>
            Welcome to <strong>NoteVerse</strong>. This Privacy Policy outlines the types of personal information we collect, how we use it, and how we ensure your privacy while using our platform. By using NoteVerse, you agree to the terms outlined in this policy.
          </p>
        </div>

        <div className="privacy-policy-details">
          <h3>Information We Collect</h3>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> This includes your name, email address, and any other information you provide during registration or while using our services.</li>
            <li><strong>Usage Data:</strong> We collect information about how you interact with NoteVerse, including your browsing patterns, pages visited, and time spent on the site.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your user experience. Cookies help us improve site functionality, remember your preferences, and provide personalized content.</li>
          </ul>
        </div>

        <div className="privacy-policy-usage">
          <h3>How We Use Your Information</h3>
          <ul>
            <li><strong>Account Management:</strong> To create and manage your user account on NoteVerse.</li>
            <li><strong>Improve Services:</strong> To analyze and enhance the quality of our services and user experience.</li>
            <li><strong>Marketing and Communication:</strong> To send you updates, promotions, and newsletters about our services (with your consent).</li>
            <li><strong>Security:</strong> To ensure the security and integrity of our platform, we use your information to detect and prevent fraud or unauthorized access.</li>
          </ul>
        </div>

        <div className="privacy-policy-disclosure">
          <h3>Data Sharing and Disclosure</h3>
          <p>
            We do not sell, trade, or rent your personal information to third parties. However, we may share your data in the following circumstances:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating NoteVerse.</li>
            <li><strong>Legal Requirements:</strong> If required by law, we may disclose your information to comply with a legal process or protect our rights.</li>
          </ul>
        </div>

        <div className="privacy-policy-footer">
          <h3>Your Rights</h3>
          <p>
            You have the right to access, update, and delete your personal data. If you would like to exercise any of these rights, please contact us through our support page.
          </p>
          <h3>Changes to This Privacy Policy</h3>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
