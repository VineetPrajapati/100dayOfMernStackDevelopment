const express = require("express");
const {getProduct, addProduct} = require("../controllers/productController");
const router = express.Router();

router.get("/", getProduct);
router.post("/add", addProduct);

module.exports = router;
