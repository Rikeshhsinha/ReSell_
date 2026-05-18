const Product = require("../models/Product");


// Create Product
exports.createProduct = async (req, res) => {

  try {

    const imagePaths = req.files.map(
      (file) => file.filename
    );

    const product = await Product.create({

      title: req.body.title,

      price: req.body.price,

      category: req.body.category,

      brand: req.body.brand,

      condition: req.body.condition,

      description: req.body.description,

      location: req.body.location,

      images: imagePaths,

      user: req.user.id,

    });

    res.status(201).json(product);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed To Add Product",
    });

  }
};


// Get All Products
exports.getProducts = async (req, res) => {

  try {

    const products = await Product.find()
      .populate("user")
      .sort({ createdAt: -1 });

    res.json(products);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed To Fetch Products",
    });

  }
};


// Get Single Product
exports.getSingleProduct = async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    ).populate("user");

    if (!product) {

      return res.status(404).json({
        message: "Product Not Found",
      });

    }

    res.json(product);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed To Fetch Product",
    });

  }
};