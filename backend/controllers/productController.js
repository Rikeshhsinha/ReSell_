const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      image: req.file.filename,
      user: req.user.id,
    });

    res.json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("user")
      .sort({ createdAt: -1 });

    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("user");

    res.json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};