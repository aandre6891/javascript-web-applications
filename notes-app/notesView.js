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
      this.addNewNote();
    });
  }

  displayNotesFromApi() {
    this.client.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    },
      (error) => {
        this.displayError(error);
      }
    );
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

  addNewNote() {
    // this.model.addNote(newNote);
    this.client.createNote(this.inputEl.value, () => {
      this.displayNotesFromApi();
    });
  }

  displayError(errorMessage) {
    const errorEl = document.createElement("div");
    errorEl.textContent = "Oops, something went wrong!";
    errorEl.className = "error";
    this.mainContainerEl.append(errorEl);
  }
}

module.exports = NotesView;
