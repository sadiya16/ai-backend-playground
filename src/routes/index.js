const express = require("express");
const router = express.Router();
const controller = require("../controllers/appController");
const asyncHandler = require("../middleware/asyncHandler");

router.get("/health", controller.health);
router.get("/hello", asyncHandler(controller.hello));

router.get("/greet/:name",controller.greatUser);
router.post("/echo",controller.echo);

module.exports = router;