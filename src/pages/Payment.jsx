import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Payment.css";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get total from previous page
  const { finalTotal = 0 } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handlePayment = () => {
    if (paymentMethod === "card") {
      if (!cardNumber || !expiry || !cvv) {
        setShowPopup(true);
        return;
      }
    }

    navigate("/processing", {
      state: { finalTotal },
    });
  };

  return (
    <>
      <Navbar />

      {/* POPUP */}
      {showPopup && (
        <div className="custom-popup-overlay">
          <div className="custom-popup">
            <h3>Missing Card Details</h3>
            <p>Please fill in all required card information.</p>
            <button onClick={() => setShowPopup(false)}>Okay</button>
          </div>
        </div>
      )}

      <div className="payment-container">
        <h1>Payment</h1>
        <hr />

        {/* Payment Method */}
        <div className="payment-methods">
          <h3>Pay With</h3>

          <div className="method-options">
            <label className="radio-option">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Card
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Bank
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="payment"
                value="transfer"
                checked={paymentMethod === "transfer"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Transfer
            </label>
          </div>
        </div>

        {/* Card Details */}
        {paymentMethod === "card" && (
          <div className="card-details">
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                maxLength="16"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>

            <div className="row">
              <div className="form-group">
                <label>Expiration Date</label>
              <input
                type="text"
                placeholder="MMYY"
                value={expiry}
                maxLength={4}           // limit to 4 characters
                onChange={(e) => {
                  // Allow only digits
                  const value = e.target.value.replace(/\D/g, "");
                  setExpiry(value);
                }}
              />
              </div>

              <div className="form-group">
                <label>CVV</label>
                <input
                  type="password"
                  maxLength="3"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                checked={saveCard}
                onChange={() => setSaveCard(!saveCard)}
              />
              <span>Save card details</span>
            </div>
          </div>
        )}

        {/* Pay Button */}
        <button className="pay-btn" onClick={handlePayment}>
          Pay ₦{finalTotal.toLocaleString()}
        </button>

        {/* Privacy Text */}
        <p className="privacy-text">
          Your personal data will be used to process your order and support
          your experience throughout this website, and for other purposes described in our privacy policy.
        </p>
      </div>

      <Footer />
    </>
  );
}