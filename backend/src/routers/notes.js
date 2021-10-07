const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");
// const { authenticateJwtToken } = require("../controllers/auth");

router.get("/", notesController.getAllNotes);

router.get("/:id", notesController.getNotesById);

router.post("/createNote", notesController.createNote);

module.exports = router;
