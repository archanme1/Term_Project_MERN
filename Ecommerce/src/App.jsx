// import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
import Search from "./routes/Search";
import ContactUs from "./routes/ContactUs";
import UserProfile from "./routes/UserProfile";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Index from "./routes/Index";
import Webfont from "WebFontLoader";
import React from "react";
import Payment from "./routes/Paymentgatwat";
import ProductDetails from "./routes/ProductDetails";

function App() {
  React.useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  });
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/product" element={<Products />} />
      <Route path="/search" element={<Search />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/UserProfile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
