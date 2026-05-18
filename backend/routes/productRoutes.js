const router = require("express").Router();

const multer = require("multer");

const auth = require("../middleware/authMiddleware");

const {
  createProduct,
  getProducts,
  getSingleProduct,
} = require("../controllers/productController");


// Multer Storage
const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads/");

  },

  filename: function (req, file, cb) {

    cb(null, Date.now() + "-" + file.originalname);

  },

});


// Upload
const upload = multer({ storage });


// Create Product
router.post(
  "/",
  auth,
  upload.array("images", 5),
  createProduct
);


// Get Products
router.get("/", getProducts);


// Get Single Product
router.get("/:id", getSingleProduct);


module.exports = router;