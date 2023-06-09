// import express from "express";

const express = require("express");
const productController = require("../controller/product");
const router = express.Router();

router
  .get("/", productController.getAllProduct)
  // .get("/ssr", productController.getAllProductSSR)
  .get("/:id", productController.getProductById)
  .post("/", productController.addNewProduct)
  .put("/:id", productController.putproduct)
  .patch("/:id", productController.patchProduct)
  .delete("/:id", productController.deleteProductById);

exports.router = router;
