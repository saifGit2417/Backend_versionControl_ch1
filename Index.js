// chapter 4 starting learning REST Api and CRUD
const express = require("express");
const portNumber = 8001;

const fsModule = require("fs");
const htmlFile = fsModule.readFileSync("index.html", "utf-8");
const jsonFile = JSON.parse(fsModule.readFileSync("data.json", "utf-8"));
const products = jsonFile.products;

const morgan = require("morgan");
const server = express();

// body parser
server.use(express.json());

// enable third party logger

server.use(morgan("default"));

// to send static file
server.use(express.static("public"));

// C R U D Api's 

///create POST apir using post method / products
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(req.body);
});


//read api read all docs using get method
server.get("/products", (req, res) => {
  res.json(products);
});

// read data based on product id
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const idOfProduct = products.find(p => p.id === id);
  res.json(idOfProduct);
});

// update api by targeting via id - PUT method
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const idOfProduct = products.find(p => p.id === id);
  products.splice(idOfProduct,1,{...req.body,id:id})
  res.status(201).json();
});


// update api by targeting via id - PATCH method
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const idOfProduct = products.find(p => p.id === id);
  const product=products[idOfProduct]
  products.splice(idOfProduct,1,{...product,...req.body})
  res.status(201).json();
});

// delete api -DELETE type
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const idOfProduct = products.find(p => p.id === id);
  const product=products[idOfProduct]
  products.splice(idOfProduct,1)
  res.status(201).json(product);
});

server.listen(portNumber, () => console.log("server started at " + portNumber));
