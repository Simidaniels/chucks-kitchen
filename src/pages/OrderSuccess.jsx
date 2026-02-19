import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/OrderSuccess.css";

export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const { finalTotal = 0 } = location.state || {};

  // ✅ Generate order number safely (runs once only)
  const [orderNumber] = useState(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = () =>
      chars[Math.floor(Math.random() * chars.length)];

    const numbersPart1 = Math.floor(100 + Math.random() * 900);
    const numbersPart2 = Math.floor(100000 + Math.random() * 900000);

    return `${numbersPart1}${randomLetter()}${randomLetter()}${numbersPart2}${randomLetter()}`;
  });

  return (
    <>
      <Navbar />

      <div className="success-container">


        <div className="success-wrapper">
            {/* Green Checkmark */}
            <div className="checkmark-circle">
              <div className="checkmark"></div>
            </div>

            <h1>Order Placed Successfully</h1>

            <p className="subtitle">
              Your delicious Chucks Kitchen meal is on its way.
            </p>
        </div>



        <div className="evidence-wrapper">
            <div className="order-number">
              Order #{orderNumber} Confirmed
            </div>
            <h3 className="amount-paid">
              Amount Paid: ₦{finalTotal.toLocaleString()}
            </h3>
            <div className="success-buttons">
              <button
                className="primary-btn"
                onClick={() => navigate("/track-order")}
              >
                Track Order
              </button>
            </div>
            <p className="help-text">
              Generate Receipt
            </p>
            <p
              className="help-text support-link"
              onClick={() => navigate("/support")}
            >
              Need help with your order?
            </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
