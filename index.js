const express = require('express');
const cors = require('cors');
const { logger } = require('./middleware/logger');
const PORT = process.env.PORT || 3001;
const app = express();
const notesRouter = require('./routes/notes');

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

app.use('/api/notes', notesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
