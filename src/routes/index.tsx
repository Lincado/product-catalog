import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";

export default function RoutePages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/success" element={<Cart />} />
      </Routes>
    </>
  );
}
