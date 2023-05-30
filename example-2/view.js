class View {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = "This paragraph has been dynamically added by JavaScript!";
    this.mainContainerEl.append(newParagraph);
  }

  clearParagraphs() {
    this.mainContainerEl.remove('p');
  }
}

module.exports = View;
