/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and shows a message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = "Hello world";
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('clicks the button and deletes the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const deleteButtonEl = document.querySelector('#delete-message-button');
    deleteButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});