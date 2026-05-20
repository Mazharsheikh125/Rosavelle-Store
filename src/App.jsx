import { useEffect, useState } from "react";

import bag1 from "./assets/images/handbag3.jpg";
import bag2 from "./assets/images/handbag4.jpg";
import bag3 from "./assets/images/handbag2.jpg";
import bag4 from "./assets/images/handbag1.jpg";

import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

export default function App() {
  const [products] = useState([
  {
  id: 1,
  name: "Elegant Ladies Handbag",
  price: 1000,
  image: bag1,
  description: "Premium stylish ladies handbag with elegant design and high quality leather.",
},
  {
  id: 2,
  name: "Luxury Black Handbag",
  price: 1250,
  image: bag2,
  description: "Luxury black handbag perfect for parties and casual outings.",
},
  {
  id: 3,
  name: "Stylish Pink Handbag",
  price: 1100,
  image: bag3,
  description:
    "Beautiful pink handbag with modern fashion design for everyday use.",
},
  {
  id: 4,
  name: "Classic Leather Handbag",
  price: 850,
  image: bag4,
  description:
    "Classic leather handbag with premium finishing and elegant look.",
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
  const total = cart.reduce((sum, item) => sum + item.price , 0);

  // 🟢 WHATSAPP ORDER (FIXED ENCODING)
  const sendWhatsApp = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    let msg = "🛒 Order:%0A";

    cart.forEach((item, i) => {
      msg += `${i + 1}. ${item.name} - Rs.${item.price}%0A`;
    });

    msg += `%0ATotal: Rs.${total}`;

    const phone = "923363848063";

    const url = `https://wa.me/${phone}?text=${msg}`;

    window.open(url, "_blank");
  };

  return (
  <Routes>

    <Route
      path="/"
      element={
        <div style={{ padding: 20, fontFamily: "Arial" }}> 

      <h1>🛍️ Rosavelle Store </h1>


      {/* 🟢 PRODUCTS */}

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
  {products.map((p) => (
    
    <Link
      key={p.id}
      to={`/product/${p.id}`}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: 10,
          width: 200,
          borderRadius: 10,
          textAlign: "center",
        }}
      >
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

        <p>Rs {p.price}</p>
      </div>

    </Link>

  ))}
</div>

      <hr />

      {/* 🟢 CART */}
      <h2>🛒 Cart ({cart.length})</h2>

      {cart.map((c, i) => (
        <div key={i} style={{ marginBottom: 5 }}>
          {c.name} - Rs{c.price}
          <button
            onClick={() => removeFromCart(i)}
            style={{ marginLeft: 10 }}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: 💰 Rs{total}</h3>

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
      }
    />

    <Route
      path="/product/:id"
      element={
        <ProductDetails
          products={products}
          addToCart={addToCart}
        />
      }
    />

  </Routes>
  );
}
  