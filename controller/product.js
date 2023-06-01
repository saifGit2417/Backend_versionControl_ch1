const fsModule=require('fs')
const jsonFile = JSON.parse(fsModule.readFileSync("./data.json", "utf-8"));
const products = jsonFile.products;

exports.addNewProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(req.body);
};

exports.getAllProduct = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const id = +req.params.id;
  const idOfProduct = products.find(p => p.id === id);
  res.json(idOfProduct);
};

exports.putproduct = (req, res) => {
  const id = +req.params.id;
  const idOfProduct = products.find(p => p.id === id);
  products.splice(idOfProduct, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.patchProduct = (req, res) => {
  const id = +req.params.id;
  const idOfProduct = products.find(p => p.id === id);
  const product = products[idOfProduct];
  products.splice(idOfProduct, 1, { ...product, ...req.body });
  res.status(201).json();
};

exports.deleteProductById = (req, res) => {
  const id = +req.params.id;
  const idOfProduct = products.find(p => p.id === id);
  const product = products[idOfProduct];
  products.splice(idOfProduct, 1);
  res.status(201).json(product);
};


