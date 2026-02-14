import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import "./styles/SignIn.css"; // reuse same CSS
import heroImg from "../assets/hero-food.png";
import Footer from "../components/Footer";


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successfully!");
  };

  return (
    <div className="signinpage-wrapper">
    <div className="signin-page">

      {/* LEFT IMAGE */}
      <div className="signin-img">
        <img src={heroImg} alt="Delicious Food" />

        <div className="image-overlay">
          <div className="overlay-content">
            <h1>Chucks Kitchen</h1>
            <h2>
              Your journey to delicious, authentic Nigerian meals starts here.
              Create an account and start ordering today!
            </h2>
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="signin-card">
        <h2 className="signin-logo">Chucks Kitchen</h2>
        <p className="signin-subtext">Create your Account</p>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
            

          {/* EMAIL */}
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="name@gmail.com"
                required
              />
            </div>
          </div>


            {/* TELEPHONE */}
            <div className="form-group">
              <label>Phone Number</label>
              <div className="input-wrapper">
                <FaPhone className="input-icon" />
                <input
                  type="text"
                  placeholder="8123340690"
                  required
                />
              </div>
            </div>

          {/* PASSWORD */}
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="QWE123#"
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="QWE123"
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? "Hide" : "Show"}
              </span>
            </div>
          </div>

        <div className="terms-group">
  <label className="checkbox-container">
    <input type="checkbox" required />
    <span className="checkmark"></span>
    
    <span className="terms-text">
      I agree to the{" "}
      <a href="/terms" target="_blank" rel="noopener noreferrer">
        Terms & Conditions
      </a>{" "}
      and{" "}
      <a href="/privacy" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
    </span>
  </label>
</div>






          <button type="submit" className="Continue-signin">
            Continue
          </button>
        </form>

        {/* DIVIDER */}
        <div className="divider">
          <span>Or continue with</span>
        </div>

        {/* SOCIAL LOGIN */}
        <div className="social-login">
          <button className="google-btn">
            <FaGoogle /> Continue with Google
          </button>

          <button className="apple-btn">
            <FaFacebook /> Continue with Facebook
          </button>
        </div>

        <p className="signup-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>      
    </div>
          <Footer />

    </div>
  );
}
