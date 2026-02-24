import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./styles/Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Initialize quantities ONCE (no useEffect)
  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    cartItems.forEach((item) => {
      initial[item.id] = 1;
    });
    return initial;
  });

  // Increase quantity
  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  // Calculate total safely
  const total = cartItems.reduce((sum, item) => {
    const qty = quantities[item.id] ?? 1;
    return sum + item.price * qty;
  }, 0);

  return (
    <>
      <Navbar />

      <div className="cart-container">
        <h1 className="cart-title">My Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  
                  {/* IMAGE */}
                  <div className="cart-image">
                    <img src={item.img} alt={item.title} />
                  </div>

                  {/* CONTENT */}
                  <div className="cart-content">

                    <div className="cart-details">
                      <h3>{item.title}</h3>

                      {item.instructions && (
                        <p className="special-instructions">
                          Special: {item.instructions}
                        </p>
                      )}

                      {item.protein && <p>Protein: {item.protein}</p>}

                      {item.extras?.length > 0 && (
                        <p>Extras: {item.extras.join(", ")}</p>
                      )}
                    </div>

                    <div className="cart-bottom">

                      {/* Quantity */}
                     <div className="quantity">
                       <button onClick={() => decreaseQty(item.id)}>
                         −
                       </button>
                       <span>{quantities[item.id] ?? 1}</span>
                       <button onClick={() => increaseQty(item.id)}>
                         +
                       </button>
                     </div>




                      <div className="price-remove-wrapper">
                      {/* Price */}
                      <p className="cart-price">
                        ₦
                        {(
                          item.price *
                          (quantities[item.id] ?? 1)
                        ).toLocaleString()}
                      </p>
                      {/* Remove */}
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ×
                      </button>
                      </div>








                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="cart-total">
              <h2>Total: ₦{total.toLocaleString()}</h2>

              <button
                className="checkout-btn"
                onClick={() =>
                  navigate("/order-summary", {
                    state: { cartItems, quantities, total },
                  })
                }
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}