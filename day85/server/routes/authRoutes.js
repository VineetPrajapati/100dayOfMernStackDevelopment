const express = require("express");
const {
  userRegister,
  userLogin,
  protectAuth,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/protected", protectAuth);

module.exports = router;
