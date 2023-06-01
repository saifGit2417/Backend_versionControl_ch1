// chapter 5 - concpet of MVC  model view contreller
// we will be using es6 methods isntaed of using require mehtod
// tried using es6 method but getting node version error hence needed to go back to commonjs method

// import express from "express";
const express = require("express");
// import fsModule from "fs";
const fsModule = require("fs");
// import morgan from "morgan";
const morgan = require("morgan");

const htmlFile = fsModule.readFileSync("index.html", "utf-8");
const jsonFile = JSON.parse(fsModule.readFileSync("data.json", "utf-8"));
const products = jsonFile.products;
const portNumber = 8001;
const server = express();
const productRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");

// body parser
server.use(express.json());

// enable third party logger
// server.use(morgan("default"));

// to send static file
server.use(express.static("public"));

server.use("/products", productRouter.router);
server.use("/user", userRouter.router);

server.listen(portNumber, () => {
  return true, console.log("server started at " + portNumber);
});
