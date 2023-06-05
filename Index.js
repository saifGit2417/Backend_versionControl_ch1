// chapter 6 learnt about db compass and db atlas

// import express from "express";
const express = require("express");
// import fsModule from "fs";
const fsModule = require("fs");
// import morgan from "morgan";
const morgan = require("morgan");
require('dotenv').config()

const htmlFile = fsModule.readFileSync("index.html", "utf-8");
const jsonFile = JSON.parse(fsModule.readFileSync("data.json", "utf-8"));
const products = jsonFile.products;
const portNumber = 8002;
const server = express();
const productRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");

// body parser
server.use(express.json());

// Sohel#1234--admin
// l3KoE3lFFY4OtzFk  - datbase

//MdSaifDB ---  QrfwSIZL4VeZzPbc

//MdSaif -------  QrfwSIZL4VeZzPbc

//saifnavneettoptech -------- mhSBIz3EqD0i51Uk

// enable third party logger
// server.use(morgan("default"));

// to send static file
server.use(express.static("public"));

server.use("/products", productRouter.router);
server.use("/user", userRouter.router);

server.listen(portNumber, () => {
  return true, console.log("server started at " + portNumber);
});
