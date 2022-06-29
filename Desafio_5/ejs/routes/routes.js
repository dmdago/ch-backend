const express = require("express");
const router = express.Router();

const Products = require("../classes/products.js");

// Agregado de Ruta al Formulario
router.get("/", (req, res) => {
  res.render("index");
});

// Lista productos
router.get("/productos", (req, res) => {
  res.render("productsList", { products: Products.getProducts });
});

// Agregar producto
router.post("/productos", (req, res) => {
  Products.newProduct(req.body);
  res.redirect("/");
});

module.exports = router;
