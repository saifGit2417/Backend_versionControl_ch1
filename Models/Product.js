const mongoose = require("mongoose");
const { Schema } = mongoose;

// db connection code
// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
// getting-started.js
async function main() {
  await mongoose.connect("mongodb://localhost:27017/amzaon");
  console.log("databse connected");
}
main().catch(err => console.log(err));

// making schema , so whats need to be added in the data base its like a structure
// configuration schema
const productSchema = new Schema({
  title: { type: String, require: true, unique: true },
  description: String,
  price: { type: Number, required: true }
});

exports.AmazonProduct = mongoose.model("AmazonProduct", productSchema);
// first argument within model shows e.g 'product-- this will be connections name
// second argument will be name of your schema which define the structure of your entries
