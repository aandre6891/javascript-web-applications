class NotesClient {
  loadNotes(successCallback, errorCallback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => {
        successCallback(data);
      })
      .catch((error) => {
        errorCallback(error);
      });
  }

  createNote(note, successCallback, errorCallback) {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({content: note}),
    })
      .then((response) => response.json())
      .then((data) => {
        successCallback(data);
        console.log("Success:", data);
      }) 
      .catch((error) => {
        errorCallback(error);
      });
  }

  resetNotes(successCallback, errorCallback) {
    fetch("http://localhost:3000/notes", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        successCallback(data);
        console.log("Success:", data);
      })
      .catch((error) => {
        errorCallback(error);
      });
  }  
}

module.exports = NotesClient;
