const router = require("express").Router();
const multer = require("multer");

const auth = require("../middleware/authMiddleware");

const {
  createProduct,
  getProducts,
  getSingleProduct,
} = require("../controllers/productController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", auth, upload.single("image"), createProduct);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);

module.exports = router;