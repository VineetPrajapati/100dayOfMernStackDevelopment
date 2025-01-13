const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    validte: {
      validator: (value) => value > 0,
      message: `Price must be a positive number`,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports =  Product