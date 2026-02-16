import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";

import heroImg from "../assets/homepage-img.png";
import footImg from "../assets/ewa-agoyin.png";

import category1 from "../assets/jollof.png";
import category2 from "../assets/swallow.png";
import category3 from "../assets/grills.png";
import category4 from "../assets/sweet-treats.png";
import special1 from "../assets/special1.png";
// import special2 from "../assets/special4.png";
import special3 from "../assets/special3.png";
import special4 from "../assets/special2.png";

import "./styles/Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="heroic-section">
        <div className="heroic-img">
          <img src={heroImg} alt="Delicious Food" />
        </div>
        <div className="heroic-wrapper">
        <div className="heroic-overlay">
        <div className="heroic-overlay-content">
        
          <h1>The Heart of Nigerian Home Cooking</h1>
          <h2>Handcrafted with passion, delivered with care.</h2>
          <button className="discover-btn">Discover what's new</button>
        
          </div>
        </div>
        </div>
      </section>

        {/* Search Input */}
          <div className="hero-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="What are you craving today?"
            />
          </div>

      {/* ===== POPULAR CATEGORIES ===== */}
      <section className="popular-categories">
        <h1>Popular Categories</h1>
        <div className="categories-grid">
          <div className="category-card">
            <img src={category1} alt="Category 1" />
            <h3>Jollof Delights</h3>
          </div>
          <div className="category-card">
            <img src={category2} alt="Category 2" />
            <h3>Swallow & Soups</h3>
          </div>
          <div className="category-card">
            <img src={category3} alt="Category 3" />
            <h3>Grills & BBQ</h3>
          </div>
          <div className="category-card">
            <img src={category4} alt="Category 4" />
            <h3>Sweet Treats</h3>
          </div>
          <div className="category-card">
            <img src={category2} alt="Category 4" />
            <h3>Jollof Delights</h3>
          </div>
          <div className="category-card">
            <img src={category3} alt="Category 4" />
            <h3>Jollof Delights</h3>
          </div>

          <button className="view-btn">
            View All Categories
          </button>

        </div>
      </section>
      {/* ===== CHEF'S SPECIALS ===== */}
      <section className="chefs-specials">
      <h1>Chef's Specials</h1>
      <div className="specials-grid">
    {[
      { img: special1, title: "Spicy Tilapia Pepper Soup", description: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.", price: "₦3,500" },
      { img: category1, title: "Jollof Rice & Fried Chicken", description: "Our signature Jollof rice, cooked to perfection, served wirh succulent fried chicken.", price: "₦3,500" },
      { img: category1, title: "Jollof Rice & Fried Chicken", description: "Our signature Jollof rice, cooked to perfection, served wirh succulent fried chicken.", price: "₦3,500" },
      { img: category1, title: "Jollof Rice & Fried Chicken", description: "Our signature Jollof rice, cooked to perfection, served wirh succulent fried chicken.", price: "₦3,500" },
      { img: special3, title: "Jollof Rice & Fried Chicken", description: "Our signature Jollof rice, cooked to perfection, served wirh succulent fried chicken.", price: "₦3,500" },
      { img: special4, title: "Egusi Soup & Pounded Yam", description: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam", price: "₦3,500" },
    ].map((special, index) => (
      <div key={index} className="special-card">
        <img src={special.img} alt={special.title} />
        <div className="special-info">
          <h3>{special.title}</h3>
          <p>{special.description}</p>
          <div className="special-footer">
            <span className="price">{special.price}</span>
            <button className="add-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    ))}
    <button className="view-btn">
            View All Specials
          </button>
  </div>
</section>
    <section className="heroic-section">
        <div className="heroic-img">
          <img src={footImg} alt="Delicious Food" />
        </div>
        <div className="heroic-wrapper">
        <div className="heroic-overlay">
        <div className="heroic-overlay-content">
        
          <h1>Introducing Our New Menu Additions!</h1>
          <h2>Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!</h2>
          <button className="discover-btn">Discover what's new</button>
        
          </div>
        </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
