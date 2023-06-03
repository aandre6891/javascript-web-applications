class NotesModel {
  constructor() {
    this.notes = [];
  }
  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  setNotes(notes) {
    this.notes = Array.isArray(notes) ? notes : [];
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;
