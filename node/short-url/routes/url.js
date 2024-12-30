const express = require("express");
const router = express.Router();

// controller
const {
  handleGenerateNewShortURL,
  handleShortUrlById,
  handleGetAnalytics,
} = require("../controllers/url");

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleShortUrlById);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
