const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    location: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);