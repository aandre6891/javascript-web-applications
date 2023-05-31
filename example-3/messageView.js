class MessageView {
  constructor() {
    this.mainContainerEL = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-message-button');
    this.deleteButtonEl = document.querySelector('#delete-message-button');
    this.inputEl = document.querySelector('#message-input');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.deleteButtonEl.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {
    const messageEl = document.createElement('div');
    messageEl.id = 'message';
    messageEl.innerText = this.inputEl.value;
    this.mainContainerEL.append(messageEl);
  }

  hideMessage() {
    const messageEl = document.querySelector('#message');
    messageEl.remove();
  }
}

module.exports = MessageView;