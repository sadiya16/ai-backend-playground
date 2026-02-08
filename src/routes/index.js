const express = require("express");
const router = express.Router();
const controller = require("../controllers/appController");
const asyncHandler = require("../middleware/asyncHandler");
const noteController = require("../controllers/noteController");
const userController = require("../controllers/userController");

router.get("/health", controller.health);
router.get("/hello", asyncHandler(controller.hello));

router.get("/greet/:name",controller.greatUser);
router.post("/echo",controller.echo);

router.get("/notes", noteController.getNotes);
router.post("/notes", noteController.createNote);
router.delete("/notes/:id", noteController.deleteNote);

router.post("/signup",userController.signup);
router.post("/login",userController.login);

module.exports = router;