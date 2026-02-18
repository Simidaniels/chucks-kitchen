import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/FoodDetails.css";

import category1 from "../assets/jollof.png";
import popular1 from "../assets/popular1.png";
import popular2 from "../assets/popular2.png";
import popular3 from "../assets/popular3.png";
import popular4 from "../assets/popular4.png";
import pxp from "../assets/pxp.png";
import swallow1 from "../assets/swallow1.png";
import swallow2 from "../assets/swallow2.png";

export default function FoodDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const allFoods = [
    { id: 1, img: category1, title: "Jollof Rice & Fried Chicken", description: "Our signature Jollof rice cooked to perfection.", price: "₦3,500" },
    { id: 2, img: popular4, title: "Eba & Egusi (Goat Meat)", description: "Hearty egusi soup with tender goat meat.", price: "₦3,500" },
    { id: 3, img: popular3, title: "Pounded Yam & Edikaikong", description: "Traditional pounded yam with rich leafy soup.", price: "₦3,800" },
    { id: 4, img: popular2, title: "Peppered Snail", description: "Spicy and savory peppered snail.", price: "₦2,500" },
    { id: 5, img: popular1, title: "Grilled Tilapia Fish", description: "Whole grilled tilapia seasoned with spices.", price: "₦4,500" },
    { id: 6, img: category1, title: "Jollof Rice & Fried Chicken (Plantain)", description: "Served with crispy plantain.", price: "₦3,500" },
    { id: 7, img: pxp, title: "Jollof Rice & Smoked Fish", description: "Flavorful jollof with smoked fish.", price: "₦3,000" },
    { id: 8, img: category1, title: "Party Jollof Rice (Veg)", description: "Vegetarian party jollof.", price: "₦2,800" },
    { id: 9, img: category1, title: "Party Jollof Rice (Non-Veg)", description: "Served with chicken or beef.", price: "₦3,500" },
    { id: 10, img: swallow2, title: "Amala with Gbegiri & Ewedu", description: "Classic Yoruba combo.", price: "₦3,100" },
    { id: 11, img: swallow1, title: "Fufu & Okra Soup (Fish)", description: "Light fufu with okra and fish.", price: "₦3,300" },
    { id: 12, img: swallow1, title: "Fufu & Okra Soup (Meat)", description: "Rich okra with tender meat.", price: "₦3,500" },
  ];

  const food = allFoods.find((item) => item.id === Number(id));

  if (!food) return <h2>Food not found</h2>;

  return (
    <>
      <Navbar />

      <div className="food-details-container">

        

        {/* LEFT IMAGE */}
        <div className="food-details-image">
          <img src={food.img} alt={food.title} />
        </div>
        

        {/* RIGHT CONTENT */}
        <div className="food-details-content">
          <div className="food-details-content-container">
          <div className="food-details-content-wrapper">
            <h1>{food.title}</h1>
            <h2 className="food-price">{food.price}</h2>
            <p className="food-description">{food.description}</p>

            <div className="food-meta">
              <div className="meta-item">🕐 Mildly Spicy</div>
              <div className="meta-item">🕐 Vegetarian option available</div>
              <div className="meta-item allergies">🕐View allergies</div>
            </div>

          </div>
              <button 
                className="close-btn"
                onClick={() => navigate("/menu")}
              >
                ×
              </button>
          </div>
          {/* Protein Section */}
          <h3>Choose your Protein</h3>
          <div className="option-item">
          <label>
            <input type="checkbox" defaultChecked />Fried Chicken
          </label>
          <p className="default-tag">Default</p>
          </div>


          <div className="option-item protein">
            <label>
              <input type="checkbox" /> Grilled Fish
            </label>
            <p>+₦500</p>
          </div>

          <div className="option-item protein">
            <label>
              <input type="checkbox" /> Goat Meat
            </label>
            <p>+₦700</p>
          </div>

          {/* Extra Sides */}
          <h3>Extra Sides (Optional)</h3>
          <div className="option-item extras">
            <label>
              <input type="checkbox" />Fried Plantain
            </label>
            <p>+₦700</p>
          </div>

          <div className="option-item extras">
            <label>
              <input type="checkbox" /> Coleslaw
            </label>
            <p>+₦500</p>
          </div>

          <div className="option-item extras">
            <label>
              <input type="checkbox" />Extra Pepper Sauce
            </label>
            <p>+₦300</p>
          </div>

          {/* Special Instructions */}
          <h3>Special Instructions</h3>
          <textarea
            placeholder="E.g No onion, food is too spicy, food is too hot"
            className="special-instructions"
          />

          <button className="submit-btn">
            Add to Cart
          </button>

        </div>
      </div>

      <Footer />
    </>
  );
}
