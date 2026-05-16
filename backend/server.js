const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Elegant Ladies Handbag",
    price: 50,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Luxury Black Handbag",
    price: 70,
    image: "https://via.placeholder.com/200"
  }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/order", (req, res) => {
  console.log("ORDER RECEIVED:", req.body);
  res.json({ message: "Order received" });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});