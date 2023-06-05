// import express from "express";
const express = require("express");
// import fsModule from "fs";
const fsModule = require("fs");
// import morgan from "morgan";
const morgan = require("morgan");

// accesing dotenv files
require('dotenv').config()

const htmlFile = fsModule.readFileSync("index.html", "utf-8");
const jsonFile = JSON.parse(fsModule.readFileSync("data.json", "utf-8"));
const products = jsonFile.products;
const server = express();
const productRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");

server.use(express.json());

server.use(express.static("public"));

server.use("/products", productRouter.router);
server.use("/user", userRouter.router);

server.listen(process.env.PORTNUMBER, () => {
  return true, console.log("server started at " + process.env.PORTNUMBER);
});
