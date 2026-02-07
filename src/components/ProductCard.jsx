import React from "react";

function ProductCard({ product, addToCart }) {
  if (!product) return null;

  return (
    <div className="card">
      <div
        className="image-placeholder"
        style={{
          backgroundImage: product.image ? `url(${product.image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "200px",
          borderRadius: "12px",
          marginBottom: "15px",
          backgroundColor: "#eee",
        }}
      />
      <h3>{product.name || "Nom produit"}</h3>
      <p>{product.price ? `${product.price} $` : "Prix"}</p>
      {addToCart ? (
        <button onClick={() => addToCart(product)}>Ajouter au panier</button>
      ) : (
        <button disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
          Ajouter au panier
        </button>
      )}
    </div>
  );
}

export default ProductCard;