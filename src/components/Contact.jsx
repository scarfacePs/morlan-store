function Contact({ cart }) {
  // Message WhatsApp pré-rempli
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite commander les produits suivants :\n" +
      cart.map((item) => `${item.name} – ${item.price} $`).join("\n")
  );

  const whatsappLink = `https://wa.me/50912345678?text=${whatsappMessage}`;

  return (
    <section id="contact" style={{ padding: "100px 40px", background: "#eee" }}>
      <h2>Contactez-nous</h2>
      <p>📧 Email: contact@sneakershop.com</p>
      <p>📞 Téléphone: +509 1234 5678</p>

      <form style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px", maxWidth: "600px" }}>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Envoyer</button>
      </form>

      <a href={whatsappLink} target="_blank">
        <button style={{ marginTop: "20px", background: "#25D366", color: "white", padding: "10px 20px", border: "none", borderRadius: "12px", cursor: "pointer" }}>
          Commander via WhatsApp
        </button>
      </a>
    </section>
  );
}

export default Contact;