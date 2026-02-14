import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
