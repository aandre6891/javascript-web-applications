/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });
  
  it("it shouldn't display any notes", () => {
    const notesmodel = new NotesModel();
    const notesview = new NotesView(notesmodel);
    
    notesview.displayNotes();
    
    expect(document.querySelector('div.note')).toEqual(null);
  })
  
  it("it should display two notes", () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('First note');
    model.addNote('Second note');

    view.displayNotes();

    expect(document.querySelectorAll('.note').length).toEqual(2);
  })
})