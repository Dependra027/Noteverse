import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* First Column - Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#school-notes">School Notes</a></li>
            <li><a href="#college-notes">College Notes</a></li>
            <li><a href="#competition-notes">Competition Notes</a></li>
            <li><a href="upload">Upload Notes</a></li>
          </ul>
        </div>

        {/* Second Column - About Us, Privacy, Feedback */}
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><a href="About">About Us</a></li>
            <li><a href="Privacy">Privacy Policy</a></li>
            <li><a href="Feedback">Feedback</a></li>
          </ul>
        </div>

        {/* Third Column - Social Links */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/dependra-singh-397a3424a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://x.com/Dependr33829109"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/dependra027/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="mailto:dependrasingh027@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://github.com/Dependra027"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github"></i> {/* GitHub Icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 NoteVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
