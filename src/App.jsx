import { useEffect, useState } from "react";

import bag1 from "./assets/images/handbag3.jpg";
import bag2 from "./assets/images/handbag4.jpg";
import bag3 from "./assets/images/handbag2.jpg";
import bag4 from "./assets/images/handbag1.jpg";

export default function App() {
  const [products] = useState([
  {
    id: 1,
    name: "Elegant Ladies Handbag",
    price: 50,
    image: bag1,
  },
  {
    id: 2,
    name: "Luxury Black Handbag",
    price: 70,
    image: bag2,
  },
  {
    id: 3,
    name: "Stylish Pink Handbag",
    price: 90,
    image: bag3,
  },
  {
    id: 4,
    name: "Classic Leather Handbag",
    price: 120,
    image: bag4,
  },
]);
  const [cart, setCart] = useState([]);

  // 🟢 ADD TO CART
  const addToCart = (p) => {
    setCart((prev) => [...prev, p]);
  };

  // 🟢 REMOVE FROM CART
  const removeFromCart = (i) => {
    setCart((prev) => prev.filter((_, index) => index !== i));
  };

  // 🟢 TOTAL
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // 🟢 WHATSAPP ORDER (FIXED ENCODING)
  const sendWhatsApp = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    let msg = "🛒 Order:%0A";

    cart.forEach((item, i) => {
      msg += `${i + 1}. ${item.name} - $${item.price}%0A`;
    });

    msg += `%0ATotal: $${total}`;

    const phone = "923363848063";

    const url = `https://wa.me/${phone}?text=${msg}`;

    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>

      <h1>🛍️ Rosavelle Store </h1>

      <h2>Products</h2>

      {/* 🟢 PRODUCTS */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              width: 200,
              borderRadius: 10,
              textAlign: "center",
            }}
          >

            {/* 🟢 IMAGE FIX */}
            <img
  src={p.image}
  alt={p.name}
  style={{
    width: "100%",
    height: 150,
    objectFit: "cover",
    borderRadius: 8,
  }}
/>

            <h3>{p.name}</h3>
            <p>💲 {p.price}</p>

            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <hr />

      {/* 🟢 CART */}
      <h2>🛒 Cart ({cart.length})</h2>

      {cart.map((c, i) => (
        <div key={i} style={{ marginBottom: 5 }}>
          {c.name} - ${c.price}
          <button
            onClick={() => removeFromCart(i)}
            style={{ marginLeft: 10 }}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: 💰 ${total}</h3>

      {/* 🟢 WHATSAPP BUTTON */}
      <button
        onClick={sendWhatsApp}
        style={{
          marginTop: 10,
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: 5,
        }}
      >
        📲 WhatsApp Order
      </button>

    </div>
  );
}