const Product = require("../models/Product");
exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { title, description, price, stock, image } = req.body;

    // Validate request
    if (!title || !description || !price || !stock || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.create({
      title,
      description,
      price,
      stock,
      image,
    });

    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(400).json({ message: "Product creation failed", error });
  }
};
