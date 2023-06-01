const NotesModel = require("./notesModel");
const NotesClient = require("./notesClient");

class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
    this.buttonEl = document.querySelector("#add-note-btn");
    this.inputEl = document.querySelector("#note-input");

    this.buttonEl.addEventListener("click", () => {
      this.addNewNote(this.inputEl.value);
    });
  }

  displayNotesFromApi() {
    this.client.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }
  

  displayNotes() {
    const notesEl = document.querySelectorAll(".note");
    notesEl.forEach((note) => {
      note.remove();
    });
    
    const allNotes = this.model.getNotes();
    allNotes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.textContent = note;
      noteEl.className = "note";
      this.mainContainerEl.append(noteEl);
    });
    this.inputEl.value = "";
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }
}

module.exports = NotesView;
