const express = require("express");
const locationController = require("../controllers/LocationController");

const router = express.Router();

router.get("/", locationController.getLocationController);

module.exports = router;
