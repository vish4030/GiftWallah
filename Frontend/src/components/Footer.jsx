import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Social Media Links */}
        <nav aria-label="Social media links" className="footer-social-media">
          <ul className="social-media flex">
            <li><a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">f</a></li>
            <li><a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">i</a></li>
            <li><a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">t</a></li>
            <li><a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">y</a></li>
            <li><a href="https://www.vimeo.com" aria-label="Vimeo" target="_blank" rel="noreferrer">v</a></li>
          </ul>
        </nav>

        {/* Footer Boxes */}
        <section className="footer-boxes">
          <div className="footer-box">
            <h4>About Us</h4>
            <p>Learn more about our mission, values, and team.</p>
          </div>
          <div className="footer-box">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-box">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-box">
            <h4>Subscribe</h4>
            <p>Stay updated with our latest news and offers.</p>
            <form>
              <input type="email" placeholder="Your email" aria-label="Subscribe to newsletter" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
