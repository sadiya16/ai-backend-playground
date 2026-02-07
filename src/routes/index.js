const express = require("express");
const router = express.Router();
const controller = require("../controllers/appController");

router.get("/health", controller.health);
router.get("/hello", controller.hello);

router.get("/greet/:name",controller.greatUser);
router.post("/echo",controller.echo);

module.exports = router;