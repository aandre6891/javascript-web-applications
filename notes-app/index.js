console.log('The notes app is running');

const NotesModel = require('./notesModel');

const notemodel = new NotesModel();

console.log(notemodel.getNotes());