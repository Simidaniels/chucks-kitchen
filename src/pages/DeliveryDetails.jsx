// DeliveryDetails.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/DeliveryDetails.css";

export default function DeliveryDetails() {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [phone, setPhone] = useState("");

  const handleProceed = () => {
    if (!address || !phone) {
      alert("Please fill in required fields");
      return;
    }

    navigate("/payment", {
      state: {
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

        {/* Address */}
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Delivery Time */}
        <div className="form-group">
          <label>Delivery Time</label>
          <input
            type="text"
            placeholder="ASAP (30–45 mins)"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
          />
        </div>

        {/* Delivery Instructions */}
        <div className="form-group">
          <label>Delivery Instructions (Optional)</label>
          <textarea
            placeholder="E.g leave at the front door, knock twice ..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Proceed Button */}
        <button className="proceed-btn" onClick={handleProceed}>
          Proceed to Payment
        </button>
      </div>

      <Footer />
    </>
  );
}
