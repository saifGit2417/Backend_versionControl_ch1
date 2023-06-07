const fsModule = require("fs");
const mongoose = require("mongoose");

const amazonProductsModel = require("../Models/Product.js");
const ProductModel = amazonProductsModel.AmazonProduct;

// CRUD operation via mongoose

// create via mongoose
exports.addNewProduct = async (req, res) => {
  const product = new ProductModel(req.body);
  product.title = "oppo reno f2";
  product.description = "new phone launched in markte";
  product.price = 99999;
  await product.save();
  res.json(req.body);
};

// get all product by using mongoose schema and method
exports.getAllProduct = async (req, res) => {
  const products = await ProductModel.find();
  res.json(products);
};

// get product by id using mongoose and its method
exports.getProductById = async (req, res) => {
  const id = req.params.id;
  console.log({ id });
  const idOfProduct = await ProductModel.findById(id);
  res.json(idOfProduct);
};

// replace product using mongoose and its method
// using try and catch block so that we can catch error immidiately
// replace will replace all the previous data only the new data which you enterd will be there all previous data will get lost
exports.putproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const replaceEntryDoc = await ProductModel.findOneAndReplace(
      { _id: id },
      req.body
    );
    res.status(201).json(replaceEntryDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// upadting product using mongoose and its schema
// we will update whatw e pass and keep whats already there
// patch request
exports.patchProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedEntryDoc = await ProductModel.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(201).json(updatedEntryDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEntryDoc = await ProductModel.findByIdAndDelete({ _id: id });
    res.status(201).json(deletedEntryDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
