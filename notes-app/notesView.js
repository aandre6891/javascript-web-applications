const NotesModel = require("./notesModel");

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    this.buttonEl = document.querySelector("#add-note-btn");
    this.inputEl = document.querySelector("#note-input");

    this.buttonEl.addEventListener("click", () => {
      this.addNewNote(this.inputEl.value);
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
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }
}

module.exports = NotesView;
