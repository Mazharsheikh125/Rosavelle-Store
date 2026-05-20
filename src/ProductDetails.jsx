import { useParams, Link } from "react-router-dom";

export default function ProductDetails({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: 20 }}>

      <Link to="/">
        ← Back
      </Link>

      <div
        style={{
          display: "flex",
          gap: 30,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: 350,
            borderRadius: 10,
          }}
        />

        <div>
          <h1>{product.name}</h1>

          <p
            style={{
              maxWidth: 400,
              color: "#555",
            }}
          >
            {product.description}
          </p>

          <h2>💰 Rs {product.price}</h2>

          <button
            onClick={() => addToCart(product)}
            style={{
              padding: "12px 25px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}