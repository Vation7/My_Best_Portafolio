import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://github.com/Vation7" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
      </div>
      <p className="footer-text">© 2024 Miguel's Portfolio. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;