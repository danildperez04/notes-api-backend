let notes = require('../db');

const getAllNotes = (req, res) => {
  res.json(notes);
};

const getSingleNote = (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => note.id === Number(id));

  if (!note) {
    res.status(404).send('Not found');
  }

  res.json(note);
};

const createNote = (req, res) => {
  const { important, content } = req.body;

  const ids = notes.map((note) => note.id);
  const maxId = Math.max(...ids);

  const newNote = {
    id: maxId + 1,
    content,
    important: important || false,
    date: new Date().toISOString(),
  };

  notes = [...notes, newNote];

  res.status(201).json(newNote);
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== id);
  res.status(204).send('Item deleted');
};

module.exports = {
  getAllNotes,
  getSingleNote,
  createNote,
  deleteNote,
};
