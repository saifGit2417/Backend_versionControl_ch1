const fsModule = require("fs");
// const jsonFile = JSON.parse(fsModule.readFileSync("./data.json", "utf-8"));
// const products = jsonFile.products;

const amazonProductsModel = require("../Models/Product.js");
const ProductModel = amazonProductsModel.AmazonProduct;

// CRUD operation via mongoose

// create via mongoose
exports.addNewProduct = async (req, res) => {
  const product = new ProductModel(req.body);
  product.title = "nothing phone one 2 without price";
  product.description = "new phone launched in markte";
  product.price = 99999;
  await product.save();
  res.json(req.body);
};

exports.getAllProduct = async (req, res) => {
  const product = new ProductModel();
  const products = await product.find().exec();
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
