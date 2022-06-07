const express = require("express");
const app = express();
const Container = require("./container");
const product = new Container("products.txt");

app.use(express.json());

// Routing a listado de productos
app.get("/productos", async (req, res) => {
  try {
    const data = await product.getAll();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

// Routing a producto aleatorio
app.get("/productoRandom", async (req, res) => {
  const data = await product.getAll();
  const randomId = parseInt(Math.floor(Math.random() * data.length) + 1);
  res.send(await product.getById(randomId));
});

// Inicio server en 8080
app.listen(8080, () => {
  console.log("Server running on: http://localhost:8080");
});
