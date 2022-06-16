const express = require("express");
const router = express.Router();

const Products = require("../classes/products.js");

// Lista productos
router.get("/productos", (req, res) => {
  res.status(200).json(Products.getProducts);
});

// Agregar producto
router.post("/productos", (req, res) => {
  let prodData = Products.newProduct(req.body);
  res.status(201).json(prodData);
});

// Obtener producto
router.get("/productos/:id", (req, res) => {
  res.status(200).json(Products.getProduct(req.params.id));
});

// Actualizar producto
router.put("/productos/:id", (req, res) => {
  res.status(200).json(Products.updateProduct(req.body, req.params.id));
});

// Eliminar producto
router.delete("/productos/:id", (req, res) => {
  res.status(200).json(Products.deleteProduct(req.params.id));
});

module.exports = router;
