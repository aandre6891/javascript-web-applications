const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());

let notes = [
  'This is an example note already in the server'
];


app.get('/notes', (_req, res) => {
  res.send(JSON.stringify(notes));
});

app.post('/notes', (req, res) => {
  notes.push(req.body.content)
  res.send(JSON.stringify(notes));
});

app.delete('/notes', (req, res) => {
  notes = [];
  res.send(JSON.stringify(notes))
});

app.listen(PORT);