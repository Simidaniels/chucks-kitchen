import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import heroImg from "../assets/homepage-img.png";
import footImg from "../assets/ewa-agoyin.png";

import category1 from "../assets/jollof.png";
import category2 from "../assets/swallow.png";
import category3 from "../assets/grills.png";
import category4 from "../assets/sweet-treats.png";

import special1 from "../assets/special1.png";
import special3 from "../assets/special3.png";
import special4 from "../assets/special2.png";

import "./styles/Homepage.css";

export default function Homepage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllSpecials, setShowAllSpecials] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===============================
     DATA ARRAYS
  =============================== */

  const categories = [
    { img: category1, title: "Jollof Delights" },
    { img: category2, title: "Swallow & Soups" },
    { img: category3, title: "Grills & BBQ" },
    { img: category4, title: "Sweet Treats" },
    { img: category2, title: "Rice Combos" },
    { img: category3, title: "Street Food" },
  ];

  const specials = [
    {
      img: special1,
      title: "Spicy Tilapia Pepper Soup",
      description:
        "A comforting and spicy soup with tender tilapia fish.",
      price: "₦3,500",
    },
    {
      img: category1,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice served with succulent fried chicken.",
      price: "₦3,500",
    },
    {
      img: special3,
      title: "Jollof Rice Combo",
      description:
        "Smoky party-style jollof rice with plantain.",
      price: "₦3,500",
    },
    {
      img: category1,
      title: "Fried Rice & Turkey",
      description:
        "Fried rice served with grilled turkey.",
      price: "₦3,500",
    },
    {
      img: special4,
      title: "Egusi Soup & Pounded Yam",
      description:
        "Rich Egusi soup with assorted meats.",
      price: "₦3,500",
    },
    {
      img: special1,
      title: "Peppered Goat Meat",
      description:
        "Spicy and savory goat meat.",
      price: "₦3,500",
    },
  ];

  const visibleCategories =
    isMobile && !showAllCategories
      ? categories.slice(0, 3)
      : categories;

  const visibleSpecials =
    isMobile && !showAllSpecials
      ? specials.slice(0, 3)
      : specials;

  return (
    <div className="homepage">
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

              <Link to="/menu">
                <button className="discover-btn">
                  Discover what's new
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEARCH ===== */}
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
          {visibleCategories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.img} alt={category.title} />
              <h3>{category.title}</h3>
            </div>
          ))}
        </div>

        {isMobile && (
          <button
            className="view-btn"
            onClick={() =>
              setShowAllCategories(!showAllCategories)
            }
          >
            {showAllCategories
              ? "Show Less"
              : "View All Categories"}
          </button>
        )}
      </section>

      {/* ===== CHEF'S SPECIALS ===== */}
      <section className="chefs-specials">
        <h1>Chef's Specials</h1>

        <div className="specials-grid">
          {visibleSpecials.map((special, index) => (
            <div key={index} className="special-card">
              <img src={special.img} alt={special.title} />

              <div className="special-info">
                <h3>{special.title}</h3>
                <p>{special.description}</p>

                <div className="special-footer">
                  <span className="price">
                    {special.price}
                  </span>

                  <button className="add-cart">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <button
            className="view-btn"
            onClick={() =>
              setShowAllSpecials(!showAllSpecials)
            }
          >
            {showAllSpecials
              ? "Show Less"
              : "View All Specials"}
          </button>
        )}
      </section>

      {/* ===== BOTTOM HERO ===== */}
      <section className="heroic-section">
        <div className="heroic-img">
          <img src={footImg} alt="New Menu Additions" />
        </div>

        <div className="heroic-wrapper">
          <div className="heroic-overlay">
            <div className="heroic-overlay-content">
              <h1>Introducing Our New Menu Additions!</h1>
              <h2>
                Explore exciting new dishes crafted with
                authentic Nigerian flavors.
              </h2>

              <Link to="/menu">
                <button className="discover-btn">
                  Discover what's new
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
