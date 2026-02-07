import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

function Products({ addToCart }) {
  const [brand, setBrand] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      (brand === "" || p.brand === brand) &&
      (maxPrice === "" || p.price <= maxPrice)
  );

  return (
    <section className="products" id="produits">
      <h2>Nos Produits</h2>
      <Filters setBrand={setBrand} setMaxPrice={setMaxPrice} />
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default Products;