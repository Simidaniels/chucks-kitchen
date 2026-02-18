import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // separate file
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/Fooddetails";
import Cart from "./pages/Cart";
import OrderSummary from "./pages/OrderSummary";
import DeliveryDetails from "./pages/DeliveryDetails";
import Payment from "./pages/Payment";


function Home() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />}  />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/checkout" element={<DeliveryDetails />} />
        <Route path="/payment" element={<Payment />} />


      </Routes>
    </Router>
    </CartProvider>
  );
}


