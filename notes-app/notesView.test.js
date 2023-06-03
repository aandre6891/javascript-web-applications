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

  it("it should display two notes from the server", () => {
    const inputEl = document.querySelector("#note-input");
    inputEl.value = "This is a new note";
    const buttonEl = document.querySelector("#add-note-btn");
    
    const mockClient = {
      loadNotes: jest.fn(),
      createNote: jest.fn(),
    };

    mockClient.loadNotes.mockImplementationOnce((callback) => {
      callback(["This is a new note", "This is another note"]);
    });

    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
    buttonEl.click();
    view.displayNotesFromApi();
    expect(document.querySelectorAll(".note").length).toBe(2);
    expect(document.querySelectorAll(".note")[0].textContent).toBe(
      "This is a new note"
    );
    expect(document.querySelectorAll(".note")[1].textContent).toBe(
      "This is another note"
    );
    expect(mockClient.createNote).toHaveBeenCalled();
  });

  it("should display the notes from the API", () => {
    const mockClient = {
      loadNotes: jest.fn(),
    };

    mockClient.loadNotes.mockImplementationOnce((callback) => {
      callback(["This is a new note", "This is another note"]);
    });

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

  it('should display an error message', async () => {
    const mockClient = {
      loadNotes: jest.fn(),
    };

    mockClient.loadNotes.mockImplementationOnce((successCallback, errorCallback) => {
      errorCallback('Error');
    });

    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
    jest.spyOn(view, 'displayError');
    await view.displayNotesFromApi();

    expect(view.displayError).toHaveBeenCalled();
  })
});
