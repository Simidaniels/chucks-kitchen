import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import "./styles/Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Initialize quantities for each cart item
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  // Total price state
  // const [total, setTotal] = useState(0);

  // Update total whenever quantities or cartItems change
const total = cartItems.reduce((sum, item) => {
  const qty = quantities[item.id] || 1;
  return sum + item.price * qty;
}, 0);



  // Increase/decrease quantity
  const increaseQty = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1>My Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  {/* Food Image */}
                  <div className="cart-image">
                    <img src={item.img} alt={item.title} />
                  </div>

                  {/* Food Details */}
                  <div className="cart-details">
                    <h3>{item.title}</h3>
                    {item.instructions && (
                      <p className="special-instructions">
                        Special: {item.instructions}
                      </p>
                    )}
                    {item.protein && <p>Protein: {item.protein}</p>}
                    {item.extras && item.extras.length > 0 && (
                      <p>Extras: {item.extras.join(", ")}</p>
                    )}
                  </div>

                  {/* Quantity & Price */}
                  <div className="cart-actions">
                    <div className="quantity">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{quantities[item.id]}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                    <p className="cart-price">
                      ₦{(item.price * (quantities[item.id] || 1)).toLocaleString()}
                    </p>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Price */}
            <div className="cart-total">
              <h2>Total: ₦{total.toLocaleString()}</h2>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
