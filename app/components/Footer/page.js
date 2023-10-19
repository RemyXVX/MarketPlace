import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-media-links">
        <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com/your-page" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com/your-page" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="other-links">
        <a href="/about-us">About Us</a>
        <a href="/contact-us">Contact Us</a>
        <a href="/terms-and-conditions">Terms and Conditions</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="copy-right-info">
        <p>&copy; 2021 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
