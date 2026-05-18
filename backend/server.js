const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();


// Database Connection
connectDB();


// Middleware
app.use(cors());

app.use(express.json());

app.use("/uploads", express.static("uploads"));


// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/products", require("./routes/productRoutes"));


// Test Route
app.get("/", (req, res) => {
  res.send("API Running Successfully");
});


// Port
const PORT = process.env.PORT || 5000;


// Server Start
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});