const express = require("express");
const routerApi = express.Router();

const Products = require("../classes/products.js");

// Lista productos
routerApi.get("/productos", (req, res) => {
  res.status(200).json(Products.getProducts);
});

// Agregar producto
routerApi.post("/productos", (req, res) => {
  let prodData = Products.newProduct(req.body);
  res.status(201).json(prodData);
});

// Obtener producto
routerApi.get("/productos/:id", (req, res) => {
  res.status(200).json(Products.getProduct(req.params.id));
});

// Actualizar producto
routerApi.put("/productos/:id", (req, res) => {
  res.status(200).json(Products.updateProduct(req.body, req.params.id));
});

// Eliminar producto
routerApi.delete("/productos/:id", (req, res) => {
  res.status(200).json(Products.deleteProduct(req.params.id));
});

module.exports = routerApi;
