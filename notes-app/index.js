console.log('The notes app is running');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const model = new NotesModel();
const view = new NotesView(model);

model.addNote('this is a test note');
view.displayNotes();


console.log(model.getNotes());