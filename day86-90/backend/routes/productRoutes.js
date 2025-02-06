const express = require("express");
const {getProduct, getProductById, addProduct} = require("../controllers/productController");
const { authenticate, isAdmin } = require("../middleware/authMiddleware")
const router = express.Router();

router.get("/", getProduct);
router.get("/:id", getProductById);
router.post("/add", authenticate, isAdmin, addProduct);

module.exports = router;
