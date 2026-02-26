// src/pages/Menu.jsx
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPlus } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

import AOS from "aos";
import "aos/dist/aos.css";

import steakImg from "../assets/steak.png";
import popular1 from "../assets/popular1.png";
import popular2 from "../assets/popular2.png";
import popular3 from "../assets/popular3.png";
import popular4 from "../assets/popular4.png";
import category1 from "../assets/jollof.png";
import pxp from "../assets/pxp.png";
import swallow1 from "../assets/swallow1.png";
import swallow2 from "../assets/swallow2.png";

import "./styles/Menu.css";

export default function Menu() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [toast, setToast] = useState(null);
  const [showAll, setShowAll] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Initialize AOS (cards only)
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuSections = [
    {
      title: "Popular",
      items: [
        {
          id: 1,
          img: category1,
          title: "Jollof Rice & Fried Chicken",
          description:
            "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
          price: 3500,
        },
        {
          id: 2,
          img: popular4,
          title: "Eba & Egusi (Goat Meat)",
          description: "Hearty egusi soup with tender goat meat.",
          price: 3500,
        },
        {
          id: 3,
          img: popular3,
          title: "Pounded Yam & Edikaikong",
          description: "Traditional pounded yam with rich leafy soup.",
          price: 3800,
        },
        {
          id: 4,
          img: popular2,
          title: "Peppered Snail",
          description:
            "Spicy and savory peppered snail, perfect as a starter.",
          price: 2500,
        },
        {
          id: 5,
          img: popular1,
          title: "Grilled Tilapia Fish",
          description:
            "Whole grilled tilapia seasoned with our special spices.",
          price: 4500,
        },
        {
          id: 6,
          img: category1,
          title: "Jollof Rice & Fried Chicken (with Plantain)",
          description:
            "Our signature Jollof rice, served with crispy fried chicken and plantain.",
          price: 3500,
        },
      ],
    },
    {
      title: "Jollof Rice & Entrees",
      items: [
        {
          id: 7,
          img: pxp,
          title: "Jollof Rice & Smoked Fish",
          description:
            "Flavorful jollof rice served with perfectly smoked fish.",
          price: 3000,
        },
        {
          id: 8,
          img: category1,
          title: "Party Jollof Rice (Veg)",
          description: "Vegetarian party jollof, full of rich flavors.",
          price: 2800,
        },
        {
          id: 9,
          img: category1,
          title: "Party Jollof Rice (Non-Veg)",
          description:
            "Party jollof rice served with chicken or beef.",
          price: 3500,
        },
      ],
    },
    {
      title: "Swallow & Soups",
      items: [
        {
          id: 10,
          img: swallow2,
          title: "Amala with Gbegiri & Ewedu",
          description:
            "Classic Amala served with Gbegiri and Ewedu soup.",
          price: 3100,
        },
        {
          id: 11,
          img: swallow1,
          title: "Fufu & Okra Soup (Fish)",
          description:
            "Light Fufu served with fresh okra soup and tilapia fish.",
          price: 3300,
        },
        {
          id: 12,
          img: swallow1,
          title: "Fufu & Okra Soup (Meat)",
          description:
            "Fufu served with okra soup and tender meat chunks.",
          price: 3500,
        },
      ],
    },
  ];

  return (
    <div className="menu">
      <Navbar />

      {/* HERO SECTION */}
      <section className="heroic-section menu-heroic">
        <div className="heroic-img menu-heroic-img">
          <img src={steakImg} alt="Chuck's Kitchen Menu" />
        </div>
        <div className="heroic-wrapper menu-heroic-wrapper">
          <div className="heroic-overlay menu-heroic-overlay">
            <div className="heroic-overlay-content menu-heroic-overlay-content">
              <h1>Chucks Kitchen</h1>
              <h2>
                Handcrafted with passion, delivered with care. Nigerian Home
                Cooking 4.8 (1.2k)
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTIONS */}
      {menuSections.map((section, idx) => {
        const visibleItems =
          isMobile && !showAll[idx]
            ? section.items.slice(0, 3)
            : section.items;

        return (
          <section key={idx} className="menu-popular">
            <h1>{section.title}</h1>

            <div className="menu-popular-grid">
              {visibleItems.map((item, index) => (
                <div
                  key={item.id}
                  className="menu-popular-card"
                  onClick={() => navigate(`/food/${item.id}`)}
                  style={{ cursor: "pointer" }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img src={item.img} alt={item.title} />

                  <div className="menu-popular-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="menu-popular-footer">
                      <span className="menu-price">
                        ₦{item.price.toLocaleString()}
                      </span>

                      <button
                        className="menu-add-cart"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart({
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            img: item.img,
                            quantity: 1,
                          });
                          showToast(`${item.title} added to cart!`);
                        }}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Toast */}
            <div className="toast-container">
              {toast && (
                <div className="toast-message">{toast}</div>
              )}
            </div>

            {/* Mobile View All */}
            {isMobile && !showAll[idx] && section.items.length > 3 && (
              <button
                className="popular-view-btn"
                onClick={() =>
                  setShowAll((prev) => ({
                    ...prev,
                    [idx]: true,
                  }))
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