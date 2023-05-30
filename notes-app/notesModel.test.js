const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  it("should return an empty array when no notes are added", () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it("should now return ['Buy milk', 'Go to the gym']", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");

    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("should reset the array", () => {
    const model = new NotesModel();
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
