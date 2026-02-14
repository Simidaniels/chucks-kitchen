import React from "react";
import heroImg from "../assets/hero-food.png";
import { FaUtensils, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">

      {/* LEFT IMAGE */}
      <div className="hero-img">
        <img src={heroImg} alt="Delicious Food" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="hero-content">
        <h2 className="hero-logo">Chucks Kitchen</h2>
        <Link to="/signin">
          <button className="signin-btn">Sign In</button>
        </Link>
<div className="hero-center">
        <h1>Your Authentic Taste of Nigeria</h1>

        <p>
          Experience homemade flavors delivered fresh to your desk or home.
          We bring the rich culinary heritage of Nigeria right to your doorstep.
        </p>

        {/* ICONS */}
        <div className="hero-icons">
          <div className="icon-box">
            <FaUtensils />
            <span>Freshly Prepared</span>
          </div>

          <div className="icon-box">
                <FaUtensils />
            <span>Support Local Business</span>
          </div>

          <div className="icon-box">
            <FaTruck />
            <span>Fast & Reliable Delivery</span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <button className="primary-btn">Start Your Order</button>
          <button className="secondary-btn">Learn More About Us</button>
        </div>
</div>

        {/* HERO FOOT */}
        <div className="hero-bottom">
            &copy; 2024 Chucks Kitchen. 
            <a href="#privacy" className="foot-link">Privacy Policy</a> | 
            <a href="#terms" className="foot-link">Terms of Services</a>.
        </div>
      </div>
    </section>
  );
}
