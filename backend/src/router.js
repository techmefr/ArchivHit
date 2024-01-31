const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const gameControllers = require("./controllers/gameControllers");
const userControllers = require("./controllers/userControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/game", gameControllers.browse);
router.get("/user", userControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/game/:id", gameControllers.read);
router.get("user/:id", userControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/game", gameControllers.add);
router.post("/user", userControllers.add);

// Route to edit by ID
router.put("/game/:id", gameControllers.update);
router.put("/user/:id", userControllers.update);

// Route to delete specific by Id
router.delete("/game/:id", gameControllers.destroy);
router.delete("/user/:id", userControllers.destroy);
/* ************************************************************************* */

module.exports = router;
