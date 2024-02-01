const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const gameControllers = require("./controllers/gameControllers");
const userControllers = require("./controllers/userControllers");
const editorControllers = require("./controllers/editorControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/game", gameControllers.browse);
router.get("/user", userControllers.browse);
router.get("/editor", editorControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/game/:id", gameControllers.read);
router.get("user/:id", userControllers.read);
router.get("/editor/:id", editorControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/game", gameControllers.add);
router.post("/user", userControllers.add);
router.post("/editor", editorControllers.add);

// Route to edit by ID
router.put("/game/edit/:id", gameControllers.update);
router.put("/user/:id", userControllers.update);
router.put("/editor/:id", editorControllers.update);

// Route to delete specific by Id
router.delete("/game/:id", gameControllers.destroy);
router.delete("/user/:id", userControllers.destroy);
router.delete("/editor/:id", editorControllers.destroy);
/* ************************************************************************* */

module.exports = router;
