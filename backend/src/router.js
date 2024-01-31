const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const gameControllers = require("./controllers/gameControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/game", gameControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/game/:id", gameControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/game", gameControllers.add);

// Route to edit by ID
router.put("/game/:id", gameControllers.update);

// Route to delete specific by Id
router.delete("/game/:id", gameControllers.destroy);
/* ************************************************************************* */

module.exports = router;
