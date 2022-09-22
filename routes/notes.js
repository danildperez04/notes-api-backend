const express = require('express');
const {
	getAllNotes,
	getSingleNote,
	deleteNote,
	createNote,
} = require('../controller/notes');
const router = express.Router();

router.route('/').get(getAllNotes).post(createNote);

router.route('/:id').get(getSingleNote).delete(deleteNote);

module.exports = router;
