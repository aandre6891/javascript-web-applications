class MessageView {
  constructor() {
    this.mainContainerEL = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-message-button');
    this.deleteButtonEl = document.querySelector('#delete-message-button');

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
    messageEl.innerText = 'This message displayed by JavaScript';
    this.mainContainerEL.append(messageEl);
  }

  hideMessage() {
    const messageEl = document.querySelector('#message');
    messageEl.remove();
  }
}

module.exports = MessageView;