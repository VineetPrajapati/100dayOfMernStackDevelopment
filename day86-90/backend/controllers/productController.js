const Product = require("../models/Product");

exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { title, description, price, stock, image } = req.body;
    const product = await Product.create({
      title,
      description,
      price,
      stock,
      image,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: "Product creation failed", err });
  }
};
