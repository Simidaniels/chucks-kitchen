import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import steakImg from "../assets/steak.png";

import popular1 from "../assets/popular1.png";
import popular2 from "../assets/popular2.png";
import popular3 from "../assets/popular3.png";
import popular4 from "../assets/popular4.png";
import category1 from "../assets/jollof.png";
import pxp from "../assets/pxp.png";
import swallow1 from "../assets/swallow1.png";
import swallow2 from "../assets/swallow2.png";


import { FaPlus } from "react-icons/fa";
import "./styles/Menu.css";

export default function Menu() {
  const [showAll, setShowAll] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuSections = [
    {
      title: "Popular",
      items: [
        { img: category1, title: "Jollof Rice & Fried Chicken", description: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.", price: "₦3,500" },
        { img: popular4, title: "Eba & Egusi (Goat Meat)", description: "Hearty egusi soup with tender goat meat.", price: "₦3,500" },
        { img: popular3, title: "Pounded Yam & Edikaikong", description: "Traditional pounded yam with rich leafy soup.", price: "₦3,800" },
        { img: popular2, title: "Peppered Snail", description: "Spicy and savory peppered snail, perfect as a starter.", price: "₦2,500" },
        { img: popular1, title: "Grilled Tilapia Fish", description: "Whole grilled tilapia seasoned with our special spices.", price: "₦4,500" },
        { img: category1, title: "Jollof Rice & Fried Chicken", description: "Our signature Jollof rice, served with crispy fried chicken and plantain", price: "₦3,500" },
      ],
    },
    {
      title: "Jollof Rice & Entrees",
      items: [
        { img: pxp, title: "Jollof Rice & Smoked Fish", description: "Flavorful jollof rice served with perfectly smoked fish.", price: "₦3,000" },
        { img: category1, title: "Party Jollof Rice (Veg)", description: "Vegetarian party jollof, full of rich flavors", price: "₦2,800" },
        { img: category1, title: "Party Jollof Rice (Veg)", description: "Vegetarian party jollof, full of rich flavors", price: "₦3,500" },
      ],
    },
    {
      title: "Swallow & Soups",
      items: [
        { img: swallow2, title: "Amala with Gbegiri & Ewedu", description: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.", price: "₦3,100" },
        { img: swallow1, title: "Fufu & Okra Soup (Fish)", description: "Light Fufu served with fresh okra soup and tilapia fish.", price: "₦3,300" },
        { img: swallow1, title: "Fufu & Okra Soup (Fish)", description: "Light Fufu served with fresh okra soup and tilapia fish.", price: "₦3,500" },
      ],
    },
  ];

  return (
    <div className="menu">
      <Navbar />

      {/* Hero Section with overlay */}
      <section className="heroic-section menu-heroic">
        <div className="heroic-img menu-heroic-img">
          <img src={steakImg} alt="Chuck's Kitchen Menu" />
        </div>

        <div className="heroic-wrapper menu-heroic-wrapper">
          <div className="heroic-overlay menu-heroic-overlay">
            <div className="heroic-overlay-content menu-heroic-overlay-content">
              <h1>Chucks Kitchen</h1>
              <h2>Handcrafted with passion, delivered with care. Nigerian Home Cooking 4.8 (1.2k)</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="heroic-categories">
        <ul className="category-list">
          <h3>Menu Categories</h3>
          <li className="category-item">Popular</li>
          <li className="category-item">Jollof Rice & Entrees</li>
          <li className="category-item">Swallow & Soups</li>
          <li className="category-item">Grills & Sides</li>
          <li className="category-item">Beverages</li>
          <li className="category-item">Desserts</li>
        </ul>
      </div>

      {/* Menu Sections */}
      {menuSections.map((section, idx) => {
        const visibleItems =
          isMobile && !showAll[idx] ? section.items.slice(0, 3) : section.items;

        return (
          <section key={idx} className="menu-popular">
            <h1>{section.title}</h1>

            <div className="menu-popular-grid">
              {visibleItems.map((item, i) => (
                <div key={i} className="menu-popular-card">
                  <img src={item.img} alt={item.title} />
                  <div className="menu-popular-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="menu-popular-footer">
                      <span className="menu-price">{item.price}</span>
                      <button className="menu-add-cart">
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {isMobile && !showAll[idx] && section.items.length > 3 && (
              <button
                className="popular-view-btn"
                onClick={() =>
                  setShowAll((prev) => ({ ...prev, [idx]: true }))
                }
              >
                View All {section.title}
              </button>
            )}
          </section>
        );
      })}

      <Footer />
    </div>
  );
}
