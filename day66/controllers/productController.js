const Product = require("../models/product");

const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = addProduct;
