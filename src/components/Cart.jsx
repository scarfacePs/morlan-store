function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h3>Panier 🛒</h3>
      {cart.length === 0 && <p>Panier vide</p>}
      {cart.map((item, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
          <span>
            {item.name} – {item.price} $
          </span>
          <button
            onClick={() => removeFromCart(index)}
            style={{
              background: "#ff4d4d",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "2px 8px",
              cursor: "pointer"
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;