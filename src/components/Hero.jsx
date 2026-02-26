import React, { useEffect } from "react";
import heroImg from "../assets/hero-food.png";
import { FaUtensils, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero">

      {/* LEFT IMAGE */}
      <div className="hero-img" data-aos="fade-right">
        <img src={heroImg} alt="Delicious Food" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="hero-content" data-aos="fade-left">
        <h2 className="hero-logo">Chucks Kitchen</h2>

        <Link to="/signin">
          <button className="signin-btn">Sign In</button>
        </Link>

        <div className="hero-center">
          <h1 data-aos="fade-up" data-aos-delay="100">
            Your Authentic Taste of Nigeria
          </h1>

          <p data-aos="fade-up" data-aos-delay="300">
            Experience homemade flavors delivered fresh to your desk or home.
            We bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>

          {/* ICONS */}
          <div className="hero-icons">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
              <FaUtensils />
              <span>Freshly Prepared</span>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="700">
              <FaUtensils />
              <span>Support Local Business</span>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="800">
              <FaTruck />
              <span>Fast & Reliable Delivery</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="900">
            <Link to="/signin">
              <button className="primary-btn">Start Your Order</button>
            </Link>
            <button className="secondary-btn">Learn More About Us</button>
          </div>
        </div>

        {/* HERO FOOT */}
        <div className="hero-bottom" data-aos="fade-in" data-aos-delay="1000">
          &copy; 2024 Chucks Kitchen.
          <a href="#privacy" className="foot-link"> Privacy Policy</a> | 
          <a href="#terms" className="foot-link"> Terms of Services</a>.
        </div>
      </div>
    </section>
  );
}