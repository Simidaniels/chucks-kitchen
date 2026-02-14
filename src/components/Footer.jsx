import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowUp
} from "react-icons/fa";

export default function Footer() {

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Description */}
        <div className="footer-col">
          <h2 className="footer-logo">Chucks Kitchen</h2>
          <p className="footer-desc">
            Bringing the authentic flavors of Nigeria home cooking to your table,
            with passion and care.
          </p>
        </div>
        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#order">My Order</a></li>
            <li><a href="#account">Account</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul>
            <li>+234 801 234 5678</li>
            <li>hello@chuckskitchen.com</li>
            <li>123 Taste Blvd, Lagos, Nigeria</li>
          </ul>
        </div>
        {/* Socials */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          {/* social-icons */}
            <div className="social-icons">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
            </div>
          </div>
        </div>
      {/* Bottom bar */}
      <div className="footer-bottom">
        &copy; 2020 Lift Media. All rights reserved.
      </div>
      {/* Scroll-up button */}
      <button className="scroll-up-btn" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
}
