function Navbar({ cartCount }) {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="navbar">
      <h2>MORLAN-STORE</h2>
      <ul>
        <li onClick={() => scrollTo("top")}>Accueil</li>
        <li onClick={() => scrollTo("produits")}>Produits</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
        <li>🛒 {cartCount}</li>
      </ul>
    </nav>
  );
}

export default Navbar;