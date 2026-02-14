import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";
import "./styles/SignIn.css";
import heroImg from "../assets/hero-food.png";
import Footer from "../components/Footer";


export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign In Submitted");
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
                      Sign up or login to order your favorites today!
                    </h2>
                </div>
            </div>
        </div>

        {/* RIGHT CARD */}
        <div className="signin-card">
                <h2 className="signin-logo">Chucks Kitchen</h2>
                    <p className="signin-subtext">Login your Account</p>
            {/* FORM */}
            <form onSubmit={handleSubmit}>
                {/* EMAIL FIELD */}
                <div className="form-group">
                    <label>Email or Phone Number</label>
                    <div className="input-wrapper">
                        <FaEnvelope className="input-icon" />
                        <input
                          type="email"
                          placeholder="name@gmail.com"
                          required
                        />
                    </div>
                </div>

                {/* PASSWORD FIELD */}
                <div className="form-group">
                    <label>Password</label>
                    <div className="input-wrapper">
                        <FaLock className="input-icon" />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
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
                <div className="form-options">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                    <a href="#">Forgot password?</a>
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
            <FaFacebook /> Continue with Apple
          </button>
        </div>



        <p className="signup-link">
          Don’t have an account? <a href="#">Create an account</a>
        </p>
      </div>

    </div>
    <Footer />
    </div>
  );
}
