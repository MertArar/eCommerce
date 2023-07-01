import React from "react";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default NavRoutes;
