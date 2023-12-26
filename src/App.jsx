import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart";
import Order from "./pages/Order/order";
import NoPages from "./pages/nopages/NoPages";
import Dashboard from "./pages/Admin/dashboard/Dashboard";
import MyState from "./context/data/myState.jsx";
import Login from "./components/registration/Login.jsx";
import Signup from "./components/registration/Signup.jsx";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoPages />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
