import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import "./styles/OrderSummary.css";

export default function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get subtotal from previous page (Cart)
  const { total: subtotal = 0 } = location.state || {};

  const [deliveryType, setDeliveryType] = useState("delivery");
  const [promoCode, setPromoCode] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const serviceFee = 200;
  const tax = 0;
  const deliveryFee = deliveryType === "delivery" ? 500 : 0;

  const finalTotal = subtotal + deliveryFee + serviceFee + tax;

  const handleProceed = () => {
    // Navigate to Payment page and pass the total
    navigate("/payment", {
      state: { finalTotal },
    });
  };

  return (
    <>
      <Navbar />

      <div className="summary-container">
        <h1>Order Summary</h1>
        <hr />

        {/* Promo Section */}
        <div className="promo-section">
          <h3>Enter Promo Code</h3>
          <div className="promo-input">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button>Apply</button>
          </div>
        </div>

        {/* Pricing Breakdown */}
        <div className="summary-breakdown">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Service Fee</span>
            <span>₦{serviceFee.toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>₦{tax.toLocaleString()}</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>₦{finalTotal.toLocaleString()}</span>
          </div>
        </div>

        {/* Delivery / Pickup Toggle */}
        <div className="delivery-toggle">
          <div className="toggle-buttons">
            <button
              className={deliveryType === "delivery" ? "active" : ""}
              onClick={() => setDeliveryType("delivery")}
            >
              Delivery
            </button>

            <button
              className={deliveryType === "pickup" ? "active" : ""}
              onClick={() => setDeliveryType("pickup")}
            >
              Pickup
            </button>
          </div>
        </div>

        {/* Special Instructions */}
        <div className="special-section">
          <h3>Special Instructions for Restaurant</h3>
          <textarea
            placeholder="E.g. Leave at the gate, no onions, call on arrival..."
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
          />
        </div>

        {/* Proceed Button */}
        <button className="checkout-btn" onClick={handleProceed}>
          Proceed to Payment
        </button>
      </div>

      <Footer />
    </>
  );
}