import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function App() {
  // Panier avec localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <div id="top">
      <Navbar cartCount={cart.length} />
      <Hero />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Products addToCart={addToCart} />
      <Contact cart={cart} />
    </div>
  );
}

export default App;
