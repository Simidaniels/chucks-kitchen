import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Processing.css";

export default function Processing() {
  const location = useLocation();
  const navigate = useNavigate();

  const { finalTotal = 0 } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/order-success", {
        state: { finalTotal }
      });
    }, 3500); // 2.5 seconds loading

    return () => clearTimeout(timer);
  }, [navigate, finalTotal]);

  return (
    <>
      <Navbar />

              <div className="processing-container">
          <div className="loader">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
          </div>

          <h2>Processing Your Payment...</h2>
          <p>Please wait while we confirm your transaction.</p>
        </div>


      <Footer />
    </>
  );
}
