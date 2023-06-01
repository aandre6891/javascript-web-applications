/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const NotesClient = require("./notesClient");

describe("NotesView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("it shouldn't display any notes", () => {
    const notesmodel = new NotesModel();
    const notesview = new NotesView(notesmodel);

    notesview.displayNotes();

    expect(document.querySelector("div.note")).toEqual(null);
  });

  it("it should display one note", () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    const inputEl = document.querySelector("#note-input");
    inputEl.value = "This is a new note";
    const buttonEl = document.querySelector("#add-note-btn");
    buttonEl.click();

    expect(document.querySelectorAll(".note").length).toEqual(1);
    expect(document.querySelectorAll(".note")[0].textContent).toEqual(
      "This is a new note"
    );
  });

  it("it should display always 2 notes", () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    const inputEl = document.querySelector("#note-input");
    inputEl.value = "This is a new note";
    const buttonEl = document.querySelector("#add-note-btn");
    buttonEl.click();
    buttonEl.click();

    expect(document.querySelectorAll(".note").length).toEqual(2);
  });

  it("should display the notes from the API", () => {
    const mockClient = {
      loadNotes: jest.fn()
    };

    mockClient.loadNotes.mockImplementationOnce((callback) => {
      callback(["This is a new note", "This is another note"]);
    })

    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
    view.displayNotesFromApi();
    expect(document.querySelectorAll(".note").length).toBe(2);
    expect(document.querySelectorAll(".note")[0].textContent).toBe(
      "This is a new note"
    );
    expect(document.querySelectorAll(".note")[1].textContent).toBe(
      "This is another note"
    );
  });
});
