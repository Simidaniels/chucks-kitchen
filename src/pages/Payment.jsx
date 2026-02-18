import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Payment.css";

export default function Payment() {
  const location = useLocation();

  // 👇 Get finalTotal passed from OrderSummary
  const { finalTotal = 0 } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const handlePayment = () => {
    if (paymentMethod === "card" && (!cardNumber || !expiry || !cvv)) {
      alert("Please fill in card details");
      return;
    }

    alert(`Payment of ₦${finalTotal.toLocaleString()} Successful 🎉`);
  };

  return (
    <>
      <Navbar />

      <div className="payment-container">
        <h1>Payment</h1>
        <hr />

        {/* Payment Method */}
        <div className="payment-methods">
          <h3>Pay With</h3>

          <div className="method-options">
            <button
              className={paymentMethod === "card" ? "active" : ""}
              onClick={() => setPaymentMethod("card")}
            >
              Card
            </button>

            <button
              className={paymentMethod === "bank" ? "active" : ""}
              onClick={() => setPaymentMethod("bank")}
            >
              Bank
            </button>

            <button
              className={paymentMethod === "transfer" ? "active" : ""}
              onClick={() => setPaymentMethod("transfer")}
            >
              Transfer
            </button>
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
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
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
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>

      <Footer />
    </>
  );
}
