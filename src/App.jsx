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

    const phone = "+923363848063";

    const url = `https://wa.me/${phone}?text=${msg}`;

    window.open(url, "_blank");
  };

  return (
  <Routes>

    ```jsx id="w0h4oj"
<Route
  path="/"
  element={
    <div
      style={{
        minHeight: "100vh",
        background: "#fdf2f8",
        padding: 30,
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#be185d",
          fontSize: "50px",
        }}
      >
        🛍️ Rosavelle Store
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: 40,
          fontSize: 18,
        }}
      >
        Luxury & Stylish Ladies Handbags
      </p>

      {/* PRODUCTS */}

      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
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
                width: 240,
                background: "white",
                borderRadius: 15,
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: 15 }}>
                <h3>{p.name}</h3>

                <p
                  style={{
                    color: "#db2777",
                    fontWeight: "bold",
                  }}
                >
                  Rs {p.price}
                </p>

                <button
                  style={{
                    background: "#be185d",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              
<button
  onClick={(e) => {
    e.preventDefault();
    addToCart(p);
  }}
  style={{
    marginTop: 10,
    background: "#db2777",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: 8,
    cursor: "pointer",
    width: "100%",
  }}
>
  Add To Cart
</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <hr style={{ margin: "40px 0" }} />

      {/* CART */}

      <h2 style={{ color: "#be185d" }}>
        🛒 Cart ({cart.length})
      </h2>

      {cart.map((c, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          {c.name} - Rs {c.price}

          <button
            onClick={() => removeFromCart(i)}
            style={{
              marginLeft: 10,
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: 💰 Rs {total}</h3>

      {/* WHATSAPP BUTTON */}

      <button
        onClick={sendWhatsApp}
        style={{
          marginTop: 15,
          padding: "12px 25px",
          background: "#25D366",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: 10,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        📲 WhatsApp Order
      </button>
    </div>
  }
/>

  </Routes>
  );
}
  