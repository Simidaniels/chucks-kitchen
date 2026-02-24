import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/DeliveryDetails.css";

export default function DeliveryDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Receive total from OrderSummary
  const { finalTotal = 0 } = location.state || {};

  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [phone, setPhone] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleProceed = () => {
    if (!address || !phone) {
      setShowPopup(true);
      return;
    }

    // ✅ Pass total again to Payment
    navigate("/payment", {
      state: {
        finalTotal,   // 👈 THIS WAS MISSING
        address,
        deliveryTime,
        instructions,
        phone,
      },
    });
  };

  return (
    <>
      <Navbar />

      <div className="delivery-container">
        <h1>Delivery Details</h1>
        <hr />

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            placeholder="Home: 123 Main Street, Victoria Island, Lagos
              Apt 4B, Opposite Mega Plaza"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Delivery Time</label>
          <input
            type="text"
            placeholder="ASAP (30–45 mins)"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Delivery Instructions (Optional)</label>
          <textarea
            placeholder="E.g leave at the front door, knock twice ....."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contact Phone</label>
          <input
            type="tel"
            placeholder="+234 801 234 5678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button className="proceed-btn" onClick={handleProceed}>
          Proceed to Payment
        </button>
      </div>

      {showPopup && (
        <div className="custom-popup-overlay">
          <div className="custom-popup">
            <h3>Missing Information</h3>
            <p>Please fill in Address and Phone Number.</p>
            <button onClick={() => setShowPopup(false)}>Okay</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}